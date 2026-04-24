import { useState, useCallback } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../src/hooks/useAuth";
import { getDayData } from "../../src/data/challenges";
import { getQuote } from "../../src/data/quotes";
import TaskCheckbox from "../../src/components/TaskCheckbox";
import ProgressBar from "../../src/components/ProgressBar";
import QuoteCard from "../../src/components/QuoteCard";
import { colors, font, fontSize, spacing } from "../../src/constants/tokens";

export default function HomeScreen() {
  // TODO: replace with real progress from Supabase (Day 3)
  const [currentStage] = useState(1);
  const [currentDay] = useState(1);
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());

  const dayData = getDayData(currentStage, currentDay);
  const quote = getQuote(currentStage, currentDay);

  const toggleTask = useCallback((taskId: string) => {
    setCompletedTasks((prev) => {
      const next = new Set(prev);
      if (next.has(taskId)) {
        next.delete(taskId);
      } else {
        next.add(taskId);
      }
      return next;
    });
  }, []);

  if (!dayData) return null;

  const completedCount = dayData.tasks.filter((t) =>
    completedTasks.has(t.id),
  ).length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.stageLabel}>
            Stage {currentStage} · Day {currentDay}
          </Text>
          <Text style={styles.dayTitle}>{dayData.title}</Text>
          <Text style={styles.dayDescription}>{dayData.description}</Text>
        </View>

        {/* Quote */}
        <QuoteCard quote={quote} />

        {/* Progress */}
        <View style={styles.progressSection}>
          <ProgressBar completed={completedCount} total={10} />
        </View>

        {/* Tasks */}
        <View style={styles.taskList}>
          {dayData.tasks.map((task) => (
            <TaskCheckbox
              key={task.id}
              text={task.text}
              completed={completedTasks.has(task.id)}
              onToggle={() => toggleTask(task.id)}
            />
          ))}
        </View>

        {/* Day complete message */}
        {completedCount === 10 && (
          <View style={styles.completeMessage}>
            <Text style={styles.completeText}>Day complete ✓</Text>
            <Text style={styles.completeSubtext}>
              Well done. Carry this clarity forward.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
  },
  header: {
    marginBottom: spacing.lg,
  },
  stageLabel: {
    fontFamily: font.familyLight,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: spacing.xs,
  },
  dayTitle: {
    fontFamily: font.familySemiBold,
    fontSize: fontSize.heading,
    color: colors.text,
    letterSpacing: -0.5,
  },
  dayDescription: {
    fontFamily: font.familyLight,
    fontSize: fontSize.body,
    color: colors.textSecondary,
    marginTop: spacing.sm,
    lineHeight: 22,
  },
  progressSection: {
    paddingVertical: spacing.lg,
  },
  taskList: {
    marginBottom: spacing.lg,
  },
  completeMessage: {
    alignItems: "center",
    paddingVertical: spacing.xl,
    borderTopWidth: 1,
    borderColor: colors.borderLight,
  },
  completeText: {
    fontFamily: font.familyMedium,
    fontSize: fontSize.subheading,
    color: colors.text,
  },
  completeSubtext: {
    fontFamily: font.familyLight,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
    marginTop: spacing.xs,
  },
});
