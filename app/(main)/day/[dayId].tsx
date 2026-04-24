import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { useProgress } from "../../../src/hooks/useProgress";
import { getDayData } from "../../../src/data/challenges";
import { getQuote } from "../../../src/data/quotes";
import TaskCheckbox from "../../../src/components/TaskCheckbox";
import ProgressBar from "../../../src/components/ProgressBar";
import QuoteCard from "../../../src/components/QuoteCard";
import { colors, font, fontSize, spacing } from "../../../src/constants/tokens";

export default function DayDetailScreen() {
  const { dayId } = useLocalSearchParams<{ dayId: string }>();
  const router = useRouter();
  const { completedTasks, loading, toggleTask, isDayComplete } = useProgress();

  // Parse dayId like "1-3" (stage 1, day 3)
  const parts = dayId?.split("-");
  const stage = parts ? parseInt(parts[0]) : 1;
  const day = parts ? parseInt(parts[1]) : 1;

  const dayData = getDayData(stage, day);
  const quote = getQuote(stage, day);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color={colors.text} />
        </View>
      </SafeAreaView>
    );
  }

  if (!dayData) return null;

  const completedCount = dayData.tasks.filter((t) =>
    completedTasks.has(t.id),
  ).length;

  const dayComplete = isDayComplete(stage, day);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.6}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Day Info */}
        <View style={styles.dayInfo}>
          <Text style={styles.stageLabel}>
            Stage {stage} · Day {day}
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

        {/* Day complete */}
        {dayComplete && (
          <View style={styles.completeMessage}>
            <Text style={styles.completeText}>Day complete ✓</Text>
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  backButton: {
    fontFamily: font.family,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.xxl,
  },
  dayInfo: {
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
});
