import { View, Text, StyleSheet } from "react-native";
import { colors, font, fontSize, spacing } from "../constants/tokens";
import type { Quote } from "../data/quotes";

interface QuoteCardProps {
  quote: Quote;
}

export default function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>"{quote.text}"</Text>
      <Text style={styles.author}>— {quote.author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.lg,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.borderLight,
  },
  text: {
    fontFamily: font.familyLight,
    fontSize: fontSize.quote,
    color: colors.text,
    lineHeight: 30,
    fontStyle: "italic",
  },
  author: {
    fontFamily: font.family,
    fontSize: fontSize.caption,
    color: colors.textTertiary,
    marginTop: spacing.md,
  },
});
