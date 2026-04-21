import { Stack } from "expo-router";
import { colors } from "../../src/constants/tokens";

export default function MainLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    />
  );
}
