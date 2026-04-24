import { View, Text, StyleSheet } from "react-native";
import { colors, font, fontSize, spacing } from "../constants/tokens";

interface ProgressBarProps {
  completed: number;
  total: number;
}

export default function ProgressBar({ completed, total }: ProgressBarProps) {
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <View style={styles.container}>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${percentage}%` }]} />
      </View>
      <Text style={styles.label}>
        {completed}/{total}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  barBackground: {
    flex: 1,
    height: 3,
    backgroundColor: colors.borderLight,
  },
  barFill: {
    height: 3,
    backgroundColor: colors.text,
  },
  label: {
    fontFamily: font.familyLight,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
    minWidth: 35,
    textAlign: "right",
  },
});
