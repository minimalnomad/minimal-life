export interface Quote {
  text: string;
  author: string;
}

// 21 quotes — one per day across 3 stages
export const QUOTES: Record<string, Quote> = {
  // Stage 1: Clear the Surface
  "1-1": {
    text: "The first step in crafting the life you want is to get rid of everything you don't.",
    author: "Joshua Becker",
  },
  "1-2": {
    text: "Our life is frittered away by detail. Simplify, simplify.",
    author: "Henry David Thoreau",
  },
  "1-3": {
    text: "Have nothing in your houses that you do not know to be useful or believe to be beautiful.",
    author: "William Morris",
  },
  "1-4": {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  "1-5": {
    text: "The ability to simplify means to eliminate the unnecessary so that the necessary may speak.",
    author: "Hans Hofmann",
  },
  "1-6": {
    text: "Besides the noble art of getting things done, there is the noble art of leaving things undone.",
    author: "Lin Yutang",
  },
  "1-7": {
    text: "It is not the daily increase but daily decrease. Hack away at the unessential.",
    author: "Bruce Lee",
  },

  // Stage 2: Simplify Systems
  "2-1": {
    text: "The secret of happiness is not in doing what one likes, but in liking what one does.",
    author: "James M. Barrie",
  },
  "2-2": {
    text: "Beware the barrenness of a busy life.",
    author: "Socrates",
  },
  "2-3": {
    text: "Time is what we want most, but what we use worst.",
    author: "William Penn",
  },
  "2-4": {
    text: "The greatest wealth is to live content with little.",
    author: "Plato",
  },
  "2-5": {
    text: "Almost everything will work again if you unplug it for a few minutes. Including you.",
    author: "Anne Lamott",
  },
  "2-6": {
    text: "Information is not knowledge. The only source of knowledge is experience.",
    author: "Albert Einstein",
  },
  "2-7": {
    text: "An unexamined life is not worth living.",
    author: "Socrates",
  },

  // Stage 3: Mindful Living
  "3-1": {
    text: "He who buys what he does not need steals from himself.",
    author: "Swedish Proverb",
  },
  "3-2": {
    text: "The most important things in life aren't things.",
    author: "Anthony J. D'Angelo",
  },
  "3-3": {
    text: "Focus is a matter of deciding what things you're not going to do.",
    author: "John Carmack",
  },
  "3-4": {
    text: "In the midst of movement and chaos, keep stillness inside of you.",
    author: "Deepak Chopra",
  },
  "3-5": {
    text: "Creativity is more than just being different. Making the simple awesomely simple — that's creativity.",
    author: "Charles Mingus",
  },
  "3-6": {
    text: "Gratitude turns what we have into enough.",
    author: "Melody Beattie",
  },
  "3-7": {
    text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry",
  },
};

export function getQuote(stage: number, day: number): Quote {
  const key = `${stage}-${day}`;
  return QUOTES[key] || { text: "Simplify.", author: "Unknown" };
}
