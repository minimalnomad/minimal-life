import { useRef, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Animated,
} from "react-native";
import * as Haptics from "expo-haptics";
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
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(completed ? 0.5 : 1)).current;

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: completed ? 0.5 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [completed]);

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Bounce animation
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.9,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 80,
        useNativeDriver: true,
      }),
    ]).start();

    onToggle();
  };

  return (
    <Animated.View
      style={{ transform: [{ scale: scaleAnim }], opacity: opacityAnim }}
    >
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          onToggle();
        }}
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
    </Animated.View>
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
