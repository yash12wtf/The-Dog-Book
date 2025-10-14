const dogBreedData = {
  "Labrador Retriever": {
    puppy: {
      overview: "Labrador puppies are playful, curious, and energetic. This stage is crucial for growth, socialization, and training.",
      physicalTraits: "Weight: 8–25 kg depending on growth stage. Soft puppy coat (shedding begins at 6–9 months). Teeth changing (teething phase)",
      diet: "High-protein puppy food with calcium & DHA. Feed 3–4 small meals a day. Avoid overfeeding.",
      food: ["Puppy kibble (chicken, lamb, or fish-based)", "Boiled eggs", "Rice and vegetables", "Apple slices"],
      training: "Basic commands: sit, stay, come. Socialize with people & other dogs. Positive reinforcement",
      grooming: "Brush 2–3 times weekly. Bathe once a month. Start dental care & nail trimming",
      phobias: ["Loud noises (vacuum, thunder)", "Being left alone"],
      allergies: ["Wheat", "Soy", "Beef"],
      medicines: ["Puppy vaccinations (6–16 weeks)", "Deworming every 2–3 weeks until 6 months", "Flea & tick control (from 10–12 weeks)"],
      healthTips: "Avoid stairs until bones strengthen. Regular vet checkups"
    },
    adult: {
      overview: "Adult Labradors are strong, active, social, and trainable — the breed’s prime stage.",
      physicalTraits: "Height: 22–24.5 inches. Weight: 25–36 kg. Full-grown, muscular, high stamina",
      diet: "Balanced diet: 50% meat, 25% carbs, 25% veggies. 2 meals per day. Portion control to avoid obesity.",
      food: ["High-protein kibble (chicken, lamb)", "Fish and rice", "Vegetables and eggs", "Bananas occasionally"],
      training: "1–2 hours daily (walks, swimming, fetch). Mental stimulation (training, puzzle toys)",
      grooming: "Brush every 2–3 days. Bath every 4–6 weeks. Clean ears weekly. Brush teeth 2–3 times/week",
      phobias: ["Fireworks & loud noises", "Being left alone (separation anxiety)"],
      allergies: ["Wheat", "Soy", "Chicken"],
      medicines: ["Monthly flea & tick prevention", "Heartworm prevention", "Annual vaccinations", "Optional joint supplements"],
      healthTips: "Watch for obesity. Maintain muscle & joint strength. Annual vet checkups"
    },
    senior: {
      overview: "Senior Labradors are calmer, affectionate, and require extra care for joints, weight, and overall health.",
      physicalTraits: "Weight may slightly decrease. Slower movement & stamina. Gray muzzle, possible cloudy eyes",
      diet: "Low-fat, high-fiber diet. Joint-support supplements (glucosamine, chondroitin). Feed 2 smaller meals daily.",
      food: ["Low-fat kibble (salmon or lamb-based)", "Boiled vegetables", "Soft rice meals", "Omega-3 supplements"],
      training: "Short, gentle walks. Light play sessions. Swimming (low-impact for joints)",
      grooming: "Brush weekly. Bathe monthly. Keep nails short. Regular vet checkups every 6 months",
      phobias: ["Thunderstorms", "Loud/unfamiliar noises", "Separation anxiety"],
      allergies: ["Wheat", "Beef", "Dairy"],
      medicines: ["Joint supplements", "Pain relievers (if prescribed)", "Heartworm, flea, and tick preventives", "Dental cleaning"],
      healthTips: "Monitor for arthritis, cataracts, heart issues. Maintain weight. Provide soft bedding & easy access to water"
    },
    lifeSpan: "10-12 years"
  },
  "German Shepherd": {
    puppy: {
      overview: "German Shepherd puppies are highly intelligent, curious, and energetic. Early socialization, training, and mental stimulation are crucial.",
      physicalTraits: "Weight: 8–30 kg depending on growth stage. Rapid growth, strong bones and muscles forming. Soft puppy coat, shedding begins around 6–8 months. Teeth teething phase (use chew toys)",
      diet: "High-protein puppy kibble for muscle and bone growth. Calcium and DHA-rich foods for bones and brain development. Feed 3–4 small meals daily.",
      food: ["Puppy kibble (chicken or beef)", "Rice with vegetables", "Boiled eggs", "Fish oil for bone growth"],
      training: "Begin obedience training early (sit, stay, come, down). Socialize with other dogs and humans. Short, positive reinforcement sessions (5–10 minutes)",
      grooming: "Brush coat 2–3 times per week. Bathe once a month. Dental hygiene & nail trimming",
      phobias: ["Loud noises (thunder, vacuum, fireworks)", "Strangers"],
      allergies: ["Chicken", "Wheat", "Soy"],
      medicines: ["Puppy vaccinations (6–16 weeks)", "Flea & tick prevention", "Deworming every 2–3 weeks"],
      healthTips: "Avoid excessive jumping or stairs until bones strengthen. Vet checkups to monitor growth and joint development"
    },
    adult: {
      overview: "Adult German Shepherds are strong, active, intelligent, and loyal. They thrive on exercise, mental stimulation, and consistent training.",
      physicalTraits: "Height: 24–26 inches. Weight: 30–40 kg. Muscular, athletic body with high endurance. Double coat: dense, straight outer coat, softer undercoat",
      diet: "Balanced diet with 50% protein, 25% carbs, 25% veggies. Two meals per day. Avoid overfeeding; monitor weight.",
      food: ["High-protein kibble", "Lean meat and rice", "Vegetables", "Yogurt occasionally"],
      training: "Minimum 2 hours daily: running, fetch, obedience training, agility. Mental exercises (puzzle toys, scent games)",
      grooming: "Brush coat every 2–3 days. Bathe every 4–6 weeks. Clean ears weekly. Brush teeth 2–3 times/week",
      phobias: ["Loud noises (fireworks, storms)", "Strangers if not properly socialized"],
      allergies: ["Chicken", "Wheat", "Grain-based foods"],
      medicines: ["Monthly flea & tick prevention", "Heartworm prevention", "Vaccinations per vet schedule", "Joint supplements (optional)"],
      healthTips: "Monitor hip and elbow health (prone to dysplasia). Maintain regular exercise. Check weight and overall fitness"
    },
    senior: {
      overview: "Senior German Shepherds are calmer but require extra care for joints, weight, and overall health.",
      physicalTraits: "Weight may decrease slightly. Slower movement, stiffness in joints. Graying muzzle, possible cloudy eyes",
      diet: "Low-fat, high-fiber diet. Joint-support supplements (glucosamine, chondroitin). Feed 2 smaller meals daily.",
      food: ["Low-fat kibble (chicken/fish)", "Soft rice and boiled vegetables", "Supplements for joints"],
      training: "Gentle walks daily. Light play, swimming (low-impact for joints). Avoid stairs and jumping",
      grooming: "Brush weekly. Bathe monthly. Keep nails short. Regular vet checkups every 6 months",
      phobias: ["Thunderstorms", "Loud, unfamiliar noises", "Being left alone"],
      allergies: ["Chicken", "Wheat", "Grain-based foods"],
      medicines: ["Joint supplements", "Pain relievers (if prescribed)", "Heartworm, flea, and tick preventives", "Dental cleaning"],
      healthTips: "Watch for arthritis, hip/elbow issues, heart problems. Keep weight stable. Provide soft bedding and easy access to water"
    },
    lifeSpan: "9-13 years"
  },
  "Golden Retriever": {
    puppy: {
      overview: "Golden Retriever puppies are playful, affectionate, and highly curious. Early socialization and basic training are crucial for proper development.",
      physicalTraits: "Weight: 6–25 kg depending on growth stage. Soft, fluffy coat; shedding starts at 6–9 months. Rapid growth of muscles and bones. Teething phase; chew toys recommended",
      diet: "High-protein puppy food for growth and brain development. Feed 3–4 small meals daily. Include calcium and DHA for bone and cognitive health.",
      food: ["Puppy kibble (chicken/fish)", "Rice and eggs", "Vegetables", "Fruits like apples"],
      training: "Start basic commands: sit, stay, come. Socialize with people and other pets. Use positive reinforcement; keep training short",
      grooming: "Brush coat 2–3 times weekly. Bathe once a month. Start dental hygiene and nail trimming",
      phobias: ["Fireworks", "Loud noises", "Being left alone"],
      allergies: ["Dairy", "Chicken"],
      medicines: ["Puppy vaccinations (6–16 weeks)", "Deworming every 2–3 weeks", "Flea & tick prevention"],
      healthTips: "Avoid stairs or jumping until bones strengthen. Regular vet checkups"
    },
    adult: {
      overview: "Adult Golden Retrievers are strong, friendly, and energetic. They require daily exercise and mental stimulation to stay healthy.",
      physicalTraits: "Height: 21.5–24 inches. Weight: 25–34 kg. Well-developed muscular body. Dense double coat; moderate shedding",
      diet: "Balanced diet: high-quality kibble with meat, grains, and vegetables. 2 meals per day. Avoid overfeeding; monitor weight.",
      food: ["High-protein kibble", "Lean meat and rice", "Carrots and sweet potatoes", "Eggs occasionally"],
      training: "At least 1–2 hours daily: walks, running, fetch. Swimming and play sessions. Mental exercises (training, puzzle toys)",
      grooming: "Brush coat 2–3 times per week. Bathe every 4–6 weeks. Clean ears weekly. Brush teeth 2–3 times/week",
      phobias: ["Fireworks or thunderstorms", "Being left alone"],
      allergies: ["Dairy", "Chicken"],
      medicines: ["Monthly flea & tick prevention", "Heartworm prevention", "Vaccinations per vet schedule"],
      healthTips: "Monitor for hip dysplasia or elbow problems. Maintain a healthy weight. Regular vet checkups"
    },
    senior: {
      overview: "Senior Golden Retrievers are calmer, affectionate, and require extra care for joints, weight, and overall health.",
      physicalTraits: "Weight may slightly decrease. Slower movement; joint stiffness may appear. Graying muzzle; eyes may become cloudy",
      diet: "Low-fat, high-fiber diet. Joint-support supplements (glucosamine, chondroitin). Feed 2 smaller meals daily.",
      food: ["Low-fat kibble (fish or chicken)", "Cooked vegetables", "Soft rice", "Fish oil for coat health"],
      training: "Short, gentle walks daily. Light play sessions. Swimming (low-impact for joints). Avoid stairs and jumping",
      grooming: "Brush weekly. Bathe monthly. Keep nails short. Regular vet checkups every 6 months",
      phobias: ["Thunderstorms", "Fireworks", "Loud, unfamiliar noises", "Separation anxiety"],
      allergies: ["Dairy", "Chicken"],
      medicines: ["Joint supplements", "Heartworm, flea, and tick preventives", "Pain relievers if prescribed", "Dental cleaning"],
      healthTips: "Monitor for arthritis, heart problems, or cataracts. Keep weight stable. Provide soft bedding and easy access to water"
    },
    lifeSpan: "10-12 years"
  },
  "Poodle": {
    puppy: {
      overview: "Poodle puppies are intelligent, active, and playful. Early socialization and mental stimulation are essential for their development.",
      physicalTraits: "Weight: 2–8 kg (Toy), 7–20 kg (Miniature), 20–32 kg (Standard) depending on type. Soft, curly coat; shedding is minimal but requires grooming. Rapid growth of muscles and bones. Teething phase; provide chew toys",
      diet: "High-protein puppy food for growth and brain development. Feed 3–4 small meals daily. Include calcium and DHA for bone and cognitive health.",
      food: ["Puppy kibble (grain-free chicken or lamb)", "Rice and boiled egg", "Carrots as treats"],
      training: "Start basic commands (sit, stay, come) early. Socialize with people, other dogs, and environments. Short positive reinforcement sessions (5–10 minutes)",
      grooming: "Brush coat daily to prevent mats. Bathe once a month. Begin dental care and nail trimming",
      phobias: ["Loud noises (vacuum, fireworks, thunderstorms)", "Being left alone"],
      allergies: ["Wheat", "Chicken", "Dairy"],
      medicines: ["Puppy vaccinations (6–16 weeks)", "Flea & tick prevention", "Deworming every 2–3 weeks"],
      healthTips: "Avoid excessive jumping until bones strengthen. Regular vet checkups"
    },
    adult: {
      overview: "Adult Poodles are intelligent, energetic, and highly trainable. They require daily mental and physical activity to prevent boredom.",
      physicalTraits: "Weight depends on type: Toy: 2–4 kg, Miniature: 7–10 kg, Standard: 20–32 kg. Muscular and agile body. Dense curly coat requiring regular grooming",
      diet: "Balanced diet: high-quality kibble with meat, grains, and vegetables. Feed 2 meals per day. Avoid overfeeding; monitor weight.",
      food: ["High-protein kibble", "Fish and rice", "Vegetables", "Occasional apple or sweet potato"],
      training: "1–2 hours daily: walks, play, training sessions. Mental stimulation: obedience, tricks, puzzle toys",
      grooming: "Brush coat daily or every other day. Bathe every 4–6 weeks. Clean ears weekly. Brush teeth 2–3 times/week",
      phobias: ["Loud noises (fireworks, storms)", "Being left alone"],
      allergies: ["Wheat", "Chicken", "Dairy"],
      medicines: ["Monthly flea & tick prevention", "Heartworm prevention", "Vaccinations per vet schedule", "Optional joint supplements"],
      healthTips: "Monitor hip and joint health (Standard Poodles prone to dysplasia). Regular exercise and mental stimulation. Maintain a healthy weight"
    },
    senior: {
      overview: "Senior Poodles are calmer but still intelligent and affectionate. They require extra care for joints, weight, and overall health.",
      physicalTraits: "Slight weight loss possible. Slower movement; joint stiffness may appear. Graying muzzle and eyes may become cloudy",
      diet: "Low-fat, high-fiber diet. Joint-support supplements (glucosamine, chondroitin). Feed 2 smaller meals daily.",
      food: ["Soft senior kibble", "Boiled vegetables", "Lean chicken", "Omega-3 supplements"],
      training: "Gentle daily walks. Light play sessions. Avoid stairs and jumping",
      grooming: "Brush coat daily to prevent mats. Bathe monthly. Keep nails short. Regular vet checkups every 6 months",
      phobias: ["Thunderstorms", "Loud noises", "Separation anxiety"],
      allergies: ["Wheat", "Chicken", "Dairy"],
      medicines: ["Joint supplements", "Heartworm, flea, and tick preventives", "Pain relievers if prescribed", "Dental cleaning"],
      healthTips: "Monitor for arthritis or heart problems. Maintain weight. Provide soft bedding and easy access to water"
    },
    lifeSpan: "10-18 years"
  },
  "Bulldog": {
    puppy: {
      overview: "Bulldog puppies are charming, affectionate, and a bit stubborn. Early socialization, gentle training, and monitoring growth are important due to their unique body structure.",
      physicalTraits: "Weight: 3–10 kg depending on size (Miniature or English Bulldog). Short, smooth coat. Flat face (brachycephalic) — watch for breathing difficulties. Rapid but careful growth; avoid excessive exercise",
      diet: "High-quality puppy food with protein for muscle growth. Feed 3–4 small meals daily. Avoid overfeeding; prone to obesity.",
      food: ["Puppy kibble (chicken/lamb)", "Soft vegetables", "Boiled egg", "Avoid overfeeding"],
      training: "Start basic commands early (sit, stay, come). Gentle, consistent, positive reinforcement. Socialize with other pets and humans",
      grooming: "Brush coat 1–2 times per week. Bathe monthly. Begin dental hygiene and nail trimming",
      phobias: ["Loud noises (fireworks, vacuum)", "Strangers"],
      allergies: ["Wheat", "Chicken", "Dairy"],
      medicines: ["Puppy vaccinations (6–16 weeks)", "Flea & tick prevention", "Deworming every 2–3 weeks"],
      healthTips: "Avoid stairs and jumping to protect joints. Monitor breathing due to brachycephalic structure. Regular vet checkups"
    },
    adult: {
      overview: "Adult Bulldogs are calm, loyal, and affectionate. They are not highly active but need moderate exercise and careful diet management.",
      physicalTraits: "Weight: 18–25 kg (English Bulldog). Height: 12–16 inches. Muscular, stocky body. Flat face, short muzzle — may snore and snort",
      diet: "Balanced diet with high-quality kibble. 2 meals per day. Avoid overfeeding; prone to obesity.",
      food: ["Balanced kibble", "Lean meat with rice", "Soft treats", "Vegetables occasionally"],
      training: "Short daily walks (20–30 minutes). Light play; avoid overheating. Mental stimulation (simple training, toys)",
      grooming: "Brush coat weekly. Bathe every 4–6 weeks. Clean facial folds daily to prevent infections. Brush teeth 2–3 times/week",
      phobias: ["Loud noises (fireworks, storms)", "Being left alone"],
      allergies: ["Wheat", "Chicken", "Dairy"],
      medicines: ["Flea & tick prevention monthly", "Heartworm prevention", "Vaccinations per vet schedule"],
      healthTips: "Monitor weight and diet carefully. Watch for breathing issues. Regular vet checkups"
    },
    senior: {
      overview: "Senior Bulldogs are calm and affectionate but require extra care for joints, breathing, and weight.",
      physicalTraits: "Weight may slightly decrease or increase depending on diet. Slower movement; joint stiffness possible. Flat face increases risk of breathing difficulties.",
      diet: "Low-fat, high-fiber diet. Feed 2 smaller meals daily. Avoid overfeeding; maintain weight.",
      food: ["Low-fat kibble", "Soft rice and boiled vegetables", "Omega-3 for joints"],
      training: "Short, gentle walks daily. Avoid stairs and high-impact activity. Light play sessions.",
      grooming: "Brush coat weekly. Bathe monthly. Clean facial folds and nails regularly. Regular vet checkups every 6 months.",
      phobias: ["Loud noises", "Separation anxiety", "Storms"],
      allergies: ["Wheat", "Chicken", "Dairy"],
      medicines: ["Joint supplements", "Heartworm, flea, and tick preventives", "Pain relievers if prescribed", "Dental care"],
      healthTips: "Monitor breathing and heart health. Maintain healthy weight. Provide soft bedding and easy access to water."
    },
    lifeSpan: "8-10 years"
  },
  "Pomeranian": {
    puppy: {
      overview: "Pomeranian puppies are tiny, fluffy, and energetic. Early socialization, gentle training, and mental stimulation are crucial.",
      physicalTraits: "Weight: 1–3 kg. Height: 7–12 inches. Fluffy double coat; requires regular grooming. Teething phase; provide soft chew toys",
      diet: "High-quality puppy food with protein for growth. Feed 3–4 small meals daily. Include DHA for brain development.",
      food: ["Small-breed puppy kibble", "Boiled egg", "Rice and vegetables", "Apple as treat"],
      training: "Start basic commands (sit, stay, come) early. Socialize with people and other pets. Short positive reinforcement sessions (5–10 minutes)",
      grooming: "Brush coat daily to prevent mats. Bathe once a month. Begin dental care and nail trimming",
      phobias: ["Loud noises (fireworks, vacuum)", "Being left alone"],
      allergies: ["Wheat", "Chicken", "Dairy"],
      medicines: ["Puppy vaccinations (6–16 weeks)", "Flea & tick prevention", "Deworming every 2–3 weeks"],
      healthTips: "Avoid stairs and jumping. Regular vet checkups"
    },
    adult: {
      overview: "Adult Pomeranians are lively, intelligent, and affectionate. They need daily mental stimulation and moderate physical activity.",
      physicalTraits: "Weight: 1.5–3 kg. Height: 7–12 inches. Fluffy double coat; high maintenance for grooming",
      diet: "Balanced diet with high-quality kibble. Feed 2 meals per day. Avoid overfeeding; prone to obesity.",
      food: ["High-protein kibble", "Chicken and rice", "Boiled vegetables", "Small fruit bits"],
      training: "30–60 minutes daily: walks, play, and mental games. Puzzle toys and training sessions for stimulation",
      grooming: "Brush coat daily to prevent mats. Bathe every 4–6 weeks. Clean ears weekly. Brush teeth 2–3 times/week",
      phobias: ["Loud noises (fireworks, thunderstorms)", "Being left alone"],
      allergies: ["Wheat", "Chicken", "Dairy"],
      medicines: ["Monthly flea & tick prevention", "Heartworm prevention", "Vaccinations per vet schedule"],
      healthTips: "Monitor teeth and coat health. Maintain healthy weight. Regular vet checkups"
    },
    senior: {
      overview: "Senior Pomeranians are calmer and affectionate but need extra care for weight, dental health, and joints.",
      physicalTraits: "Slight weight changes. Slower movement; some stiffness. Coat may thin; dental issues may appear",
      diet: "Low-fat, high-fiber diet. Feed 2 smaller meals daily. Include supplements for coat, joints, and overall health.",
      food: ["Soft senior kibble", "Cooked vegetables", "Lean meat", "Easy-to-chew rice meal"],
      training: "Gentle walks daily. Short play sessions. Avoid high-impact activity",
      grooming: "Brush coat daily. Bathe monthly. Keep nails short. Regular vet checkups every 6 months",
      phobias: ["Loud noises", "Separation anxiety", "Storms"],
      allergies: ["Wheat", "Chicken", "Dairy"],
      medicines: ["Joint supplements", "Heartworm, flea, and tick preventives", "Pain relievers if prescribed", "Dental cleaning"],
      healthTips: "Monitor teeth, coat, and joint health. Maintain healthy weight. Provide soft bedding and easy access to water"
    },
    lifeSpan: "12-16 years"
  },
 "Beagle": {
  puppy: {
    overview: "Beagle puppies are playful, curious, and friendly. Early socialization and training are important to manage their energy and strong scent-driven instincts.",
    physicalTraits: "Weight: 5–8 kg. Height: 10–14 inches. Short coat, floppy ears. Muscular but compact body; rapid growth, avoid excessive jumping.",
          diet: "High-quality puppy food rich in protein and DHA. Feed 3–4 small meals daily.",    food: ["Puppy kibble (chicken/lamb)", "Rice", "Boiled egg", "Carrots and apples"],
    training: "Start basic obedience commands early (sit, stay, come). Positive reinforcement. Socialize with humans and other pets.",
    grooming: "Brush coat 1–2 times/week. Bathe monthly. Begin dental hygiene and nail trimming.",
    phobias: ["Loud noises (fireworks, thunderstorms)", "Being left alone"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Puppy vaccinations (6–16 weeks)", "Flea & tick prevention", "Deworming every 2–3 weeks"],
    healthTips: "Monitor growth and weight. Protect joints from high-impact activity. Regular vet checkups."
  },
  adult: {
    overview: "Adult Beagles are friendly, intelligent, and energetic. Require daily exercise and mental stimulation.",
    physicalTraits: "Weight: 10–14 kg. Height: 13–15 inches. Compact, muscular body. Short coat, moderate shedding.",
          diet: "Balanced diet with high-quality kibble, meat, and vegetables. Feed 2 meals per day.",    food: ["Adult kibble (chicken or fish)", "Lean meat and rice", "Vegetables", "Fruits occasionally"],
    training: "1–2 hours daily: walks, play, scent games, and mental training.",
    grooming: "Brush coat 1–2 times/week. Bathe every 4–6 weeks. Clean ears weekly. Brush teeth 2–3 times/week.",
    phobias: ["Loud noises", "Being left alone"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Flea & tick prevention monthly", "Heartworm prevention", "Vaccinations per vet schedule"],
    healthTips: "Maintain healthy weight. Prevent ear infections. Regular vet checkups."
  },
  senior: {
    overview: "Senior Beagles are calmer but still affectionate and curious. Require care for joints, weight, and dental health.",
    physicalTraits: "Weight may slightly decrease. Slower movement. Coat may thin. Signs of dental wear may appear.",
    diet: "Low-fat, high-fiber diet. Feed 2 smaller meals daily. Include joint supplements.",
    food: ["Low-calorie kibble", "Soft rice and vegetables", "Boiled fish", "Omega-rich diet"],
    training: "Gentle walks and light play daily. Avoid high-impact activity.",
    grooming: "Brush coat 1–2 times/week. Bathe monthly. Keep nails short. Regular dental care and vet checkups.",
    phobias: ["Loud noises", "Separation anxiety", "Storms"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Joint supplements", "Heartworm, flea, and tick preventives", "Pain relievers if prescribed", "Dental care"],
    healthTips: "Monitor weight, joints, and dental health. Provide soft bedding and safe spaces."
  },
  lifeSpan: "12–15 years"
},
"Dachshund": {
  puppy: {
    overview: "Dachshund puppies are curious, playful, and affectionate. Early training, socialization, and careful handling of their long spine are essential.",
    physicalTraits: "Weight: 2–4 kg (miniature), 5–6 kg (standard). Height: 5–10 inches. Long body, short legs. Rapid growth; avoid jumping and stairs to protect spine.",
          diet: "High-quality puppy food with protein for growth and muscle development. Feed 3–4 small meals daily.",    food: ["Small-breed kibble (chicken/turkey)", "Rice", "Vegetables", "Boiled egg"],
    training: "Start basic commands early (sit, stay, come). Socialize with humans and other pets. Use positive reinforcement.",
    grooming: "Brush coat 1–2 times/week. Bathe monthly. Begin dental care and nail trimming.",
    phobias: ["Loud noises (fireworks, thunderstorms)", "Being left alone"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Puppy vaccinations (6–16 weeks)", "Flea & tick prevention", "Deworming every 2–3 weeks"],
    healthTips: "Protect spine by avoiding stairs and high jumps. Monitor growth and weight. Regular vet checkups."
  },
  adult: {
    overview: "Adult Dachshunds are loyal, playful, and intelligent. Require daily exercise, mental stimulation, and careful handling to prevent back issues.",
    physicalTraits: "Weight: 4–6 kg (miniature), 7–10 kg (standard). Height: 5–10 inches. Long body, short legs. Moderate shedding.",
          diet: "Balanced diet with high-quality kibble, protein, and vegetables. Feed 2 meals per day.",    food: ["Lean meat and rice", "Brown rice with veggies", "Soft kibble", "Occasional treats"],
    training: "30–60 minutes daily: walks, play, and mental stimulation. Avoid high-impact activity.",
    grooming: "Brush coat 1–2 times/week. Bathe every 4–6 weeks. Clean teeth 2–3 times/week. Trim nails as needed.",
    phobias: ["Loud noises", "Being left alone"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Flea & tick prevention monthly", "Heartworm prevention", "Vaccinations per vet schedule"],
    healthTips: "Monitor weight to reduce spine strain. Regular vet checkups. Provide safe exercise routines."
  },
  senior: {
    overview: "Senior Dachshunds are calmer but still affectionate. Require extra care for spine, joints, and weight management.",
    physicalTraits: "Weight may slightly decrease. Slower movement. Spine and joints may show stiffness. Coat may thin with age.",
    diet: "Low-fat, high-fiber diet. Feed 2 smaller meals daily. Include joint supplements",
    food: ["Soft low-fat kibble", "Cooked chicken and vegetables", "Omega supplements"],
    training: "Gentle walks and light play daily. Avoid stairs and high-impact activity.",
    grooming: "Brush coat 1–2 times/week. Bathe monthly. Keep nails short. Dental care and vet checkups every 6 months.",
    phobias: ["Loud noises", "Separation anxiety", "Storms"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Joint supplements", "Heartworm, flea, and tick preventives", "Pain relievers if prescribed", "Dental care"],
    healthTips: "Monitor spine health, joints, and weight. Provide soft bedding and safe areas."
  },
  lifeSpan: "12–16 years"
},
"Rottweiler": {
  puppy: {
    overview: "Rottweiler puppies are strong, confident, and affectionate. Early socialization, training, and monitoring growth are crucial due to their rapid development.",
    physicalTraits: "Weight: 9–15 kg. Height: 22–27 inches. Rapid growth; requires careful diet and exercise management to prevent joint problems.",
      diet: "High-quality puppy food rich in protein and DHA. Feed 3–4 small meals daily.",
    food: ["Puppy kibble (beef/chicken)", "Boiled chicken and rice", "Sweet potatoes", "Fish oil"],
    training: "Start obedience training early (sit, stay, come). Socialize with humans and other pets. Positive reinforcement only.",
    grooming: "Brush coat 2–3 times/week. Bathe monthly. Begin dental care and nail trimming.",
    phobias: ["Loud noises (fireworks, thunderstorms)", "Being left alone"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Puppy vaccinations (6–16 weeks)", "Flea & tick prevention", "Deworming every 2–3 weeks"],
    healthTips: "Monitor growth and joints. Avoid excessive high-impact activity. Regular vet checkups."
  },
  adult: {
    overview: "Adult Rottweilers are confident, loyal, and protective. Require daily exercise, mental stimulation, and ongoing training.",
    physicalTraits: "Weight: 35–50 kg. Height: 22–27 inches. Muscular, strong body. Short coat; moderate shedding.",
    diet: "Balanced diet with high-quality kibble, meat, and vegetables. Feed 2 meals per day.",
    food: ["High-protein kibble", "Meat with rice", "Vegetables", "Eggs occasionally"],
    training: "1–2 hours daily: walks, play, and mental stimulation. Avoid overexertion.",
    grooming: "Brush coat 2–3 times/week. Bathe every 4–6 weeks. Clean teeth 2–3 times/week. Trim nails as needed.",
    phobias: ["Loud noises", "Being left alone"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Flea & tick prevention monthly", "Heartworm prevention", "Vaccinations per vet schedule"],
    healthTips: "Maintain healthy weight. Monitor joints and hips. Regular vet checkups."
  },
  senior: {
    overview: "Senior Rottweilers are calmer but still protective and affectionate. Require care for joints, heart, and weight.",
    physicalTraits: "Weight may decrease. Slower movement and potential joint stiffness. Graying around the muzzle.",
      diet: "Low-fat, high-fiber diet. Feed 2 smaller meals daily. Include joint and heart supplements.",
    food: ["Low-fat kibble", "Soft chicken and vegetables", "Rice", "Omega and joint supplements"],
    training: "Gentle walks and light play daily. Avoid high-impact activity.",
    grooming: "Brush coat 2–3 times/week. Bathe monthly. Keep nails short. Dental care and regular vet checkups.",
    phobias: ["Loud noises", "Separation anxiety", "Storms"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Joint supplements", "Heartworm, flea, and tick preventives", "Pain relievers if prescribed", "Dental care"],
    healthTips: "Monitor joints, heart, and weight. Provide soft bedding and easy access to water."
  },
  lifeSpan: "8–10 years"
},
"Doberman Pinscher": {
  puppy: {
    overview: "Doberman puppies are intelligent, energetic, and loyal. Early socialization and obedience training are essential to shape their temperament.",
    physicalTraits: "Weight: 8–15 kg. Height: 18–24 inches. Sleek, muscular body. Rapid growth; avoid excessive jumping and rough play.",
          diet: "High-quality puppy food rich in protein and DHA. Feed 3–4 small meals daily.",    food: ["Puppy kibble (chicken/lamb)", "Boiled egg", "Rice and veggies", "Fish oil"],
    training: "Start obedience commands early (sit, stay, come). Socialize with humans and other pets. Use positive reinforcement.",
    grooming: "Brush coat 1–2 times/week. Bathe monthly. Begin dental hygiene and nail trimming.",
    phobias: ["Loud noises (fireworks, thunderstorms)", "Being left alone"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Puppy vaccinations (6–16 weeks)", "Flea & tick prevention", "Deworming every 2–3 weeks"],
    healthTips: "Monitor growth and joints. Avoid high-impact activity. Regular vet checkups."
  },
  adult: {
    overview: "Adult Dobermans are alert, loyal, and protective. Require daily exercise, mental stimulation, and ongoing training.",
    physicalTraits: "Weight: 32–45 kg. Height: 24–28 inches. Sleek, muscular, and powerful body with a short, smooth coat.",
      diet: "Balanced diet with high-quality kibble, meat, and vegetables. Feed 2 meals per day.",
    food: ["Lean meat with rice", "Vegetables", "High-protein kibble", "Occasional treats"],
    training: "1–2 hours daily: walks, running, play, and mental stimulation.",
    grooming: "Brush coat 1–2 times/week. Bathe every 4–6 weeks. Brush teeth 2–3 times/week. Trim nails as needed.",
    phobias: ["Loud noises", "Being left alone"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Flea & tick prevention monthly", "Heartworm prevention", "Vaccinations per vet schedule"],
    healthTips: "Maintain healthy weight. Monitor joints and heart health. Regular vet checkups."
  },
  senior: {
    overview: "Senior Dobermans are calmer but still alert and protective. Require care for joints, heart, and weight.",
    physicalTraits: "Weight may slightly decrease. Slower movement; joint stiffness possible. Coat may thin with age.",
    diet: "Low-fat, high-fiber diet. Feed 2 smaller meals daily. Include joint and heart supplements.",
    food: ["Soft senior kibble", "Boiled vegetables and rice", "Chicken or fish", "Omega supplements"],
    training: "Gentle walks and light play daily. Avoid high-impact activity.",
    grooming: "Brush coat 1–2 times/week. Bathe monthly. Keep nails short. Dental care and regular vet checkups.",
    phobias: ["Loud noises", "Separation anxiety", "Storms"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Joint supplements", "Heartworm, flea, and tick preventives", "Pain relievers if prescribed", "Dental care"],
    healthTips: "Monitor joints, heart, and weight. Provide soft bedding and easy access to water."
  },
  lifeSpan: "10–13 years"
},
"Boxer": {
  puppy: {
    overview: "Boxer puppies are playful, energetic, and affectionate. Early socialization, training, and careful monitoring of growth are important due to their rapid development.",
    physicalTraits: "Weight: 10–18 kg. Height: 12–16 inches. Muscular, sturdy body. Short coat; rapid growth requires careful exercise to protect joints.",
          diet: "High-quality puppy food rich in protein and DHA. Feed 3–4 small meals daily.",    food: ["Puppy kibble (chicken/beef)", "Brown rice", "Carrots", "Egg occasionally"],
    training: "Start obedience commands early (sit, stay, come). Socialize with humans and other pets. Positive reinforcement training.",
    grooming: "Brush coat 1–2 times/week. Bathe monthly. Begin dental care and nail trimming.",
    phobias: ["Loud noises (fireworks, thunderstorms)", "Being left alone"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Puppy vaccinations (6–16 weeks)", "Flea & tick prevention", "Deworming every 2–3 weeks"],
    healthTips: "Monitor growth and joints. Avoid excessive high-impact activity. Regular vet checkups."
  },
  adult: {
    overview: "Adult Boxers are loyal, playful, and energetic. Require daily exercise, mental stimulation, and consistent training.",
    physicalTraits: "Weight: 25–32 kg. Height: 21–25 inches. Muscular, strong body. Short coat; moderate shedding.",
          diet: "Balanced diet with high-quality kibble, meat, and vegetables. Feed 2 meals per day.",    food: ["High-protein kibble", "Lean meat with rice", "Vegetables", "Oats for fiber"],
    training: "1–2 hours daily: walks, play, and mental stimulation.",
    grooming: "Brush coat 1–2 times/week. Bathe every 4–6 weeks. Brush teeth 2–3 times/week. Trim nails as needed.",
    phobias: ["Loud noises", "Being left alone"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Flea & tick prevention monthly", "Heartworm prevention", "Vaccinations per vet schedule"],
    healthTips: "Maintain healthy weight. Monitor joints and heart health. Regular vet checkups."
  },
  senior: {
    overview: "Senior Boxers are calmer but still affectionate and alert. Require care for joints, heart, and weight management.",
    physicalTraits: "Weight may decrease. Slower movement and potential joint stiffness. Graying around the muzzle and face.",
    physicalTraits: "Weight may slightly decrease. Slower movement; joint stiffness possible. Coat may thin with age.",
          diet: "Low-fat, high-fiber diet. Feed 2 smaller meals daily. Include joint and heart supplements.",    food: ["Low-fat kibble", "Cooked rice and vegetables", "Soft meals", "Joint supplements"],
    training: "Gentle walks and light play daily. Avoid high-impact activity.",
    grooming: "Brush coat 1–2 times/week. Bathe monthly. Keep nails short. Dental care and regular vet checkups.",
    phobias: ["Loud noises", "Separation anxiety", "Storms"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Joint supplements", "Heartworm, flea, and tick preventives", "Pain relievers if prescribed", "Dental care"],
    healthTips: "Monitor joints, heart, and weight. Provide soft bedding and easy access to water."
  },
  lifeSpan: "10–12 years"
},
"Indian Spitz": {
  puppy: {
    overview: "Indian Spitz puppies are lively, affectionate, and intelligent. Early socialization and training help develop a well-behaved adult dog.",
    physicalTraits: "Weight: 3–5 kg. Height: 9–12 inches. Small, fluffy body with a thick double coat. Rapid growth; avoid overexertion.",
    diet: "High-quality puppy food with protein and DHA. Feed 3–4 small meals daily.",
    food: ["Puppy kibble", "Boiled chicken and rice", "Vegetables", "Egg occasionally"],
    training: "Start obedience commands early (sit, stay, come). Socialize with humans and other pets. Positive reinforcement only.",
    grooming: "Brush coat daily to prevent mats. Bathe monthly. Begin dental hygiene and nail trimming.",
    phobias: ["Loud noises (fireworks, vacuum)", "Being left alone"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Puppy vaccinations (6–16 weeks)", "Flea & tick prevention", "Deworming every 2–3 weeks"],
    healthTips: "Handle gently. Monitor growth and weight. Regular vet checkups."
  },
  adult: {
      overview: "Adult Indian Spitz are lively, intelligent, and adaptable. They are known for their friendly nature and require moderate exercise.",
      physicalTraits: "Weight: 5–7 kg. Height: 12–15 inches. Small, compact body with a white, fluffy double coat.",
      diet: "Balanced diet with high-quality kibble, small amounts of meat and vegetables. Feed 2 meals per day.",
    food: ["Chicken and rice", "Small-breed kibble", "Carrot and beans", "Fish occasionally"],
    training: "30–60 minutes daily: walks, indoor play, and mental games.",
    grooming: "Brush coat daily. Bathe every 4–6 weeks. Clean teeth 2–3 times/week. Trim nails as needed.",
    phobias: ["Loud noises (fireworks, storms)", "Being left alone"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Flea & tick prevention monthly", "Heartworm prevention", "Vaccinations per vet schedule"],
    healthTips: "Maintain healthy weight. Prevent mats and tangles. Regular vet checkups."
  },
  senior: {
          overview: "Senior Indian Spitz are calmer and require less exercise. They need regular health checkups and a diet that supports aging.",
          physicalTraits: "Weight may fluctuate. Coat may become thinner. Reduced mobility and potential for age-related health issues.",
          diet: "Low-fat, high-fiber diet. Feed 2 smaller meals daily. Include joint and coat supplements.",    food: ["Soft senior kibble", "Cooked vegetables", "Rice and lean chicken"],
    training: "Gentle walks and light play daily. Avoid high-impact activity.",
    grooming: "Brush coat daily. Bathe monthly. Keep nails short. Dental care and regular vet checkups.",
    phobias: ["Loud noises", "Separation anxiety", "Storms"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Joint supplements", "Heartworm, flea, and tick preventives", "Pain relievers if prescribed", "Dental care"],
    healthTips: "Monitor weight, coat, and joints. Provide soft bedding and safe spaces."
  },
  lifeSpan: "12–16 years"
},
"Shih Tzu": {
  puppy: {
    overview: "Shih Tzu puppies are affectionate, playful, and friendly. Early socialization and gentle training are important to develop a well-behaved adult dog.",
    physicalTraits: "Weight: 2–4 kg. Height: 8–11 inches. Small, sturdy body with a long, flowing coat. Rapid growth; handle gently.",
          diet: "High-quality puppy food with protein and DHA. Feed 3–4 small meals daily.",    food: ["Puppy kibble (chicken/lamb)", "Boiled vegetables", "Rice", "Small apple pieces"],
    training: "Start basic obedience commands early (sit, stay, come). Socialize with humans and other pets. Positive reinforcement only.",
    grooming: "Brush coat daily to prevent mats. Bathe monthly. Begin dental hygiene and nail trimming.",
    phobias: ["Loud noises (fireworks, vacuum)", "Being left alone"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Puppy vaccinations (6–16 weeks)", "Flea & tick prevention", "Deworming every 2–3 weeks"],
    healthTips: "Handle gently. Monitor growth and weight. Regular vet checkups."
  },
  adult: {
    overview: "Adult Shih Tzus are calm, affectionate, and playful. Require daily grooming, moderate exercise, and mental stimulation.",
    physicalTraits: "Weight: 4–7 kg. Height: 9–11 inches. Long, flowing coat requires regular maintenance.",
          diet: "Balanced diet with high-quality kibble, small amounts of meat and vegetables. Feed 2 meals per day.",    food: ["Small-breed kibble", "Chicken and rice", "Boiled fish", "Carrots or apples"],
    training: "30–60 minutes daily: short walks and indoor play.",
    grooming: "Brush coat daily. Bathe every 4–6 weeks. Clean teeth 2–3 times/week. Trim nails regularly.",
    phobias: ["Loud noises (fireworks, storms)", "Being left alone"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Flea & tick prevention monthly", "Heartworm prevention", "Vaccinations per vet schedule"],
    healthTips: "Maintain healthy weight. Prevent mats and tangles. Regular vet checkups."
  },
  senior: {
    overview: "Senior Shih Tzus are calmer but still affectionate. Require extra care for coat, teeth, and joint health.",
    physicalTraits: "Weight may slightly decrease. Slower movement. Coat may thin with age.",
          diet: "Low-fat, high-fiber diet. Feed 2 smaller meals daily. Include joint and coat supplements.",    food: ["Soft senior kibble", "Rice and boiled veggies", "Fish oil supplements"],
    training: "Gentle walks and light play daily. Avoid high-impact activity.",
    grooming: "Brush coat daily. Bathe monthly. Keep nails short. Dental care and regular vet checkups.",
    phobias: ["Loud noises", "Separation anxiety", "Storms"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Joint supplements", "Heartworm, flea, and tick preventives", "Pain relievers if prescribed", "Dental care"],
    healthTips: "Monitor weight, coat, and joints. Provide soft bedding and safe spaces."
  },
  lifeSpan: "10–16 years"
},
"Cocker Spaniel": {
  puppy: {
    overview: "Cocker Spaniel puppies are affectionate, playful, and friendly. Early socialization and training are important to develop a well-behaved adult dog.",
    physicalTraits: "Weight: 5–7 kg. Height: 10–14 inches. Compact, muscular body with long, wavy coat. Rapid growth; handle gently.",
          diet: "High-quality puppy food with protein and DHA. Feed 3–4 small meals daily.",    food: ["Puppy kibble (chicken/fish)", "Rice", "Vegetables", "Small fruits"],
    training: "Start basic obedience commands early (sit, stay, come). Socialize with humans and other pets. Positive reinforcement only.",
    grooming: "Brush coat 2–3 times/week. Bathe monthly. Begin dental hygiene and nail trimming.",
    phobias: ["Loud noises (fireworks, thunderstorms)", "Being left alone"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Puppy vaccinations (6–16 weeks)", "Flea & tick prevention", "Deworming every 2–3 weeks"],
    healthTips: "Monitor growth and weight. Regular vet checkups. Maintain coat to prevent mats."
  },
  adult: {
    overview: "Adult Cocker Spaniels are friendly, intelligent, and affectionate. Require daily exercise, grooming, and mental stimulation.",
    physicalTraits: "Weight: 12–15 kg. Height: 13–15 inches. Muscular body with long, wavy coat; moderate shedding.",
          diet: "Balanced diet with high-quality kibble, meat, and vegetables. Feed 2 meals per day.",    food: ["Lean chicken and rice", "Sweet potatoes", "Oats", "Fish occasionally"],
    training: "1–2 hours daily: walks, play, and mental stimulation.",
    grooming: "Brush coat 2–3 times/week. Bathe every 4–6 weeks. Clean ears weekly. Brush teeth 2–3 times/week. Trim nails as needed.",
    phobias: ["Loud noises", "Being left alone"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Flea & tick prevention monthly", "Heartworm prevention", "Vaccinations per vet schedule"],
    healthTips: "Maintain healthy weight. Prevent ear infections. Regular vet checkups."
  },
  senior: {
    overview: "Senior Cocker Spaniels are calmer but still affectionate. Require extra care for joints, weight, ears, and coat.",
    physicalTraits: "Weight may slightly decrease. Slower movement. Coat may thin. Joint stiffness may appear.",
          diet: "Low-fat, high-fiber diet. Feed 2 smaller meals daily. Include joint supplements.",    food: ["Soft senior kibble", "Cooked vegetables", "Rice", "Omega and joint supplements"],
    training: "Gentle walks and light play daily. Avoid high-impact activity.",
    grooming: "Brush coat 2–3 times/week. Bathe monthly. Keep nails short. Clean ears regularly. Dental care and vet checkups.",
    phobias: ["Loud noises", "Separation anxiety", "Storms"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Joint supplements", "Heartworm, flea, and tick preventives", "Pain relievers if prescribed", "Dental care"],
    healthTips: "Monitor joints, weight, ears, and coat. Provide soft bedding and safe spaces."
  },
  lifeSpan: "12–15 years"
},
"Pug": {
  puppy: {
    overview: "Pug puppies are charming, affectionate, and playful. Early socialization, gentle training, and monitoring growth are important due to their brachycephalic structure.",
    physicalTraits: "Weight: 3–6 kg. Height: 10–13 inches. Compact, muscular body. Flat face; monitor for breathing issues. Rapid growth; avoid excessive exercise.",
      diet: "High-quality puppy food with protein for muscle growth. Feed 3–4 small meals daily. Avoid overfeeding; prone to obesity.",
    food: ["Puppy kibble (chicken or lamb)", "Rice", "Vegetables", "Egg occasionally"],
    training: "Start basic commands early (sit, stay, come). Gentle, consistent, positive reinforcement. Socialize with other pets and humans.",
    grooming: "Brush coat 1–2 times/week. Bathe monthly. Begin dental hygiene and nail trimming.",
    phobias: ["Loud noises (fireworks, vacuum)", "Strangers"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Puppy vaccinations (6–16 weeks)", "Flea & tick prevention", "Deworming every 2–3 weeks"],
    healthTips: "Avoid stairs and jumping to protect joints. Monitor breathing due to flat face. Regular vet checkups."
  },
  adult: {
    overview: "Adult Pugs are calm, loyal, and affectionate. They are not highly active but need moderate exercise and careful diet management.",
    physicalTraits: "Weight: 6–8 kg. Height: 10–13 inches. Muscular, stocky body. Flat face, short muzzle — may snore and snort.",
          diet: "Balanced diet with high-quality kibble. 2 meals per day. Avoid overfeeding; prone to obesity.",    food: ["Lean meat with rice or vegetables", "Adult kibble", "Soft treats"],
    training: "Short daily walks (20–30 minutes). Light play; avoid overheating. Mental stimulation (simple training, toys).",
    grooming: "Brush coat weekly. Bathe every 4–6 weeks. Clean facial folds daily to prevent infections. Brush teeth 2–3 times/week.",
    phobias: ["Loud noises (fireworks, storms)", "Being left alone"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Flea & tick prevention monthly", "Heartworm prevention", "Vaccinations per vet schedule"],
    healthTips: "Monitor weight and diet carefully. Watch for breathing issues. Regular vet checkups."
  },
  senior: {
    overview: "Senior Pugs are calm and affectionate but require extra care for joints, breathing, and weight.",
    physicalTraits: "Weight may slightly decrease or increase depending on diet. Slower movement; joint stiffness possible. Flat face increases risk of breathing difficulties.",
          diet: "Low-fat, high-fiber diet. Feed 2 smaller meals daily. Avoid overfeeding; maintain weight.",    food: ["Low-fat senior kibble", "Boiled vegetables", "Soft rice", "Omega-3 for joints"],
    training: "Short, gentle walks daily. Avoid stairs and high-impact activity. Light play sessions.",
    grooming: "Brush coat weekly. Bathe monthly. Clean facial folds and nails regularly. Regular vet checkups every 6 months.",
    phobias: ["Loud noises", "Separation anxiety", "Storms"],
    allergies: ["Wheat", "Chicken", "Dairy"],
    medicines: ["Joint supplements", "Heartworm, flea, and tick preventives", "Pain relievers if prescribed", "Dental care"],
    healthTips: "Monitor breathing and heart health. Maintain healthy weight. Provide soft bedding and easy access to water."
  },
  lifeSpan: "12–15 years"
},

};