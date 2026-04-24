import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useProgress } from "../../src/hooks/useProgress";
import { getDayData } from "../../src/data/challenges";
import { getQuote } from "../../src/data/quotes";
import TaskCheckbox from "../../src/components/TaskCheckbox";
import ProgressBar from "../../src/components/ProgressBar";
import QuoteCard from "../../src/components/QuoteCard";
import { colors, font, fontSize, spacing } from "../../src/constants/tokens";

export default function HomeScreen() {
  const {
    completedTasks,
    loading,
    currentStage,
    currentDay,
    toggleTask,
    isDayComplete,
  } = useProgress();
  const router = useRouter();

  const dayData = getDayData(currentStage, currentDay);
  const quote = getQuote(currentStage, currentDay);

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

  const dayComplete = isDayComplete(currentStage, currentDay);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.stageLabel}>
              Stage {currentStage} · Day {currentDay}
            </Text>
            <Text style={styles.dayTitle}>{dayData.title}</Text>
          </View>
          <View style={styles.headerLinks}>
            <TouchableOpacity
              onPress={() => router.push("/(main)/stages")}
              activeOpacity={0.6}
            >
              <Text style={styles.viewAllLink}>All days</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/(main)/profile")}
              activeOpacity={0.6}
            >
              <Text style={styles.viewAllLink}>Profile</Text>
            </TouchableOpacity>
          </View>
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
        {dayComplete && (
          <View style={styles.completeMessage}>
            <Text style={styles.completeText}>Day complete ✓</Text>
            <Text style={styles.completeSubtext}>
              Well done. Carry this clarity forward.
            </Text>
            {currentDay < 7 && (
              <TouchableOpacity
                style={styles.nextButton}
                onPress={() => router.push("/(main)/stages")}
                activeOpacity={0.7}
              >
                <Text style={styles.nextButtonText}>View progress →</Text>
              </TouchableOpacity>
            )}
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
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerLinks: {
    gap: spacing.md,
    alignItems: "flex-end",
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
  viewAllLink: {
    fontFamily: font.family,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
    marginTop: spacing.xs,
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
  nextButton: {
    marginTop: spacing.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderWidth: 1,
    borderColor: colors.text,
  },
  nextButtonText: {
    fontFamily: font.familyMedium,
    fontSize: fontSize.body,
    color: colors.text,
  },
});
