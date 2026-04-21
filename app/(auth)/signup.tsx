import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { Link } from "expo-router";
import { useAuth } from "../../src/hooks/useAuth";
import { colors, font, fontSize, spacing } from "../../src/constants/tokens";

export default function SignupScreen() {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      await signUp(email.trim(), password);
      Alert.alert("Welcome", "Account created successfully.");
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to sign up.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Create</Text>
          <Text style={styles.titleLight}>Account</Text>
          <Text style={styles.subtitle}>Start your minimal journey</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={colors.textTertiary}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password (min 6 characters)"
            placeholderTextColor={colors.textTertiary}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleSignup}
            disabled={loading}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>
              {loading ? "Creating..." : "Sign up"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <Link href="/(auth)/login" asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Sign in</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: spacing.xl,
  },
  header: {
    alignItems: "center",
    marginBottom: spacing.xxl,
  },
  title: {
    fontFamily: font.familySemiBold,
    fontSize: 36,
    color: colors.text,
    letterSpacing: -1,
  },
  titleLight: {
    fontFamily: font.familyLight,
    fontSize: 36,
    color: colors.text,
    marginTop: -8,
    letterSpacing: 4,
  },
  subtitle: {
    fontFamily: font.familyLight,
    fontSize: fontSize.body,
    color: colors.textTertiary,
    marginTop: spacing.sm,
  },
  form: {
    gap: spacing.md,
  },
  input: {
    fontFamily: font.family,
    fontSize: fontSize.body,
    color: colors.text,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical: spacing.md,
  },
  button: {
    backgroundColor: colors.text,
    paddingVertical: spacing.md,
    alignItems: "center",
    marginTop: spacing.md,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontFamily: font.familyMedium,
    fontSize: fontSize.body,
    color: colors.background,
    letterSpacing: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing.xxl,
  },
  footerText: {
    fontFamily: font.family,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
  },
  footerLink: {
    fontFamily: font.familyMedium,
    fontSize: fontSize.caption,
    color: colors.text,
    textDecorationLine: "underline",
  },
});
