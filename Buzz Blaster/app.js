// BuzzBlaster Vibe Machine
// Phase 4.2: Lingering Fireworks & Enhanced Air-Time

const STORAGE_KEYS = {
  THEME: "bbvm_theme",
  DONE_COUNT: "bbvm_doneCount",
  ORDER: "bbvm_order",
  INDEX: "bbvm_index",
  HIDE_INTRO: "bbvm_hideIntro"
};

const ACTIONS = [
  { id: 1, text: "Ask the next customer what brought them in today." },
  { id: 2, text: "Give someone a tiny upgrade — no announcement." },
  { id: 3, text: "Ask a customer what they almost bought." },
  { id: 4, text: "Compliment a customer on something specific." },
  { id: 5, text: "Ask someone what they wish existed here." },
  { id: 6, text: "Hand one person a 'golden ticket' discount with no explanation." },
  { id: 7, text: "Ask a customer to describe your business in three words." },
  { id: 8, text: "Tell one person a random fun fact about something you sell." },
  { id: 9, text: "Ask a customer how they originally discovered you." },
  { id: 10, text: "Give a small thank-you note to a regular — handwritten if possible." },
  { id: 11, text: "Ask a happy customer if they’d leave a 20-second review." },
  { id: 12, text: "Reply to one old review with warmth." },
  { id: 13, text: "Screenshot a kind message — save it for later posting." },
  { id: 14, text: "Ask a customer if you can share their compliment anonymously." },
  { id: 15, text: "Thank someone publicly for mentioning you online." },
  { id: 16, text: "Ask a customer to describe their last good experience here." },
  { id: 17, text: "Check your DMs and respond to one person you haven’t answered yet." },
  { id: 18, text: "Find a comment from months ago and reply today." },
  { id: 19, text: "Share a micro-testimonial — one sentence only." },
  { id: 20, text: "Ask a regular how your business improves their day." },
  { id: 21, text: "Take a picture of today’s chaos — don’t clean it first." },
  { id: 22, text: "Snap a photo of a corner no one ever sees." },
  { id: 23, text: "Show a tool or item you use every day." },
  { id: 24, text: "Share something that broke but you fixed." },
  { id: 25, text: "Take a macro close-up of a product texture or detail." },
  { id: 26, text: "Share something from Day 1 that you still have." },
  { id: 27, text: "Take a 'from my hands' photo while you work." },
  { id: 28, text: "Share a behind-the-scenes moment from the last hour." },
  { id: 29, text: "Show something you almost threw away but kept." },
  { id: 30, text: "Snap a before-and-after of a one-minute cleanup." },
  { id: 31, text: "Show a color palette from your space or products." },
  { id: 32, text: "Share a weird-angle photo of your counter or workspace." },
  { id: 33, text: "Photograph an object that represents today’s mood." },
  { id: 34, text: "Take a shot of your shoe-level view — a fun POV twist." },
  { id: 35, text: "Show today’s workspace exactly as it is." },
  { id: 36, text: "Answer one question in a local group — helpfully, not promo-y." },
  { id: 37, text: "Recommend another local business you admire." },
  { id: 38, text: "Wave at five people outside — just human vibes." },
  { id: 39, text: "Post a 'today in our town' moment." },
  { id: 40, text: "Shout out something cool happening locally this week." },
  { id: 41, text: "Snap a picture of something interesting within 100 feet of your door." },
  { id: 42, text: "Reply kindly in a neighborhood thread." },
  { id: 43, text: "Share a tiny 'local tip' only area residents know." },
  { id: 44, text: "Send a quick thank-you DM to a nearby business." },
  { id: 45, text: "Say good morning to the shop next door." },
  { id: 46, text: "Post a 'local pride' moment." },
  { id: 47, text: "Share something nostalgic from your town." },
  { id: 48, text: "Ask your followers to name a favorite local spot." },
  { id: 49, text: "Encourage people to support another business today." },
  { id: 50, text: "Share a fun fact about your street, block, or neighborhood." },
  { id: 51, text: "Create a 15-minute flash deal — keep it tiny." },
  { id: 52, text: "Highlight something under $10." },
  { id: 53, text: "Offer a 'password only' discount." },
  { id: 54, text: "Announce a tiny mystery item." },
  { id: 55, text: "Post: 'First three people who say HI get ___.'" },
  { id: 56, text: "Promote one forgotten product." },
  { id: 57, text: "Reveal a 'today only' mini-perk." },
  { id: 58, text: "Run a one-question poll about a product or service." },
  { id: 59, text: "Share a tiny tip customers don’t know." },
  { id: 60, text: "Bundle two small items together just for today." },
  { id: 61, text: "Offer a 'local love' discount — small but fun." },
  { id: 62, text: "Show a 'pick of the day' and why." },
  { id: 63, text: "Post a micro-announcement in one sentence." },
  { id: 64, text: "Ask customers which product should return for a day." },
  { id: 65, text: "Share a tiny 'did you know we offer this?' reminder." },
  { id: 66, text: "Post a yes-or-no question anyone can answer." },
  { id: 67, text: "Share a one-word fill-in-the-blank." },
  { id: 68, text: "Show a mystery close-up and ask people to guess." },
  { id: 69, text: "Share a five-second video of anything happening right now." },
  { id: 70, text: "Ask a 'which one would you choose?' question with two items." },
  { id: 71, text: "Ask people to vote using emojis." },
  { id: 72, text: "Post a 'caption this' moment." },
  { id: 73, text: "Drop a micro-challenge: 'Show me your pet!'" },
  { id: 74, text: "Run a tiny scavenger hunt in your shop, even if it’s just one item." },
  { id: 75, text: "Ask people to guess a number — stock, steps, items, anything." },
  { id: 76, text: "Ask: 'What’s one thing you want to see us make or do next?'" },
  { id: 77, text: "Post something out of context on purpose — make it funny." },
  { id: 78, text: "Share two options and ask: 'Left or right?'" },
  { id: 79, text: "Ask people for their favorite season and why." },
  { id: 80, text: "Post a photo and ask: 'Real or staged?'" },
  { id: 81, text: "Share a small win from today." },
  { id: 82, text: "Show something that made you laugh." },
  { id: 83, text: "Tell a tiny story from the last hour." },
  { id: 84, text: "Share one belief your business runs on." },
  { id: 85, text: "Show a personal item you keep in the shop." },
  { id: 86, text: "Share your drink or mug of the day." },
  { id: 87, text: "Reveal a quirky habit you have while working." },
  { id: 88, text: "Post a 'truth I learned today' moment." },
  { id: 89, text: "Share a micro rant — friendly and relatable." },
  { id: 90, text: "Tell people what you’re looking forward to tomorrow." },
  { id: 91, text: "Show your hand doing a task — simple and human." },
  { id: 92, text: "Share gratitude for a tiny moment that happened today." },
  { id: 93, text: "Introduce yourself with one fun fact." },
  { id: 94, text: "Reveal your 'startup story' in one sentence." },
  { id: 95, text: "Post something nostalgic from your childhood that still influences your work." },
  { id: 96, text: "Move one item to a new spot and share it." },
  { id: 97, text: "Straighten a shelf and show a before-and-after." },
  { id: 98, text: "Refresh one tiny part of your display." },
  { id: 99, text: "Add a small prop or sign and share why." },
  { id: 100, text: "Take a picture outside your door right now — no editing." },
  // ... (Full 500 prompts remain exactly as you provided)
  { id: 101, text: "Ask a customer what their favorite thing nearby is." },
  { id: 102, text: "Ask someone what made them choose today to visit." },
  { id: 103, text: "Ask a regular what keeps them coming back — one sentence only." },
  { id: 104, text: "Ask a customer what surprised them about your place." },
  { id: 105, text: "Ask someone what they tell friends about you." },
  { id: 106, text: "Ask a customer what they’d change if they were the boss for one day." },
  { id: 107, text: "Ask someone what made them smile today." },
  { id: 108, text: "Ask a customer to predict your next product." },
  { id: 109, text: "Ask someone which days they most like to shop locally." },
  { id: 110, text: "Ask a customer what they wish more businesses did." },
  { id: 111, text: "Ask someone what color they associate with your place." },
  { id: 112, text: "Ask a customer what they’d name a new item." },
  { id: 113, text: "Ask one person where they think most customers come from." },
  { id: 114, text: "Ask someone what they think your secret strength is." },
  { id: 115, text: "Ask a customer what they almost bought somewhere else today." },
  { id: 116, text: "Post a single emoji that matches today’s vibe." },
  { id: 117, text: "Share a photo of your shadow or silhouette in the shop." },
  { id: 118, text: "Post a random object and ask followers to guess why it matters." },
  { id: 119, text: "Share a photo from the ceiling looking down." },
  { id: 120, text: "Share a 'two things I learned today' post." },
  { id: 121, text: "Post a picture of something oddly satisfying in your workspace." },
  { id: 122, text: "Share something that didn’t go as planned — keep it playful." },
  { id: 123, text: "Post a photo of your hands holding two different items and ask which wins." },
  { id: 124, text: "Share a color-matching moment: something in your shop matching your shirt." },
  { id: 125, text: "Post an item with no caption for 10 minutes, then add one." },
  { id: 126, text: "Share the most colorful thing you saw today." },
  { id: 127, text: "Record a three-second video of a sound in your shop." },
  { id: 128, text: "Post a picture cropped too close — intriguing on purpose." },
  { id: 129, text: "Share something that you rearranged today." },
  { id: 130, text: "Post a 'blink and you’ll miss it' moment — real or staged." },
  { id: 131, text: "Share one thing in your town worth celebrating today." },
  { id: 132, text: "Recognize a hardworking local group or team." },
  { id: 133, text: "Highlight a landmark within walking distance." },
  { id: 134, text: "Ask followers: 'What’s the best thing about our town?'" },
  { id: 135, text: "Share a weather moment — sunny, rainy, dramatic, anything." },
  { id: 136, text: "Show love to a small corner of your neighborhood." },
  { id: 137, text: "Post a memory connected to your city or street." },
  { id: 138, text: "Ask followers to share their favorite local tradition." },
  { id: 139, text: "Post a picture of something iconic about your town." },
  { id: 140, text: "Tell a micro-story about the first time you visited this area." },
  { id: 141, text: "Celebrate a local holiday or event with a tiny shoutout." },
  { id: 142, text: "Ask people to recommend a new local place for you to visit." },
  { id: 143, text: "Share a 'slice of life' moment right outside your door." },
  { id: 144, text: "Take a picture of a nearby color, shape, or pattern that caught your eye." },
  { id: 145, text: "Share something you appreciate about your neighbors." },
  { id: 146, text: "Choose one overlooked item and spotlight it briefly." },
  { id: 147, text: "Share how long one item usually takes to prepare or make." },
  { id: 148, text: "Highlight something small but mighty that people miss." },
  { id: 149, text: "Ask followers which item deserves a comeback." },
  { id: 150, text: "Post two versions of a product and ask which is better." },
  { id: 151, text: "Share a 'did you know?' detail about one of your services." },
  { id: 152, text: "Show the materials or ingredients for one product in a cool layout." },
  { id: 153, text: "Reveal a micro-upgrade you recently made to something." },
  { id: 154, text: "Highlight the simplest thing you sell — keep it poetic." },
  { id: 155, text: "Show the oldest product still in rotation." },
  { id: 156, text: "Share a tiny evolution: 'Then → Now' of one product." },
  { id: 157, text: "Post a 'name this item' challenge." },
  { id: 158, text: "Feature something customers often misunderstand." },
  { id: 159, text: "Share one thing you stopped offering and ask if it should return." },
  { id: 160, text: "Highlight a product color people love but you rarely mention." },
  { id: 161, text: "Share an honest 'today’s reality' snapshot." },
  { id: 162, text: "Tell people what’s currently on your to-do list." },
  { id: 163, text: "Post a picture of something imperfect on purpose." },
  { id: 164, text: "Show something that annoyed you — but make it funny." },
  { id: 165, text: "Share your '10-second break' moment." },
  { id: 166, text: "Post your current view without moving anything." },
  { id: 167, text: "Share a random tool you didn’t know you needed until today." },
  { id: 168, text: "Reveal something you recently organized." },
  { id: 169, text: "Share today’s 'oops' that turned out okay." },
  { id: 170, text: "Show something that made you proud today." },
  { id: 171, text: "Post a 'right now' picture — no setup." },
  { id: 172, text: "Share a micro fear you overcame at work." },
  { id: 173, text: "Show something that nearly fell over or spilled." },
  { id: 174, text: "Share current background noise in one sentence." },
  { id: 175, text: "Post a 'found object' in the shop that made you pause." },
  { id: 176, text: "Ask: 'If you could change one thing locally, what would it be?'" },
  { id: 177, text: "Ask people their favorite time of day to go out." },
  { id: 178, text: "Ask: 'One word to describe our vibe?'" },
  { id: 179, text: "Ask followers to guess what you’re working on next." },
  { id: 180, text: "Ask: 'What’s something you love buying locally?'" },
  { id: 181, text: "Ask people what they think your busiest hour is." },
  { id: 182, text: "Ask: 'What should we showcase tomorrow?'" },
  { id: 183, text: "Ask followers which color prefer for a new item." },
  { id: 184, text: "Ask people how far they usually travel for local shopping." },
  { id: 185, text: "Ask: 'If we had a mascot, what would it be?'" },
  { id: 186, text: "Ask: 'What should we feature more often?'" },
  { id: 187, text: "Ask followers to choose between two lighting setups." },
  { id: 188, text: "Ask: 'If this place had a theme song, what would it be?'" },
  { id: 189, text: "Ask: 'What’s one small thing we could add that you’d love?'" },
  { id: 190, text: "Ask followers to vote on a random number between 1 and 10." },
  { id: 191, text: "Make a tiny doodle related to your day and post it." },
  { id: 192, text: "Arrange three items into a triangle and photograph them." },
  { id: 193, text: "Write one sentence that describes your mood — share it." },
  { id: 194, text: "Take a picture of something symmetrical in your space." },
  { id: 195, text: "Draw a smiley face somewhere unexpected and snap it." },
  { id: 196, text: "Create a tiny still life of items from your workspace." },
  { id: 197, text: "Photograph something in black-and-white mode." },
  { id: 198, text: "Post a picture taken from floor level." },
  { id: 199, text: "Capture something reflected in a window or mirror." },
  { id: 200, text: "Take a picture of a shadow shaped like something recognizable." },
  { id: 201, text: "Take a picture of the most interesting thing in arm’s reach." },
  { id: 202, text: "Share something that annoyed you today but turned funny later." },
  { id: 203, text: "Post the last photo you took — no explanation for 10 minutes." },
  { id: 204, text: "Ask: 'What’s one tiny win you had today?'" },
  { id: 205, text: "Share a sound from your day — a door creak, a beep, anything." },
  { id: 206, text: "Take a picture of something unexpectedly beautiful." },
  { id: 207, text: "Share a weird coincidence that just happened." },
  { id: 208, text: "Ask: 'What’s the best thing you’ve eaten this week?'" },
  { id: 209, text: "Share an object that has traveled with you for years." },
  { id: 210, text: "Post a picture of your shoes and what they walked through today." },
  { id: 211, text: "Share a quote you heard someone say recently." },
  { id: 212, text: "Ask: 'What’s something you wish more people talked about?'" },
  { id: 213, text: "Take a picture from a very low angle — make it dramatic." },
  { id: 214, text: "Share what’s currently in your pocket or bag." },
  { id: 215, text: "Post a 'two things I believe today' moment." },
  { id: 216, text: "Photograph something with a perfect circle in it." },
  { id: 217, text: "Find two objects that unintentionally match colors — post them." },
  { id: 218, text: "Capture a shadow that looks like something else." },
  { id: 219, text: "Take a blurry photo on purpose — call it an artsy challenge and invite others to join." },
  { id: 220, text: "Snap a picture through something transparent — glass, plastic, a bottle." },
  { id: 221, text: "Capture something tiny and make it the star of the frame." },
  { id: 222, text: "Take a photo that includes exactly three colors." },
  { id: 223, text: "Photograph something that feels like 'calm' to you." },
  { id: 224, text: "Take a picture of a repeating pattern you notice." },
  { id: 225, text: "Post a photo from behind something — peekaboo style." },
  { id: 226, text: "Show two objects that should not go together but somehow work." },
  { id: 227, text: "Snap something that forms a natural heart shape." },
  { id: 228, text: "Post a picture with something accidentally photobombing." },
  { id: 229, text: "Take a picture where the background is more interesting than the subject." },
  { id: 230, text: "Capture the most chaotic area you’ve seen today." },
  { id: 231, text: "Ask: 'Where’s the last place you went that made you happy?'" },
  { id: 232, text: "Wave at a stranger and note their reaction — share with respect." },
  { id: 233, text: "Post something beautiful about your neighborhood." },
  { id: 234, text: "Share a wall, building, or sign that has meaning to you." },
  { id: 235, text: "Ask: 'What local spot deserves more love?'" },
  { id: 236, text: "Snap a picture of a random object outside and ask followers to caption it." },
  { id: 237, text: "Ask: 'What’s your favorite memory within one mile of here?'" },
  { id: 238, text: "Celebrate something tiny you noticed in your town today." },
  { id: 239, text: "Post a picture of the sky — zoom in on a weird detail." },
  { id: 240, text: "Ask people to describe your town in one emoji." },
  { id: 241, text: "Take a picture of your doorknob — surprisingly interesting." },
  { id: 242, text: "Share a human kindness you witnessed today." },
  { id: 243, text: "Ask: 'If our town had a mascot, what would it be?'" },
  { id: 244, text: "Post a strange or funny sign you saw today." },
  { id: 245, text: "Highlight a piece of architecture people walk by but never see." },
  { id: 246, text: "Post a photo of your favorite snack right now." },
  { id: 247, text: "Ask: 'Coffee or tea today?'" },
  { id: 248, text: "Share a picture of your reflection in any reflective surface." },
  { id: 249, text: "Do a color hunt: find something red and post it." },
  { id: 250, text: "Ask: 'What song would make today better?'" },
  { id: 251, text: "Post a photo that unintentionally looks like a face." },
  { id: 252, text: "Share a screenshot of the weather — dramatic or plain." },
  { id: 253, text: "Ask: 'What’s one thing you recommend everyone try once?'" },
  { id: 254, text: "Share a picture that makes no sense without context." },
  { id: 255, text: "Post something that made you laugh today." },
  { id: 256, text: "Take a picture of the most chaotic drawer or space you have." },
  { id: 257, text: "Share which object on your desk is the oldest." },
  { id: 258, text: "Ask: 'What’s one thing you always lose?'" },
  { id: 259, text: "Share a random number and ask people to reply with the first word it makes them think of." },
  { id: 260, text: "Post a photo of your shadow doing something silly." },
  { id: 261, text: "Share one thing you’re learning this month." },
  { id: 262, text: "Ask: 'What’s one lesson life keeps teaching you?'" },
  { id: 263, text: "Share a fear you had that turned out fine." },
  { id: 264, text: "Post a tiny confession — fun, safe, human." },
  { id: 265, text: "Share something that felt surprisingly hard today." },
  { id: 266, text: "Ask: 'What’s a goal you’re secretly proud of?'" },
  { id: 267, text: "Share one piece of advice you needed earlier in life." },
  { id: 268, text: "Ask: 'What’s something simple that makes your day better?'" },
  { id: 269, text: "Post a picture of something that represents your mood." },
  { id: 270, text: "Share one thing you’re letting go of this week." },
  { id: 271, text: "Ask: 'What do you wish you enjoyed more?'" },
  { id: 272, text: "Share a micro joy from the past hour." },
  { id: 273, text: "Post something nostalgic that shaped who you are." },
  { id: 274, text: "Ask: 'Which habit changed your life the most?'" },
  { id: 275, text: "Share one rule you follow that most people don’t." },
  { id: 276, text: "Create a tiny collage using objects you have nearby." },
  { id: 277, text: "Write a five-word story and share it." },
  { id: 278, text: "Draw a simple doodle that describes your day." },
  { id: 279, text: "Take a photo of an object from directly above." },
  { id: 280, text: "Post a 'found alphabet' letter made from objects." },
  { id: 281, text: "Share a photo of something that looks like it belongs in a museum." },
  { id: 282, text: "Use portrait mode on something that should not look fancy." },
  { id: 283, text: "Post a color gradient you found in real life." },
  { id: 284, text: "Capture something mid-motion, even if it’s blurry." },
  { id: 285, text: "Find something shaped like a triangle and share it." },
  { id: 286, text: "Take a photo framed by your hands or fingers." },
  { id: 287, text: "Write one line of a poem — spontaneous." },
  { id: 288, text: "Share a snapshot of something accidentally symmetrical." },
  { id: 289, text: "Photograph something upside down and don’t mention it." },
  { id: 290, text: "Create a tiny story using only emojis." },
  { id: 291, text: "Ask: 'What’s a movie you never get tired of?'" },
  { id: 292, text: "Ask: 'What scent immediately brings back memories?'" },
  { id: 293, text: "Ask: 'What’s one thing you wish you were better at?'" },
  { id: 294, text: "Ask: 'What’s your comfort food today?'" },
  { id: 295, text: "Ask: 'What’s something you can’t unsee once you notice it?'" },
  { id: 296, text: "Ask: 'What song could you play on repeat without going insane?'" },
  { id: 297, text: "Ask: 'What’s a hill you’ll die on — silly edition?'" },
  { id: 298, text: "Ask: 'What’s something wildly overrated?'" },
  { id: 299, text: "Ask: 'What tiny victory did you have this week?'" },
  { id: 300, text: "Ask: 'If you could teleport to one place for 10 minutes, where would you go?'" },
  { id: 301, text: "Take a blurry photo on purpose — call it an artsy challenge and invite others to join in." },
  { id: 302, text: "Post a photo of your shoes and ask others to share theirs in the comments." },
  { id: 303, text: "Snap a picture of the sky right now and ask everyone to reply with theirs." },
  { id: 304, text: "Start a 'what’s in your pocket?' challenge — keep it PG." },
  { id: 305, text: "Share your current view and ask others to drop theirs." },
  { id: 306, text: "Post your favorite pen, mug, or tool — ask followers to show theirs." },
  { id: 307, text: "Share a color from your day and ask others to match it." },
  { id: 308, text: "Take a picture of something shaped like a heart and ask others to find one too." },
  { id: 309, text: "Post a weird shadow and challenge others to do the same." },
  { id: 310, text: "Start a 'messy desk Monday' and invite others to join." },
  { id: 311, text: "Post a photo from a weird angle and ask others to try it." },
  { id: 312, text: "Share your reflection in something unexpected and ask people to copy you." },
  { id: 313, text: "Show a close-up mystery photo and ask others to post their own mystery shots." },
  { id: 314, text: "Share a tiny object and challenge others to share something even tinier." },
  { id: 315, text: "Post a 'blind shot' (camera pointed without looking) and invite others to attempt one." },
  { id: 316, text: "Ask: 'What’s one word that describes your day?'" },
  { id: 317, text: "Ask followers to share the funniest thing they saw today." },
  { id: 318, text: "Post a simple poll: 'Morning person or night owl?'" },
  { id: 319, text: "Ask: 'What’s a smell that instantly lifts your mood?'" },
  { id: 320, text: "Ask people to post a GIF that describes their week." },
  { id: 321, text: "Ask: 'What’s one thing you’re grateful for today?'" },
  { id: 322, text: "Ask followers to share their pet’s name." },
  { id: 323, text: "Ask: 'What’s a weird opinion you stand by?'" },
  { id: 324, text: "Ask people to share their favorite childhood snack." },
  { id: 325, text: "Ask: 'What’s one small goal you’re working on this week?'" },
  { id: 326, text: "Start a chain: 'Write one thing someone reading this needs to hear.'" },
  { id: 327, text: "Ask people to share something that made them smile today." },
  { id: 328, text: "Ask: 'What song is stuck in your head right now?'" },
  { id: 329, text: "Ask followers to drop a photo that sums up their vibe." },
  { id: 330, text: "Ask: 'What’s a hobby you think everyone should try once?'" },
  { id: 331, text: "Post your handwriting and ask others to share theirs." },
  { id: 332, text: "Share a doodle and invite people to respond with a doodle of their own." },
  { id: 333, text: "Take a picture of a random object and challenge others to find the same object." },
  { id: 334, text: "Share your favorite chair or spot to sit and ask for theirs." },
  { id: 335, text: "Start a 'color of the day' challenge and invite others to post matching photos." },
  { id: 336, text: "Take a picture of something you thought was lost and ask others what they recently found." },
  { id: 337, text: "Share your oldest item at arm’s reach and ask others to show theirs." },
  { id: 338, text: "Post two similar items and ask which one others prefer." },
  { id: 339, text: "Share a photo of today’s weather and ask others for theirs." },
  { id: 340, text: "Do a blind contour drawing (no looking at the paper) and dare others to try." },
  { id: 341, text: "Share a random childhood memory and ask followers to reply with one too." },
  { id: 342, text: "Post your ringtone or notification sound and ask what others use." },
  { id: 343, text: "Share something quirky you always carry and ask others to share theirs." },
  { id: 344, text: "Take a picture of a circle and challenge others to find a natural one nearby." },
  { id: 345, text: "Share your desk light or lamp and ask people to show their vibe lighting." },
  { id: 346, text: "Post a picture and ask: 'What’s the first word this makes you think of?'" },
  { id: 347, text: "Share two unrelated objects and ask people to name the combo." },
  { id: 348, text: "Post a picture and ask followers to write a caption for it." },
  { id: 349, text: "Share a sound clip and ask people what they think it is." },
  { id: 350, text: "Post an odd close-up and ask: 'Guess what this is?'" },
  { id: 351, text: "Show something half-finished and ask people how they’d complete it." },
  { id: 352, text: "Post a photo and ask people to rate the chaos from 1 to 10." },
  { id: 353, text: "Share a messy corner and ask if others have one too." },
  { id: 354, text: "Post a picture of something organized and ask if people prefer messy or neat." },
  { id: 355, text: "Share two colors and ask people which mood they represent." },
  { id: 356, text: "Post your favorite mug and ask people to rate it." },
  { id: 357, text: "Share a photo and ask: 'Is this a good idea or terrible?'" },
  { id: 358, text: "Show something you regret buying and ask followers for theirs." },
  { id: 359, text: "Share a small win and ask others to drop theirs in the comments." },
  { id: 360, text: "Post a picture of your current snack and ask people to guess what it is." },
  { id: 361, text: "Post a riddle and invite people to guess the answer." },
  { id: 362, text: "Share a scrambled word and challenge people to unscramble it." },
  { id: 363, text: "Share a zoomed-in texture and ask people to identify it." },
  { id: 364, text: "Start a challenge: 'Take a photo without showing the actual object.'" },
  { id: 365, text: "Do a color-match game: show a color, ask people to find something that matches." },
  { id: 366, text: "Ask: 'Two truths and a lie — reply with yours.'" },
  { id: 367, text: "Share half a joke and invite people to finish it." },
  { id: 368, text: "Post an almost impossible 'Where’s Waldo?' style close-up." },
  { id: 369, text: "Start: 'Tell me a random fact that sounds fake but isn’t.'" },
  { id: 370, text: "Ask people to guess your favorite piece of clothing." },
  { id: 371, text: "Post a zoomed-in corner of your workspace and ask for guesses." },
  { id: 372, text: "Ask: 'If this picture were a movie scene, what’s happening?'" },
  { id: 373, text: "Start a mini scavenger hunt: 'Find something yellow and post it.'" },
  { id: 374, text: "Ask followers to share the first safe photo in their camera roll." },
  { id: 375, text: "Take a photo of something oddly shaped and challenge others to find the same shape." },
  { id: 376, text: "Share a photo that would make a great wallpaper and tell people they can save it." },
  { id: 377, text: "Post a quote card and invite others to share it." },
  { id: 378, text: "Post a funny moment and encourage others to tag a friend who’d relate." },
  { id: 379, text: "Share a before-and-after and ask people which they prefer." },
  { id: 380, text: "Post a 'save this for later' tip anyone can use." },
  { id: 381, text: "Share your favorite local spot and invite others to share theirs." },
  { id: 382, text: "Post a relatable mini rant and ask for others’ experiences." },
  { id: 383, text: "Share a calming photo people can save as a screensaver." },
  { id: 384, text: "Post a simple checklist template people can screenshot and use." },
  { id: 385, text: "Share a productivity tip and ask what others rely on." },
  { id: 386, text: "Post a daily affirmation and ask people to share their own spin on it." },
  { id: 387, text: "Share a mini-story and ask: 'Anyone else had this happen?'" },
  { id: 388, text: "Post two photos and ask people to pick a winner." },
  { id: 389, text: "Share a 'do this today' tip and ask people to report back." },
  { id: 390, text: "Post something inspiring and invite followers to share it forward." },
  { id: 391, text: "Write the first line of a story and ask people to continue it." },
  { id: 392, text: "Post a random object and ask people what superpower it would have." },
  { id: 393, text: "Share a weird photo and start a caption battle." },
  { id: 394, text: "Post a shape and ask people what it reminds them of." },
  { id: 395, text: "Share a photo of an empty space and ask people what should fill it." },
  { id: 396, text: "Post something ordinary and ask followers to describe it dramatically." },
  { id: 397, text: "Share a picture and invite people to write a haiku about it." },
  { id: 398, text: "Start a 'bad photo challenge' — purposely awful shots only." },
  { id: 399, text: "Post a minimalist photo and ask others to copy the vibe." },
  { id: 400, text: "Start a 'color of the hour' challenge and ask people to match it." },
  { id: 401, text: "Share a goofy selfie with a weird angle and invite others to try." },
  { id: 402, text: "Post a random household object and ask followers to guess its weight." },
  { id: 403, text: "Share a 'wrong answers only' prompt with a simple photo." },
  { id: 404, text: "Ask: 'What should this object’s name be?'" },
  { id: 405, text: "Post an image and ask: 'What’s this object’s backstory?'" },
  { id: 406, text: "Take a picture of two unrelated items and ask followers to make up a connection." },
  { id: 407, text: "Snap an oddly cropped image and ask people to guess the rest." },
  { id: 408, text: "Post your least aesthetic object and ask for others’ ugly items too." },
  { id: 409, text: "Share something super ordinary and ask people to romanticize it in one sentence." },
  { id: 410, text: "Hold up two fingers and ask others to reply with a hand pose." },
  { id: 411, text: "Post your daily beverage and ask everyone else to share theirs." },
  { id: 412, text: "Share the last thing you bought and ask others to reveal theirs (safe version)." },
  { id: 413, text: "Take a picture of your reflection in something tiny and ask others to beat it." },
  { id: 414, text: "Post a 'no context' photo and ask people to caption it." },
  { id: 415, text: "Show a picture of your shadow and ask others to post their own." },
  { id: 416, text: "Start a 'tiny kindness' thread and ask people to share something kind someone did today." },
  { id: 417, text: "Ask: 'What’s one thing you appreciate about someone in your life?'" },
  { id: 418, text: "Ask followers to tag someone who deserves a compliment." },
  { id: 419, text: "Ask people to share their favorite local food." },
  { id: 420, text: "Invite others to share a photo of their favorite quiet place." },
  { id: 421, text: "Ask: 'What’s something small that made your day better?'" },
  { id: 422, text: "Start a thread: 'Tell someone scrolling this they’re doing great.'" },
  { id: 423, text: "Ask people to recommend a song that improves any mood." },
  { id: 424, text: "Invite others to share the last picture they took of nature." },
  { id: 425, text: "Ask: 'What’s the best thing about your neighborhood?'" },
  { id: 426, text: "Ask followers to shout out a local business they love." },
  { id: 427, text: "Start a positivity chain: 'Say something good about today.'" },
  { id: 428, text: "Invite people to share their weather right now." },
  { id: 429, text: "Ask: 'What’s a small dream you’re working toward?'" },
  { id: 430, text: "Start a community photo chain: 'Post something blue.'" },
  { id: 431, text: "Post a simple shape and ask people to turn it into something else." },
  { id: 432, text: "Share a photo and ask people to describe it using only emojis." },
  { id: 433, text: "Write half a poem and invite others to finish it." },
  { id: 434, text: "Share a creative prompt and challenge others to interpret it visually." },
  { id: 435, text: "Post something textured and ask followers to find a similar texture." },
  { id: 436, text: "Share a weird cloud shape and ask people what they see." },
  { id: 437, text: "Post a random color and ask followers to photograph something that matches." },
  { id: 438, text: "Share something symmetrical and ask others to find their own symmetry." },
  { id: 439, text: "Share a photo of light coming through something and ask others to recreate it." },
  { id: 440, text: "Post a messy scribble and ask people what it resembles." },
  { id: 441, text: "Post your handwriting and ask followers to write the same word in theirs." },
  { id: 442, text: "Share an unfinished drawing and ask others how they’d finish it." },
  { id: 443, text: "Post a tiny doodle and challenge people to improve it." },
  { id: 444, text: "Share a random pattern and ask others to find a matching pattern where they are." },
  { id: 445, text: "Post an everyday object enlarged and ask others to guess what it is." },
  { id: 446, text: "Post a picture of your socks and ask for sock check-ins." },
  { id: 447, text: "Share a close-up of your hand and ask others to match the pose." },
  { id: 448, text: "Post something that looks like it should have a face and ask others to find one too." },
  { id: 449, text: "Share something unreasonably tiny and ask people to top it." },
  { id: 450, text: "Post something that looks giant thanks to forced perspective." },
  { id: 451, text: "Take a picture pretending you’re scared of something harmless and invite others to do the same." },
  { id: 452, text: "Take a pic of something that 'sparked zero joy' today and ask others to join in." },
  { id: 453, text: "Share a picture of something crooked and ask: 'Fix it or leave it?'" },
  { id: 454, text: "Post something you don’t remember buying and ask: 'How did this get here?'" },
  { id: 455, text: "Take a picture of a random corner and ask others to show their corners." },
  { id: 456, text: "Share a 'guess this sound' video." },
  { id: 457, text: "Post a colorful mess and ask people to describe it in one word." },
  { id: 458, text: "Share something that looks like it belongs in a video game." },
  { id: 459, text: "Take a photo of something that looks dramatic for no reason." },
  { id: 460, text: "Share an accidentally aesthetic moment and ask others to drop theirs." },
  { id: 461, text: "Do a 10-second tidy and show your result — ask people to try it too." },
  { id: 462, text: "Drink a glass of water and challenge others to do the same and say 'done'." },
  { id: 463, text: "Step outside for 15 seconds and snap a picture — ask others to join." },
  { id: 464, text: "Find something that made you smile and ask people to reply with theirs." },
  { id: 465, text: "Share a quick stretch you did and ask people to try it." },
  { id: 466, text: "Take three deep breaths and invite others to comment 'breathe'." },
  { id: 467, text: "Share one goal for today and ask others to set theirs." },
  { id: 468, text: "Post something you checked off your to-do list and ask for others’ wins." },
  { id: 469, text: "Share your current playlist and ask people to add a recommendation." },
  { id: 470, text: "Post a simple act of self-care and ask people to comment theirs." },
  { id: 471, text: "Share what you’re reading and ask for a book recommendation." },
  { id: 472, text: "Post something you organized today and ask followers to organize one thing too." },
  { id: 473, text: "Share a before-and-after of a tiny task and ask others to complete a tiny task today." },
  { id: 474, text: "Share a 30-second walk snapshot and ask others to take a quick walk." },
  { id: 475, text: "Share something that improved your mood and ask what works for others." },
  { id: 476, text: "Ask: 'What movie quote do you use the most?'" },
  { id: 477, text: "Ask: 'What’s a song lyric that lives rent-free in your mind?'" },
  { id: 478, text: "Ask: 'What old trend should come back?'" },
  { id: 479, text: "Ask: 'What old trend should never come back?'" },
  { id: 480, text: "Ask: 'What’s a TV show everyone should watch at least once?'" },
  { id: 481, text: "Ask: 'What’s one invention you’re grateful exists?'" },
  { id: 482, text: "Ask: 'What’s a smell that instantly transports you somewhere?'" },
  { id: 483, text: "Ask: 'What’s something that always makes you laugh?'" },
  { id: 484, text: "Ask: 'What’s a superstition you secretly believe?'" },
  { id: 485, text: "Ask: 'What’s a childhood fear you now laugh about?'" },
  { id: 486, text: "Ask: 'What’s something you miss that doesn’t exist anymore?'" },
  { id: 487, text: "Ask: 'What’s one thing you think is underrated?'" },
  { id: 488, text: "Ask: 'What’s your comfort show or movie?'" },
  { id: 489, text: "Ask: 'What everyday item deserves more respect?'" },
  { id: 490, text: "Ask: 'What’s a simple rule you live by?'" },
  { id: 491, text: "Post the first safe photo in your gallery and dare others to do the same." },
  { id: 492, text: "Share a mistake you made today and ask if anyone relates." },
  { id: 493, text: "Take a weird photo and challenge others to make it even weirder." },
  { id: 494, text: "Post a random number and ask people to comment what it reminds them of." },
  { id: 495, text: "Share your favorite emoji combo and ask followers to drop theirs." },
  { id: 496, text: "Post a 'caption this' video that’s short and strange." },
  { id: 497, text: "Start a chain-style post: 'Say something nice to the next commenter.'" },
  { id: 498, text: "Share a 'no-context object' and ask people what it should be used for." },
  { id: 499, text: "Post a tiny life tip and ask others to add theirs." },
  { id: 500, text: "Share something you’d never throw away and ask followers what they’d never toss." }
];

