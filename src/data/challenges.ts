export interface Task {
  id: string;
  text: string;
}

export interface DayData {
  day: number;
  title: string;
  description: string;
  tasks: Task[];
}

export interface StageData {
  stage: number;
  title: string;
  subtitle: string;
  days: DayData[];
}

// =============================================
// STAGE 1: BEGINNER — "Clear the Surface"
// =============================================

const stage1: StageData = {
  stage: 1,
  title: "Clear the Surface",
  subtitle: "Beginner",
  days: [
    {
      day: 1,
      title: "Your Desk",
      description: "Start where you work. A clear desk, a clear mind.",
      tasks: [
        { id: "s1d1t0", text: "Remove everything from your desk" },
        { id: "s1d1t1", text: "Wipe down the entire surface" },
        { id: "s1d1t2", text: "Put back only items you use daily" },
        { id: "s1d1t3", text: "Find a home for displaced items" },
        { id: "s1d1t4", text: "Throw away or recycle 3 items" },
        { id: "s1d1t5", text: "Organize cables with one tie or clip" },
        { id: "s1d1t6", text: "Remove sticky notes — digitize if needed" },
        { id: "s1d1t7", text: "Clear your monitor of stickers or notes" },
        { id: "s1d1t8", text: "Set up one designated inbox tray" },
        { id: "s1d1t9", text: "Take a photo of your clean desk" },
      ],
    },
    {
      day: 2,
      title: "Your Phone",
      description: "Your phone should serve you, not distract you.",
      tasks: [
        { id: "s1d2t0", text: "Delete 5 apps you haven't opened this month" },
        { id: "s1d2t1", text: "Turn off all non-essential notifications" },
        { id: "s1d2t2", text: "Unsubscribe from 3 email newsletters" },
        { id: "s1d2t3", text: "Organize your home screen to one page" },
        { id: "s1d2t4", text: "Move social media off the home screen" },
        { id: "s1d2t5", text: "Clear your downloads folder" },
        { id: "s1d2t6", text: "Delete screenshots older than a week" },
        { id: "s1d2t7", text: "Set your wallpaper to a solid color" },
        { id: "s1d2t8", text: "Turn off badge notification counts" },
        { id: "s1d2t9", text: "Set a Do Not Disturb schedule" },
      ],
    },
    {
      day: 3,
      title: "Your Wardrobe",
      description: "Wear less, feel more. Keep only what fits your life now.",
      tasks: [
        { id: "s1d3t0", text: "Pull everything out of one drawer" },
        { id: "s1d3t1", text: "Separate into keep, donate, and discard" },
        { id: "s1d3t2", text: "Remove anything unworn in the past 6 months" },
        { id: "s1d3t3", text: "Fold and organize what you're keeping" },
        { id: "s1d3t4", text: "Bag up donation items immediately" },
        { id: "s1d3t5", text: "Check for damaged or stained clothing" },
        { id: "s1d3t6", text: "Limit hangers — one item per hanger" },
        { id: "s1d3t7", text: "Organize by type: tops, bottoms, outerwear" },
        { id: "s1d3t8", text: "Remove duplicate items — keep the best one" },
        { id: "s1d3t9", text: "Create a simple capsule wardrobe plan" },
      ],
    },
    {
      day: 4,
      title: "Your Kitchen",
      description: "A simple kitchen makes cooking a joy, not a chore.",
      tasks: [
        { id: "s1d4t0", text: "Clear all countertops completely" },
        { id: "s1d4t1", text: "Return only essential appliances to counters" },
        { id: "s1d4t2", text: "Check fridge — toss expired items" },
        { id: "s1d4t3", text: "Organize one cabinet or pantry shelf" },
        { id: "s1d4t4", text: "Remove duplicate utensils and gadgets" },
        { id: "s1d4t5", text: "Stack containers and match lids" },
        { id: "s1d4t6", text: "Clean the junk drawer — keep only essentials" },
        { id: "s1d4t7", text: "Wipe down one appliance you always skip" },
        { id: "s1d4t8", text: "Remove fridge magnets and papers" },
        { id: "s1d4t9", text: "Plan one simple meal with what you have" },
      ],
    },
    {
      day: 5,
      title: "Your Bathroom",
      description: "Simplify your routine. Less products, more presence.",
      tasks: [
        { id: "s1d5t0", text: "Remove everything from the shower" },
        { id: "s1d5t1", text: "Toss expired medications and products" },
        { id: "s1d5t2", text: "Keep only products you use weekly" },
        { id: "s1d5t3", text: "Organize under-sink storage" },
        { id: "s1d5t4", text: "Reduce to one towel per person" },
        { id: "s1d5t5", text: "Clear the counter — keep 3 items max" },
        { id: "s1d5t6", text: "Clean the mirror and surfaces" },
        { id: "s1d5t7", text: "Remove travel-size products you won't use" },
        { id: "s1d5t8", text: "Combine duplicate products into one" },
        { id: "s1d5t9", text: "Write a minimal morning routine (5 steps max)" },
      ],
    },
    {
      day: 6,
      title: "Your Digital Files",
      description:
        "Digital clutter weighs on your mind just like physical clutter.",
      tasks: [
        { id: "s1d6t0", text: "Clear your desktop — move files to folders" },
        { id: "s1d6t1", text: "Empty your downloads folder" },
        { id: "s1d6t2", text: "Unsubscribe from 5 more email lists" },
        { id: "s1d6t3", text: "Archive or delete old emails (100+)" },
        {
          id: "s1d6t4",
          text: "Organize photos — delete duplicates and blurry shots",
        },
        { id: "s1d6t5", text: "Close all unused browser tabs" },
        { id: "s1d6t6", text: "Remove unused browser bookmarks" },
        { id: "s1d6t7", text: "Delete old documents you no longer need" },
        { id: "s1d6t8", text: "Organize remaining files into 3-5 folders" },
        { id: "s1d6t9", text: "Set your browser homepage to a blank page" },
      ],
    },
    {
      day: 7,
      title: "Your Living Space",
      description:
        "End the week by creating a sanctuary. Your space, simplified.",
      tasks: [
        { id: "s1d7t0", text: "Pick one room and remove 10 items" },
        { id: "s1d7t1", text: "Clear all flat surfaces (tables, shelves)" },
        { id: "s1d7t2", text: "Remove decorations that don't bring joy" },
        { id: "s1d7t3", text: "Organize one bookshelf — donate unread books" },
        {
          id: "s1d7t4",
          text: "Clear the entryway — hooks, tray, nothing else",
        },
        { id: "s1d7t5", text: "Vacuum or sweep with intention" },
        { id: "s1d7t6", text: "Light a candle or open a window" },
        { id: "s1d7t7", text: "Sit in the room and notice how it feels" },
        { id: "s1d7t8", text: "Write down 3 things you're grateful for" },
        { id: "s1d7t9", text: "Take a before/after photo of your progress" },
      ],
    },
  ],
};

