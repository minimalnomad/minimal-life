import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useProgress } from "../../src/hooks/useProgress";
import { STAGES } from "../../src/data/challenges";
import { colors, font, fontSize, spacing } from "../../src/constants/tokens";

export default function StagesScreen() {
  const {
    currentStage,
    currentDay,
    isDayComplete,
    isStageComplete,
    isStageUnlocked,
    getDayProgress,
    goToDay,
  } = useProgress();
  const router = useRouter();

  const handleDayPress = (stage: number, day: number) => {
    if (!isStageUnlocked(stage)) return;
    goToDay(stage, day);
    router.push(`/(main)/day/${stage}-${day}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.6}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Your Journey</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {STAGES.map((stageData) => {
          const unlocked = isStageUnlocked(stageData.stage);
          const completed = isStageComplete(stageData.stage);

          return (
            <View key={stageData.stage} style={styles.stageSection}>
              {/* Stage Header */}
              <View style={styles.stageHeader}>
                <View>
                  <Text
                    style={[styles.stageTitle, !unlocked && styles.lockedText]}
                  >
                    {stageData.title}
                  </Text>
                  <Text style={styles.stageSubtitle}>
                    {completed
                      ? "Complete ✓"
                      : !unlocked
                        ? "Complete Stage " +
                          (stageData.stage - 1) +
                          " to unlock"
                        : stageData.subtitle}
                  </Text>
                </View>
                <Text
                  style={[styles.stageNumber, !unlocked && styles.lockedText]}
                >
                  {unlocked ? stageData.stage : "🔒"}
                </Text>
              </View>

              {/* Days Grid */}
              <View style={styles.daysGrid}>
                {stageData.days.map((dayData) => {
                  const dayComplete = isDayComplete(
                    stageData.stage,
                    dayData.day,
                  );
                  const progress = getDayProgress(stageData.stage, dayData.day);
                  const isCurrent =
                    stageData.stage === currentStage &&
                    dayData.day === currentDay;

                  return (
                    <TouchableOpacity
                      key={dayData.day}
                      style={[
                        styles.dayCard,
                        isCurrent && styles.dayCardCurrent,
                        dayComplete && styles.dayCardComplete,
                        !unlocked && styles.dayCardLocked,
                      ]}
                      onPress={() =>
                        handleDayPress(stageData.stage, dayData.day)
                      }
                      disabled={!unlocked}
                      activeOpacity={0.6}
                    >
                      <Text
                        style={[
                          styles.dayNumber,
                          dayComplete && styles.dayNumberComplete,
                          !unlocked && styles.lockedText,
                        ]}
                      >
                        {dayComplete ? "✓" : dayData.day}
                      </Text>
                      <Text
                        style={[
                          styles.dayLabel,
                          !unlocked && styles.lockedText,
                        ]}
                        numberOfLines={1}
                      >
                        {dayData.title}
                      </Text>
                      {unlocked && !dayComplete && progress > 0 && (
                        <Text style={styles.dayProgress}>{progress}/10</Text>
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          );
        })}

        {/* All complete message */}
        {isStageComplete(3) && (
          <View style={styles.allComplete}>
            <Text style={styles.allCompleteTitle}>
              You've embraced minimal life
            </Text>
            <Text style={styles.allCompleteSubtext}>
              21 days. 210 actions. A simpler you.
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
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  stageSection: {
    marginBottom: spacing.xl,
  },
  stageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: spacing.md,
  },
  stageTitle: {
    fontFamily: font.familySemiBold,
    fontSize: fontSize.subheading,
    color: colors.text,
  },
  stageSubtitle: {
    fontFamily: font.familyLight,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
    marginTop: 2,
  },
  stageNumber: {
    fontFamily: font.familySemiBold,
    fontSize: fontSize.heading,
    color: colors.text,
  },
  daysGrid: {
    gap: spacing.sm,
  },
  dayCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderBottomWidth: 1,
    borderColor: colors.borderLight,
  },
  dayCardCurrent: {
    backgroundColor: colors.borderLight,
  },
  dayCardComplete: {
    opacity: 0.6,
  },
  dayCardLocked: {
    opacity: 0.3,
  },
  dayNumber: {
    fontFamily: font.familySemiBold,
    fontSize: fontSize.subheading,
    color: colors.text,
    width: 32,
  },
  dayNumberComplete: {
    color: colors.text,
  },
  dayLabel: {
    flex: 1,
    fontFamily: font.family,
    fontSize: fontSize.body,
    color: colors.text,
    marginLeft: spacing.sm,
  },
  dayProgress: {
    fontFamily: font.familyLight,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
  },
  lockedText: {
    color: colors.locked,
  },
  allComplete: {
    alignItems: "center",
    paddingVertical: spacing.xxl,
    borderTopWidth: 1,
    borderColor: colors.borderLight,
  },
  allCompleteTitle: {
    fontFamily: font.familySemiBold,
    fontSize: fontSize.subheading,
    color: colors.text,
  },
  allCompleteSubtext: {
    fontFamily: font.familyLight,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
    marginTop: spacing.xs,
  },
});