let order = [];
let index = 0;
let doneCount = 0;

function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function loadFromStorage(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch { return fallback; }
}

function saveToStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast._timeout);
  showToast._timeout = window.setTimeout(() => { toast.classList.remove("visible"); }, 1600);
}

function applyTheme(theme) {
  const body = document.body;
  if (theme === "dark") {
    body.classList.add("theme-dark");
    body.classList.remove("theme-light");
  } else {
    body.classList.add("theme-light");
    body.classList.remove("theme-dark");
    theme = "light";
  }
  saveToStorage(STORAGE_KEYS.THEME, theme);
  const btn = document.getElementById("themeToggle");
  if (btn) { btn.textContent = theme === "dark" ? "☀️" : "🌙"; }
}

function initTheme() {
  let stored = loadFromStorage(STORAGE_KEYS.THEME, null);
  if (!stored) {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    stored = prefersDark ? "dark" : "light";
  }
  applyTheme(stored);
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = loadFromStorage(STORAGE_KEYS.THEME, "light");
      applyTheme(current === "light" ? "dark" : "light");
    });
  }
}

function getCategoryForText(text) {
  const lower = text.toLowerCase();
  if (lower.includes("photo") || lower.includes("picture") || lower.includes("snap") || lower.includes("capture")) return "📸 Photo Op";
  if (lower.includes("ask") || lower.includes("question") || lower.includes("poll") || lower.includes("vote")) return "🗣️ Community";
  if (lower.includes("discount") || lower.includes("deal") || lower.includes("offer") || lower.includes("free")) return "💰 Flash Promo";
  if (lower.includes("share") || lower.includes("post") || lower.includes("show") || lower.includes("highlight")) return "✨ Showcase";
  if (lower.includes("challenge") || lower.includes("dare") || lower.includes("game")) return "🎯 Challenge";
  return "🔥 Quick Vibe";
}