// =============================================
// STAGE 2: INTERMEDIATE — "Simplify Systems"
// =============================================

const stage2: StageData = {
  stage: 2,
  title: "Simplify Systems",
  subtitle: "Intermediate",
  days: [
    {
      day: 1,
      title: "Your Morning Routine",
      description: "Design a morning that sets the tone for your entire day.",
      tasks: [
        { id: "s2d1t0", text: "Wake up 15 minutes earlier than usual" },
        {
          id: "s2d1t1",
          text: "Don't check your phone for the first 30 minutes",
        },
        { id: "s2d1t2", text: "Drink a glass of water before anything else" },
        { id: "s2d1t3", text: "Write down your top 3 priorities for the day" },
        { id: "s2d1t4", text: "Do 5 minutes of stretching or movement" },
        { id: "s2d1t5", text: "Eat a simple breakfast with no screens" },
        {
          id: "s2d1t6",
          text: "Prepare your bag or workspace the night before",
        },
        { id: "s2d1t7", text: "Choose your outfit in under 2 minutes" },
        {
          id: "s2d1t8",
          text: "Write your morning routine on paper and post it",
        },
        { id: "s2d1t9", text: "Follow your new routine tomorrow morning" },
      ],
    },
    {
      day: 2,
      title: "Your Finances",
      description: "Simplify your money. Know what comes in, what goes out.",
      tasks: [
        { id: "s2d2t0", text: "List all active subscriptions" },
        { id: "s2d2t1", text: "Cancel 2 subscriptions you don't fully use" },
        { id: "s2d2t2", text: "Set up automatic bill payments" },
        {
          id: "s2d2t3",
          text: "Consolidate bank accounts if you have too many",
        },
        { id: "s2d2t4", text: "Create a simple budget: needs, wants, savings" },
        {
          id: "s2d2t5",
          text: "Delete saved payment methods from 3 online stores",
        },
        { id: "s2d2t6", text: "Unsubscribe from shopping promotion emails" },
        {
          id: "s2d2t7",
          text: "Set a 24-hour rule for non-essential purchases",
        },
        { id: "s2d2t8", text: "Review last month's spending for 10 minutes" },
        { id: "s2d2t9", text: "Write down one financial goal for this month" },
      ],
    },
    {
      day: 3,
      title: "Your Time",
      description: "Your time is your life. Protect it ruthlessly.",
      tasks: [
        { id: "s2d3t0", text: "List everything on your calendar this week" },
        {
          id: "s2d3t1",
          text: "Cancel or decline one commitment that drains you",
        },
        { id: "s2d3t2", text: "Block 1 hour of unscheduled free time today" },
        {
          id: "s2d3t3",
          text: "Batch similar tasks together (errands, emails)",
        },
        { id: "s2d3t4", text: "Set time limits for social media (30 min/day)" },
        {
          id: "s2d3t5",
          text: "Say no to one request today — politely but firmly",
        },
        {
          id: "s2d3t6",
          text: "Identify your peak focus hours and protect them",
        },
        { id: "s2d3t7", text: "Eliminate one daily habit that wastes time" },
        { id: "s2d3t8", text: "Plan tomorrow's schedule tonight in 5 minutes" },
        { id: "s2d3t9", text: "Spend 15 minutes doing absolutely nothing" },
      ],
    },
    {
      day: 4,
      title: "Your Commitments",
      description: "Every yes to something is a no to something else.",
      tasks: [
        {
          id: "s2d4t0",
          text: "List all your ongoing commitments and obligations",
        },
        { id: "s2d4t1", text: "Identify which ones align with your values" },
        {
          id: "s2d4t2",
          text: "Let go of one obligation that no longer serves you",
        },
        {
          id: "s2d4t3",
          text: "Delegate one task you don't need to do yourself",
        },
        {
          id: "s2d4t4",
          text: "Simplify one recurring task (automate or batch)",
        },
        { id: "s2d4t5", text: "Set boundaries for one relationship or group" },
        {
          id: "s2d4t6",
          text: "Reduce meeting time — suggest shorter meetings",
        },
        {
          id: "s2d4t7",
          text: "Write a not-to-do list (things you'll stop doing)",
        },
        {
          id: "s2d4t8",
          text: "Practice saying 'let me think about it' instead of instant yes",
        },
        { id: "s2d4t9", text: "End the day by reviewing what truly mattered" },
      ],
    },
    {
      day: 5,
      title: "Your Evening Routine",
      description: "End each day with intention. Rest is productive.",
      tasks: [
        { id: "s2d5t0", text: "Set a consistent bedtime and honor it tonight" },
        { id: "s2d5t1", text: "Stop all screens 30 minutes before bed" },
        { id: "s2d5t2", text: "Do a 5-minute tidy up of your space" },
        {
          id: "s2d5t3",
          text: "Prepare tomorrow's essentials (clothes, bag, lunch)",
        },
        { id: "s2d5t4", text: "Write down 3 things that went well today" },
        { id: "s2d5t5", text: "Read 10 pages of a book (not on a screen)" },
        { id: "s2d5t6", text: "Do 5 minutes of deep breathing or meditation" },
        { id: "s2d5t7", text: "Put your phone in another room to charge" },
        { id: "s2d5t8", text: "Dim all lights one hour before sleep" },
        {
          id: "s2d5t9",
          text: "Reflect: what's one thing I can simplify tomorrow?",
        },
      ],
    },
    {
      day: 6,
      title: "Your Information Diet",
      description: "Consume less, think more. Curate what enters your mind.",
      tasks: [
        {
          id: "s2d6t0",
          text: "Unfollow 10 social media accounts that don't inspire you",
        },
        { id: "s2d6t1", text: "Mute or leave 2 group chats that add noise" },
        { id: "s2d6t2", text: "Replace 30 minutes of scrolling with reading" },
        { id: "s2d6t3", text: "Turn off all news notifications" },
        {
          id: "s2d6t4",
          text: "Choose one podcast or book to focus on this week",
        },
        { id: "s2d6t5", text: "Delete one social media app for 24 hours" },
        { id: "s2d6t6", text: "Set your phone to grayscale mode" },
        {
          id: "s2d6t7",
          text: "Check email only twice today — morning and afternoon",
        },
        { id: "s2d6t8", text: "Write down 3 things you learned recently" },
        {
          id: "s2d6t9",
          text: "Notice how you feel with less information input",
        },
      ],
    },
    {
      day: 7,
      title: "Your Weekly Review",
      description:
        "Pause, reflect, recalibrate. Systems need regular maintenance.",
      tasks: [
        { id: "s2d7t0", text: "Review your morning routine — what worked?" },
        { id: "s2d7t1", text: "Check your budget — any unnecessary spending?" },
        { id: "s2d7t2", text: "Review your calendar — prune next week" },
        { id: "s2d7t3", text: "Clean your workspace for 10 minutes" },
        { id: "s2d7t4", text: "Process your inbox to zero (or close to it)" },
        { id: "s2d7t5", text: "Refill essentials — no last-minute shopping" },
        { id: "s2d7t6", text: "Plan 3 simple meals for next week" },
        { id: "s2d7t7", text: "Schedule one thing you look forward to" },
        { id: "s2d7t8", text: "Write a short journal entry about this week" },
        { id: "s2d7t9", text: "Set one intention for next week" },
      ],
    },
  ],
};

