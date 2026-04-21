import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../src/hooks/useAuth";
import { colors, font, fontSize, spacing } from "../../src/constants/tokens";

export default function HomeScreen() {
  const { user, signOut } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Minimal Life</Text>
          <Text style={styles.subtitle}>Stage 1 · Day 1</Text>
        </View>

        {/* Quote placeholder */}
        <View style={styles.quoteContainer}>
          <Text style={styles.quote}>
            "The first step in crafting the life you want is to get rid of
            everything you don't."
          </Text>
          <Text style={styles.quoteAuthor}>— Joshua Becker</Text>
        </View>

        {/* Placeholder */}
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Tasks coming in Day 2</Text>
        </View>

        {/* Sign out */}
        <TouchableOpacity style={styles.signOut} onPress={signOut}>
          <Text style={styles.signOutText}>Sign out</Text>
        </TouchableOpacity>

        <Text style={styles.email}>{user?.email}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
  },
  header: {
    marginBottom: spacing.xl,
  },
  title: {
    fontFamily: font.familySemiBold,
    fontSize: fontSize.heading,
    color: colors.text,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontFamily: font.familyLight,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
    marginTop: spacing.xs,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  quoteContainer: {
    paddingVertical: spacing.lg,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.borderLight,
    marginBottom: spacing.xl,
  },
  quote: {
    fontFamily: font.familyLight,
    fontSize: fontSize.quote,
    color: colors.text,
    lineHeight: 30,
    fontStyle: "italic",
  },
  quoteAuthor: {
    fontFamily: font.family,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
    marginTop: spacing.md,
  },
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontFamily: font.family,
    fontSize: fontSize.body,
    color: colors.textTertiary,
  },
  signOut: {
    paddingVertical: spacing.md,
    alignItems: "center",
  },
  signOutText: {
    fontFamily: font.family,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
    textDecorationLine: "underline",
  },
  email: {
    fontFamily: font.family,
    fontSize: fontSize.small,
    color: colors.locked,
    textAlign: "center",
    marginBottom: spacing.md,
  },
});
