import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { colors, font, fontSize, spacing } from "../constants/tokens";

interface TaskCheckboxProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
}

export default function TaskCheckbox({
  text,
  completed,
  onToggle,
}: TaskCheckboxProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onToggle}
      activeOpacity={0.6}
    >
      {/* Checkbox */}
      <View style={[styles.checkbox, completed && styles.checkboxChecked]}>
        {completed && <Text style={styles.checkmark}>✓</Text>}
      </View>

      {/* Text */}
      <Text style={[styles.text, completed && styles.textCompleted]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
    gap: spacing.md,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1.5,
    borderColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
  },
  checkboxChecked: {
    borderColor: colors.text,
    backgroundColor: colors.text,
  },
  checkmark: {
    color: colors.background,
    fontSize: 13,
    fontWeight: "600",
  },
  text: {
    flex: 1,
    fontFamily: font.family,
    fontSize: fontSize.body,
    color: colors.text,
    lineHeight: 22,
  },
  textCompleted: {
    color: colors.textTertiary,
    textDecorationLine: "line-through",
  },
});