// =============================================
// STAGE 3: ADVANCED — "Mindful Living"
// =============================================

const stage3: StageData = {
  stage: 3,
  title: "Mindful Living",
  subtitle: "Advanced",
  days: [
    {
      day: 1,
      title: "Mindful Consumption",
      description: "Before you bring anything in, ask: does this add value?",
      tasks: [
        { id: "s3d1t0", text: "Go the entire day without buying anything" },
        {
          id: "s3d1t1",
          text: "Before each meal, pause and appreciate the food",
        },
        { id: "s3d1t2", text: "Drink only water and tea today" },
        {
          id: "s3d1t3",
          text: "Notice every advertisement you encounter — count them",
        },
        {
          id: "s3d1t4",
          text: "Use something you already own instead of buying new",
        },
        {
          id: "s3d1t5",
          text: "Cook one meal from scratch with simple ingredients",
        },
        { id: "s3d1t6", text: "Borrow or share instead of purchasing" },
        {
          id: "s3d1t7",
          text: "Write down 5 things you have that money can't buy",
        },
        { id: "s3d1t8", text: "Remove 3 items from your online shopping cart" },
        {
          id: "s3d1t9",
          text: "End the day by journaling what enough means to you",
        },
      ],
    },
    {
      day: 2,
      title: "Mindful Relationships",
      description: "Quality over quantity. Invest in people who matter.",
      tasks: [
        {
          id: "s3d2t0",
          text: "Send a thoughtful message to someone you care about",
        },
        {
          id: "s3d2t1",
          text: "Have one conversation today without any screens nearby",
        },
        {
          id: "s3d2t2",
          text: "Listen more than you speak in every conversation",
        },
        {
          id: "s3d2t3",
          text: "Identify one relationship you've been neglecting",
        },
        {
          id: "s3d2t4",
          text: "Set a boundary with one person who drains your energy",
        },
        {
          id: "s3d2t5",
          text: "Express gratitude to someone — be specific about why",
        },
        {
          id: "s3d2t6",
          text: "Unfollow or mute people who trigger comparison",
        },
        {
          id: "s3d2t7",
          text: "Plan a simple, device-free hangout with a friend",
        },
        {
          id: "s3d2t8",
          text: "Write down 3 qualities you value most in people",
        },
        {
          id: "s3d2t9",
          text: "Forgive someone — even silently, even if it's yourself",
        },
      ],
    },
    {
      day: 3,
      title: "Mindful Work",
      description: "Do less, but better. Focus is the ultimate minimalism.",
      tasks: [
        {
          id: "s3d3t0",
          text: "Identify your one most important task for today",
        },
        {
          id: "s3d3t1",
          text: "Work on that task first, before checking email",
        },
        {
          id: "s3d3t2",
          text: "Close all unnecessary tabs and apps while working",
        },
        {
          id: "s3d3t3",
          text: "Take a real break — walk, stretch, look outside",
        },
        { id: "s3d3t4", text: "Decline or shorten one meeting today" },
        { id: "s3d3t5", text: "Turn off all work notifications for 2 hours" },
        { id: "s3d3t6", text: "Simplify one work process or template" },
        {
          id: "s3d3t7",
          text: "End work at a set time — no 'just one more thing'",
        },
        {
          id: "s3d3t8",
          text: "Write down what you accomplished, not what's left",
        },
        { id: "s3d3t9", text: "Ask yourself: am I busy, or am I productive?" },
      ],
    },
    {
      day: 4,
      title: "Mindful Movement",
      description:
        "Your body is your home. Move with intention, rest with purpose.",
      tasks: [
        { id: "s3d4t0", text: "Take a 20-minute walk with no headphones" },
        { id: "s3d4t1", text: "Stretch for 10 minutes when you wake up" },
        { id: "s3d4t2", text: "Eat one meal slowly — chew each bite 20 times" },
        { id: "s3d4t3", text: "Stand and move every hour if you sit for work" },
        {
          id: "s3d4t4",
          text: "Do a body scan — notice where you hold tension",
        },
        {
          id: "s3d4t5",
          text: "Skip one caffeinated drink and notice the difference",
        },
        {
          id: "s3d4t6",
          text: "Clean one area of your home as a moving meditation",
        },
        {
          id: "s3d4t7",
          text: "Go outside and feel the sun or wind for 5 minutes",
        },
        { id: "s3d4t8", text: "Do 10 deep breaths before your next task" },
        { id: "s3d4t9", text: "Go to bed 30 minutes earlier tonight" },
      ],
    },
    {
      day: 5,
      title: "Mindful Creativity",
      description: "Create more, consume less. Express what's inside you.",
      tasks: [
        {
          id: "s3d5t0",
          text: "Spend 30 minutes creating something — anything",
        },
        { id: "s3d5t1", text: "Write freely for 10 minutes without editing" },
        { id: "s3d5t2", text: "Take 5 photos of beauty in your everyday life" },
        { id: "s3d5t3", text: "Draw or sketch something simple — no pressure" },
        { id: "s3d5t4", text: "Cook a meal without following a recipe" },
        {
          id: "s3d5t5",
          text: "Rearrange one area of your home for fresh energy",
        },
        {
          id: "s3d5t6",
          text: "Listen to one full album without doing anything else",
        },
        { id: "s3d5t7", text: "Write a letter to your future self" },
        { id: "s3d5t8", text: "Spend time in silence — at least 15 minutes" },
        { id: "s3d5t9", text: "Share something you created with someone" },
      ],
    },
    {
      day: 6,
      title: "Mindful Gratitude",
      description:
        "Wanting less starts with appreciating what you already have.",
      tasks: [
        {
          id: "s3d6t0",
          text: "Write down 10 things you're grateful for right now",
        },
        {
          id: "s3d6t1",
          text: "Tell someone in person why you appreciate them",
        },
        {
          id: "s3d6t2",
          text: "Use an object today and notice its value to your life",
        },
        { id: "s3d6t3", text: "Take a moment before eating to feel thankful" },
        {
          id: "s3d6t4",
          text: "Write a thank-you note — handwritten, not digital",
        },
        {
          id: "s3d6t5",
          text: "Photograph 3 simple things that make your life better",
        },
        {
          id: "s3d6t6",
          text: "Reflect on a challenge that taught you something",
        },
        {
          id: "s3d6t7",
          text: "Give something away to someone who needs it more",
        },
        {
          id: "s3d6t8",
          text: "Spend 5 minutes savoring a cup of tea or coffee",
        },
        { id: "s3d6t9", text: "End the day naming the best moment" },
      ],
    },
    {
      day: 7,
      title: "Your Minimal Manifesto",
      description:
        "You've arrived. Now define what minimal living means to you.",
      tasks: [
        { id: "s3d7t0", text: "Review your journey — look at Day 1 photos" },
        { id: "s3d7t1", text: "Write down what minimalism means to you now" },
        {
          id: "s3d7t2",
          text: "List 5 things you've let go of that you don't miss",
        },
        {
          id: "s3d7t3",
          text: "List 5 things you've gained through this process",
        },
        {
          id: "s3d7t4",
          text: "Choose 3 habits from this journey to keep forever",
        },
        {
          id: "s3d7t5",
          text: "Write your personal minimal manifesto (5 sentences)",
        },
        { id: "s3d7t6", text: "Set one intention for the next month" },
        {
          id: "s3d7t7",
          text: "Share your journey with someone — inspire them",
        },
        { id: "s3d7t8", text: "Do one final declutter — your choice of area" },
        {
          id: "s3d7t9",
          text: "Sit quietly for 10 minutes and appreciate how far you've come",
        },
      ],
    },
  ],
};

export const STAGES: StageData[] = [stage1, stage2, stage3];

// Helper to get a specific day's data
export function getDayData(stage: number, day: number): DayData | undefined {
  const stageData = STAGES.find((s) => s.stage === stage);
  return stageData?.days.find((d) => d.day === day);
}

// Helper to get stage data
export function getStageData(stage: number): StageData | undefined {
  return STAGES.find((s) => s.stage === stage);
}
