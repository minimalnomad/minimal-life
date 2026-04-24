import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useAuth } from "../../src/hooks/useAuth";
import { useProgress } from "../../src/hooks/useProgress";
import { STAGES } from "../../src/data/challenges";
import { colors, font, fontSize, spacing } from "../../src/constants/tokens";

export default function ProfileScreen() {
  const { user, signOut } = useAuth();
  const {
    currentStage,
    currentDay,
    isStageComplete,
    getDayProgress,
    resetProgress,
  } = useProgress();
  const router = useRouter();
  const [resetting, setResetting] = useState(false);

  // Calculate total completed tasks
  let totalCompleted = 0;
  let totalDaysCompleted = 0;
  for (let s = 1; s <= 3; s++) {
    for (let d = 1; d <= 7; d++) {
      const progress = getDayProgress(s, d);
      totalCompleted += progress;
      if (progress === 10) totalDaysCompleted++;
    }
  }

  const totalTasks = 210;
  const overallPercent = Math.round((totalCompleted / totalTasks) * 100);

  // Current stage info
  const currentStageData = STAGES.find((s) => s.stage === currentStage);

  const handleReset = () => {
    Alert.alert(
      "Reset Progress",
      "This will erase all your progress. This cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Reset",
          style: "destructive",
          onPress: async () => {
            setResetting(true);
            await resetProgress();
            setResetting(false);
            Alert.alert("Done", "Your progress has been reset.");
          },
        },
      ],
    );
  };

  const handleSignOut = () => {
    Alert.alert("Sign Out", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Sign out",
        onPress: async () => {
          await signOut();
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.6}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.content}>
        {/* Email */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Account</Text>
          <Text style={styles.email}>{user?.email}</Text>
        </View>

        {/* Stats */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Progress</Text>

          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{overallPercent}%</Text>
              <Text style={styles.statLabel}>Overall</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{totalDaysCompleted}</Text>
              <Text style={styles.statLabel}>Days done</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{totalCompleted}</Text>
              <Text style={styles.statLabel}>Tasks done</Text>
            </View>
          </View>

          {/* Progress bar */}
          <View style={styles.overallBar}>
            <View
              style={[styles.overallBarFill, { width: `${overallPercent}%` }]}
            />
          </View>
        </View>

        {/* Current position */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Currently on</Text>
          <Text style={styles.currentPosition}>
            Stage {currentStage} — {currentStageData?.title}
          </Text>
          <Text style={styles.currentDay}>Day {currentDay}</Text>
        </View>

        {/* Stages completion */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Stages</Text>
          {STAGES.map((stage) => (
            <View key={stage.stage} style={styles.stageRow}>
              <Text style={styles.stageName}>
                {stage.stage}. {stage.title}
              </Text>
              <Text style={styles.stageStatus}>
                {isStageComplete(stage.stage) ? "Complete ✓" : "In progress"}
              </Text>
            </View>
          ))}
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.resetButton}
            onPress={handleReset}
            disabled={resetting}
            activeOpacity={0.6}
          >
            <Text style={styles.resetButtonText}>
              {resetting ? "Resetting..." : "Reset all progress"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signOutButton}
            onPress={handleSignOut}
            activeOpacity={0.6}
          >
            <Text style={styles.signOutButtonText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
    borderBottomWidth: 1,
    borderColor: colors.borderLight,
  },
  backButton: {
    fontFamily: font.family,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
    marginBottom: spacing.sm,
  },
  title: {
    fontFamily: font.familySemiBold,
    fontSize: fontSize.heading,
    color: colors.text,
    letterSpacing: -0.5,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
  },
  section: {
    marginBottom: spacing.xl,
    paddingBottom: spacing.lg,
    borderBottomWidth: 1,
    borderColor: colors.borderLight,
  },
  sectionLabel: {
    fontFamily: font.familyLight,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: spacing.md,
  },
  email: {
    fontFamily: font.family,
    fontSize: fontSize.body,
    color: colors.text,
  },
  statsGrid: {
    flexDirection: "row",
    gap: spacing.lg,
    marginBottom: spacing.md,
  },
  statItem: {
    flex: 1,
  },
  statValue: {
    fontFamily: font.familySemiBold,
    fontSize: fontSize.heading,
    color: colors.text,
  },
  statLabel: {
    fontFamily: font.familyLight,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
    marginTop: 2,
  },
  overallBar: {
    height: 3,
    backgroundColor: colors.borderLight,
  },
  overallBarFill: {
    height: 3,
    backgroundColor: colors.text,
  },
  currentPosition: {
    fontFamily: font.familyMedium,
    fontSize: fontSize.body,
    color: colors.text,
  },
  currentDay: {
    fontFamily: font.familyLight,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
    marginTop: 2,
  },
  stageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.sm,
  },
  stageName: {
    fontFamily: font.family,
    fontSize: fontSize.body,
    color: colors.text,
  },
  stageStatus: {
    fontFamily: font.familyLight,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
  },
  actions: {
    marginTop: spacing.lg,
    gap: spacing.md,
  },
  resetButton: {
    paddingVertical: spacing.md,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.danger,
  },
  resetButtonText: {
    fontFamily: font.family,
    fontSize: fontSize.body,
    color: colors.danger,
  },
  signOutButton: {
    paddingVertical: spacing.md,
    alignItems: "center",
  },
  signOutButtonText: {
    fontFamily: font.family,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
    textDecorationLine: "underline",
  },
});