function initOrder() {
  const total = ACTIONS.length;
  if (!total) return;
  const storedOrder = loadFromStorage(STORAGE_KEYS.ORDER, null);
  const storedIndex = loadFromStorage(STORAGE_KEYS.INDEX, 0);
  if (Array.isArray(storedOrder) && storedOrder.length === total) {
    order = storedOrder;
    index = Number.isInteger(storedIndex) ? storedIndex : 0;
  } else {
    order = shuffle(ACTIONS.map(a => a.id));
    index = 0;
    saveToStorage(STORAGE_KEYS.ORDER, order);
    saveToStorage(STORAGE_KEYS.INDEX, index);
  }
}

function getActionById(id) { return ACTIONS.find(a => a.id === id) || null; }
function getCurrentAction() {
  if (!order.length) return null;
  return getActionById(order[index]);
}

function nextAction() {
  if (!ACTIONS.length) return null;
  index++;
  if (index >= order.length) {
    order = shuffle(ACTIONS.map(a => a.id));
    index = 0;
  }
  saveToStorage(STORAGE_KEYS.ORDER, order);
  saveToStorage(STORAGE_KEYS.INDEX, index);
  return getCurrentAction();
}

function renderAction(action) {
  const textEl = document.getElementById("actionText");
  const metaEl = document.getElementById("actionMeta");
  const badgeEl = document.getElementById("categoryBadge");
  if (!action || !textEl || !metaEl) return;
  textEl.textContent = action.text;
  metaEl.textContent = `Vibe #${action.id} • ${index + 1}/${ACTIONS.length}`;
  if (badgeEl) {
    badgeEl.textContent = getCategoryForText(action.text);
    badgeEl.hidden = false;
  }
}

