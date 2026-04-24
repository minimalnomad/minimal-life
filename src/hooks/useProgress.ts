import { useState, useEffect, useCallback } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "./useAuth";

interface ProgressRecord {
  stage: number;
  day: number;
  task_index: number;
  completed: boolean;
}

export function useProgress() {
  const { user } = useAuth();
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [currentStage, setCurrentStage] = useState(1);
  const [currentDay, setCurrentDay] = useState(1);

  // Build a key like "s1d1t0" from stage/day/task_index
  const buildKey = (stage: number, day: number, taskIndex: number) =>
    `s${stage}d${day}t${taskIndex}`;

  // Parse a key back to stage/day/task_index
  const parseKey = (key: string) => {
    const match = key.match(/s(\d+)d(\d+)t(\d+)/);
    if (!match) return null;
    return {
      stage: parseInt(match[1]),
      day: parseInt(match[2]),
      taskIndex: parseInt(match[3]),
    };
  };

  // Load all progress from Supabase
  const loadProgress = useCallback(async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from("user_progress")
        .select("stage, day, task_index, completed")
        .eq("user_id", user.id)
        .eq("completed", true);

      if (error) throw error;

      const keys = new Set<string>();
      if (data) {
        data.forEach((record: ProgressRecord) => {
          keys.add(buildKey(record.stage, record.day, record.task_index));
        });
      }
      setCompletedTasks(keys);

      // Find the current stage and day (first incomplete day)
      findCurrentPosition(keys);
    } catch (error) {
      console.error("Failed to load progress:", error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Find the first incomplete day
  const findCurrentPosition = (keys: Set<string>) => {
    for (let stage = 1; stage <= 3; stage++) {
      for (let day = 1; day <= 7; day++) {
        const dayComplete = isDayCompleteFromKeys(keys, stage, day);
        if (!dayComplete) {
          setCurrentStage(stage);
          setCurrentDay(day);
          return;
        }
      }
    }
    // All stages complete
    setCurrentStage(3);
    setCurrentDay(7);
  };

  // Check if a day is complete from a set of keys
  const isDayCompleteFromKeys = (
    keys: Set<string>,
    stage: number,
    day: number,
  ): boolean => {
    for (let i = 0; i < 10; i++) {
      if (!keys.has(buildKey(stage, day, i))) return false;
    }
    return true;
  };

  // Toggle a task
  const toggleTask = useCallback(
    async (taskId: string) => {
      if (!user) return;

      const parsed = parseKey(taskId);
      if (!parsed) return;

      const isCompleted = completedTasks.has(taskId);

      // Optimistic update
      setCompletedTasks((prev) => {
        const next = new Set(prev);
        if (isCompleted) {
          next.delete(taskId);
        } else {
          next.add(taskId);
        }
        return next;
      });

      try {
        if (isCompleted) {
          // Uncomplete: delete the record
          await supabase
            .from("user_progress")
            .delete()
            .eq("user_id", user.id)
            .eq("stage", parsed.stage)
            .eq("day", parsed.day)
            .eq("task_index", parsed.taskIndex);
        } else {
          // Complete: upsert the record
          await supabase.from("user_progress").upsert(
            {
              user_id: user.id,
              stage: parsed.stage,
              day: parsed.day,
              task_index: parsed.taskIndex,
              completed: true,
              completed_at: new Date().toISOString(),
            },
            {
              onConflict: "user_id,stage,day,task_index",
            },
          );
        }
      } catch (error) {
        // Revert optimistic update on failure
        console.error("Failed to sync task:", error);
        setCompletedTasks((prev) => {
          const next = new Set(prev);
          if (isCompleted) {
            next.add(taskId);
          } else {
            next.delete(taskId);
          }
          return next;
        });
      }
    },
    [user, completedTasks],
  );

  // Check if a specific day is complete
  const isDayComplete = (stage: number, day: number): boolean => {
    return isDayCompleteFromKeys(completedTasks, stage, day);
  };

  // Check if a stage is complete
  const isStageComplete = (stage: number): boolean => {
    for (let day = 1; day <= 7; day++) {
      if (!isDayComplete(stage, day)) return false;
    }
    return true;
  };

  // Check if a stage is unlocked
  const isStageUnlocked = (stage: number): boolean => {
    if (stage === 1) return true;
    return isStageComplete(stage - 1);
  };

  // Get completed task count for a day
  const getDayProgress = (stage: number, day: number): number => {
    let count = 0;
    for (let i = 0; i < 10; i++) {
      if (completedTasks.has(buildKey(stage, day, i))) count++;
    }
    return count;
  };

  // Navigate to specific day
  const goToDay = (stage: number, day: number) => {
    setCurrentStage(stage);
    setCurrentDay(day);
  };

  // Reset all progress
  const resetProgress = async () => {
    if (!user) return;

    try {
      await supabase.from("user_progress").delete().eq("user_id", user.id);

      setCompletedTasks(new Set());
      setCurrentStage(1);
      setCurrentDay(1);
    } catch (error) {
      console.error("Failed to reset progress:", error);
    }
  };

  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  return {
    completedTasks,
    loading,
    currentStage,
    currentDay,
    toggleTask,
    isDayComplete,
    isStageComplete,
    isStageUnlocked,
    getDayProgress,
    goToDay,
    resetProgress,
  };
}