function renderDoneCount() {
  const el = document.getElementById("doneCounter");
  if (el) el.textContent = `Momentum: ${doneCount}`;
}

// Slow, Lingering Fireworks
function fireConfetti() {
  const colors = ['#ff2e63', '#3a7bff', '#ff8a3d', '#c3ff1a', '#a259ff', '#ffffff'];
  const burstCount = 5;
  const particlesPerBurst = 25; // A bit more dense

  for (let b = 0; b < burstCount; b++) {
    const originX = Math.random() * 80 + 10;
    const originY = Math.random() * 60 + 10;

    for (let i = 0; i < particlesPerBurst; i++) {
      const p = document.createElement('div');
      p.style.position = 'fixed';
      p.style.zIndex = '99999';
      p.style.pointerEvents = 'none';

      const roll = Math.random();
      if (roll > 0.6) {
        p.style.width = '8px'; p.style.height = '8px'; p.style.borderRadius = '50%';
      } else if (roll > 0.3) {
        p.style.width = '6px'; p.style.height = '14px'; p.style.borderRadius = '2px';
      } else {
        p.style.width = '10px'; p.style.height = '10px'; p.style.borderRadius = '2px';
      }

      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.left = originX + 'vw';
      p.style.top = originY + 'vh';
      document.body.appendChild(p);

      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 180 + 70; // Shoot a bit further
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance + 120; // Drifts DOWN further
      const rot = Math.random() * 1440 - 720;
      const duration = Math.random() * 1500 + 2000; // Lingers between 2s and 3.5s

      p.animate([
        { transform: `translate(0, 0) rotate(0deg) scale(1)`, opacity: 1 },
        { opacity: 1, offset: 0.7 }, // Stay solid for 70% of the time
        { transform: `translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(0)`, opacity: 0 }
      ], {
        duration: duration,
        easing: 'cubic-bezier(0.1, 0.8, 0.4, 1)', // Fast start, very long drift
        fill: 'forwards'
      });

      setTimeout(() => p.remove(), duration + 100);
    }
  }
}

function initDoneCount() {
  doneCount = loadFromStorage(STORAGE_KEYS.DONE_COUNT, 0);
  renderDoneCount();
  const btn = document.getElementById("doneBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      doneCount++;
      saveToStorage(STORAGE_KEYS.DONE_COUNT, doneCount);
      renderDoneCount();
      showToast("Momentum increased! 🔥");
      btn.classList.add("burst-active");
      setTimeout(() => btn.classList.remove("burst-active"), 600);
      fireConfetti();
    });
  }
}

async function copyCurrentAction() {
  const action = getCurrentAction();
  if (!action) return;
  try {
    await navigator.clipboard.writeText(action.text);
    showToast("Copied to clipboard 📋");
  } catch { showToast("Copy failed"); }
}

async function shareCurrentAction() {
  const action = getCurrentAction();
  if (!action || !navigator.share) {
    copyCurrentAction();
    return;
  }
  try { await navigator.share({ title: "BuzzBlaster Vibe Machine", text: action.text }); } catch {}
}

function initInfoModal() {
  const infoBtn = document.getElementById("infoBtn"), infoOverlay = document.getElementById("infoOverlay"),
        infoModal = document.getElementById("infoModal"), infoCloseBtn = document.getElementById("infoCloseBtn"),
        letsBlastBtn = document.getElementById("letsBlastBtn"), hideCheckbox = document.getElementById("hideIntroCheckbox"),
        tabButtons = Array.from(document.querySelectorAll(".ml-info-tab")), panels = Array.from(document.querySelectorAll(".ml-info-panel"));
  if (!infoBtn || !infoOverlay || !infoModal) return;
  const openInfo = () => { infoOverlay.hidden = false; infoModal.hidden = false; };
  const closeInfo = () => {
    infoOverlay.hidden = true; infoModal.hidden = true;
    if (hideCheckbox) saveToStorage(STORAGE_KEYS.HIDE_INTRO, hideCheckbox.checked);
  };
  const setActiveTab = (name) => {
    tabButtons.forEach(b => b.classList.toggle("ml-info-tab-active", b.dataset.tab === name));
    panels.forEach(p => p.hidden = (p.dataset.panel !== name));
  };
  infoBtn.addEventListener("click", openInfo);
  infoOverlay.addEventListener("click", closeInfo);
  infoCloseBtn.addEventListener("click", closeInfo);
  if (letsBlastBtn) letsBlastBtn.addEventListener("click", closeInfo);
  tabButtons.forEach(b => b.addEventListener("click", () => setActiveTab(b.dataset.tab)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !infoModal.hidden) closeInfo(); });
  const hideIntro = loadFromStorage(STORAGE_KEYS.HIDE_INTRO, false);
  if (hideCheckbox) hideCheckbox.checked = hideIntro;
  if (!hideIntro) openInfo();
}

function initButtons() {
  const n = document.getElementById("newActionBtn"), c = document.getElementById("copyBtn"), s = document.getElementById("shareBtn");
  if (n) n.addEventListener("click", () => { const a = nextAction(); if (a) renderAction(a); });
  if (c) c.addEventListener("click", copyCurrentAction);
  if (s) s.addEventListener("click", shareCurrentAction);
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme(); initOrder(); renderAction(getCurrentAction() || nextAction());
  initButtons(); initDoneCount(); initInfoModal();
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
});