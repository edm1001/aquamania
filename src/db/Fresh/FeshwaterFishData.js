// FreshwaterFishData.js
// add cichlid, platy, pleco, arrowanna, gar, koi,  catfish, oddballs
const freshwaterFishSpecies = [
  // Tetra
  {
    name: 'Neon Tetra',
    description: 'Neon Tetras are among the most popular tetras due to their striking iridescent blue and red colors.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 1.5 inches (4 cm)',
    img: 'https://as1.ftcdn.net/v2/jpg/04/88/85/40/1000_F_488854015_30rnKc7hKZQpclCkm0rqAH5Fo2MYSADa.jpg',
    size: 'Small',
    species: 'Paracheirodon innesi',
    family: 'Tetra',
    experienceLevel: 'Beginner',
    waterPHRange: '6.0 - 7.0',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  {
    name: 'Cardinal Tetra',
    description: 'Cardinal Tetras are known for their vibrant red and blue colors, similar to Neon Tetras.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 1.5 inches (4 cm)',
    img: 'https://example.com/cardinal-tetra-image.jpg',
    size: 'Small',
    species: 'Paracheirodon axelrodi',
    family: 'Tetra',
    experienceLevel: 'Intermediate',
    waterPHRange: '6.0 - 7.5',
    temperatureRange: '73°F - 81°F (23°C - 27°C)'
  },
  {
    name: 'Ember Tetra',
    description: 'Ember Tetras have a beautiful fiery orange coloration that adds warmth to any aquarium.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 1 inch (2.5 cm)',
    img: 'https://example.com/ember-tetra-image.jpg',
    size: 'Small',
    species: 'Hyphessobrycon amandae',
    family: 'Tetra',
    experienceLevel: 'Beginner',
    waterPHRange: '6.0 - 7.0',
    temperatureRange: '75°F - 82°F (24°C - 28°C)'
  },
  {
    name: 'Black Neon Tetra',
    description: 'Black Neon Tetras feature a combination of black and silver colors, creating a striking appearance.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 1.5 inches (4 cm)',
    img: 'https://example.com/black-neon-tetra-image.jpg',
    size: 'Small',
    species: 'Hyphessobrycon herbertaxelrodi',
    family: 'Tetra',
    experienceLevel: 'Beginner',
    waterPHRange: '6.0 - 7.5',
    temperatureRange: '73°F - 81°F (23°C - 27°C)'
  },
  {
    name: 'Vampire Tetra',
    description: 'Vampire Tetras are known for their iconic sharp teeth and predatory behavior, requiring a larger tank.',
    temperament: 'Aggressive',
    maxGrowthSize: 'Around 14 inches (35 cm)',
    img: 'https://example.com/vampire-tetra-image.jpg',
    size: 'Large',
    species: 'Hydrolycus scomberoides',
    family: 'Tetra',
    experienceLevel: 'Advanced',
    waterPHRange: '5.5 - 7.5',
    temperatureRange: '75°F - 82°F (24°C - 28°C)'
  },
  {
    name: 'Congo Tetra',
    description: 'Congo Tetras are large, peaceful tetras known for their distinctive coloration and fin extensions.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 3 inches (8 cm)',
    img: 'https://example.com/congo-tetra-image.jpg',
    size: 'Medium',
    species: 'Phenacogrammus interruptus',
    family: 'Tetra',
    experienceLevel: 'Intermediate',
    waterPHRange: '6.0 - 7.5',
    temperatureRange: '73°F - 82°F (23°C - 28°C)'
  },
  {
    name: 'Bleeding Heart Tetra',
    description: 'Bleeding Heart Tetras are named for the heart-shaped red marking on their silver bodies.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 2.5 inches (6 cm)',
    img: 'https://example.com/bleeding-heart-tetra-image.jpg',
    size: 'Small',
    species: 'Hyphessobrycon erythrostigma',
    family: 'Tetra',
    experienceLevel: 'Intermediate',
    waterPHRange: '6.0 - 7.0',
    temperatureRange: '74°F - 80°F (23°C - 27°C)'
  },
  {
    name: 'Black Skirt Tetra',
    description: 'Black Skirt Tetras are known for their distinctive black markings on their fins and bodies.',
    temperament: 'Semi-Aggressive',
    maxGrowthSize: 'Around 2 inches (5 cm)',
    img: 'https://example.com/black-skirt-tetra-image.jpg',
    size: 'Small',
    species: 'Gymnocorymbus ternetzi',
    family: 'Tetra',
    experienceLevel: 'Intermediate',
    waterPHRange: '6.0 - 7.5',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  {
    name: 'Serpae Tetra',
    description: 'Serpae Tetras are known for their vibrant red coloration and schooling behavior.',
    temperament: 'Semi-Aggressive',
    maxGrowthSize: 'Around 1.5 inches (4 cm)',
    img: 'https://example.com/serpae-tetra-image.jpg',
    size: 'Small',
    species: 'Hyphessobrycon eques',
    family: 'Tetra',
    experienceLevel: 'Intermediate',
    waterPHRange: '5.5 - 7.5',
    temperatureRange: '72°F - 79°F (22°C - 26°C)'
  },
  {
    name: 'Bloodfin Tetra',
    description: 'Bloodfin Tetras are known for their distinctive red fins, adding a splash of color to aquariums.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 2 inches (5 cm)',
    img: 'https://example.com/bloodfin-tetra-image.jpg',
    size: 'Small',
    species: 'Aphyocharax anisitsi',
    family: 'Tetra',
    experienceLevel: 'Beginner',
    waterPHRange: '6.0 - 7.5',
    temperatureRange: '74°F - 82°F (23°C - 28°C)'
  },
  {
    name: 'Rummynose Tetra',
    description: 'Rummynose Tetras have a distinct red nose, adding a playful and vibrant element to aquariums.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 2 inches (5 cm)',
    img: 'https://example.com/rummynose-tetra-image.jpg',
    size: 'Small',
    species: 'Hemigrammus rhodostomus',
    family: 'Tetra',
    experienceLevel: 'Intermediate',
    waterPHRange: '5.5 - 7.5',
    temperatureRange: '75°F - 81°F (24°C - 27°C)'
  },
  {
    name: 'Emperor Tetra',
    description: 'Emperor Tetras are known for their striking blue and black coloration, adding elegance to aquariums.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 2 inches (5 cm)',
    img: 'https://example.com/emperor-tetra-image.jpg',
    size: 'Small',
    species: 'Nematobrycon palmeri',
    family: 'Tetra',
    experienceLevel: 'Intermediate',
    waterPHRange: '5.5 - 7.5',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  {
    name: 'Von Rio Tetra',
    description: 'Von Rio Tetras are colorful and active, creating a vibrant and lively aquarium environment.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 1.5 inches (4 cm)',
    img: 'https://example.com/von-rio-tetra-image.jpg',
    size: 'Small',
    species: 'Hyphessobrycon flammeus',
    family: 'Tetra',
    experienceLevel: 'Beginner',
    waterPHRange: '6.0 - 7.5',
    temperatureRange: '75°F - 82°F (24°C - 28°C)'
  },

  // Molly Fish
  {
    name: 'Common Black Molly',
    description: 'The Common Black Molly is a popular freshwater fish known for its sleek black coloration.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 3 to 4 inches (7.5 to 10 cm)',
    img: 'https://example.com/common-black-molly-image.jpg',
    size: 'Small',
    species: 'Poecilia sphenops',
    family: 'Molly',
    experienceLevel: 'Beginner',
    waterPHRange: '6.7 - 8.5',
    temperatureRange: '75°F - 82°F (24°C - 28°C)'
  },
  {
    name: 'Dalmatian Molly',
    description: 'Dalmatian Mollies are recognized by their spotted black and white patterns, reminiscent of Dalmatian dogs.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 3 to 4 inches (7.5 to 10 cm)',
    img: 'https://example.com/dalmatian-molly-image.jpg',
    size: 'Small',
    species: 'Poecilia latipinna',
    family: 'Molly',
    experienceLevel: 'Beginner',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  {
    name: 'Lyretail Molly',
    description: 'Lyretail Mollies are known for their distinct lyre-shaped tails, adding elegance to aquariums.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 4 inches (10 cm)',
    img: 'https://example.com/lyretail-molly-image.jpg',
    size: 'Small',
    species: 'Poecilia reticulata',
    family: 'Molly',
    experienceLevel: 'Intermediate',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '75°F - 82°F (24°C - 28°C)'
  },
  {
    name: 'Sailfin Molly',
    description: 'Sailfin Mollies have an impressive sail-like dorsal fin, making them stand out in aquariums.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 4 to 5 inches (10 to 12.5 cm)',
    img: 'https://example.com/sailfin-molly-image.jpg',
    size: 'Medium',
    species: 'Poecilia latipinna',
    family: 'Molly',
    experienceLevel: 'Intermediate',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  {
    name: 'Gold Dust Molly',
    description: 'Gold Dust Mollies feature a sparkling, gold-like dusting on their scales, creating a visually appealing effect.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 3 to 4 inches (7.5 to 10 cm)',
    img: 'https://example.com/gold-dust-molly-image.jpg',
    size: 'Small',
    species: 'Poecilia sphenops',
    family: 'Molly',
    experienceLevel: 'Beginner',
    waterPHRange: '6.7 - 8.5',
    temperatureRange: '75°F - 82°F (24°C - 28°C)'
  },
  {
    name: 'Balloon Molly',
    description: 'Balloon Mollies are characterized by their inflated, balloon-like appearance, especially in the abdominal region.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 3 to 4 inches (7.5 to 10 cm)',
    img: 'https://example.com/balloon-molly-image.jpg',
    size: 'Small',
    species: 'Poecilia sphenops',
    family: 'Molly',
    experienceLevel: 'Beginner',
    waterPHRange: '6.7 - 8.5',
    temperatureRange: '75°F - 82°F (24°C - 28°C)'
  },
  {
    name: 'Sunset Molly',
    description: 'Sunset Mollies exhibit vibrant and warm coloration, resembling the hues of a sunset.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 3 to 4 inches (7.5 to 10 cm)',
    img: 'https://example.com/sunset-molly-image.jpg',
    size: 'Small',
    species: 'Poecilia sphenops',
    family: 'Molly',
    experienceLevel: 'Intermediate',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  {
    name: 'Wild Molly Fish',
    description: 'Wild Mollies showcase the natural and diverse color patterns found in their wild counterparts.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 3 to 4 inches (7.5 to 10 cm)',
    img: 'https://example.com/wild-molly-fish-image.jpg',
    size: 'Small',
    species: 'Various',
    family: 'Molly',
    experienceLevel: 'Intermediate',
    waterPHRange: '6.5 - 8.0',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  // Swordtails
  {
    name: 'Green Swordtail',
    description: 'The Green Swordtail is a vibrant freshwater fish known for its green coloration and distinctive sword-like tail.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 4 inches (10 cm)',
    img: 'https://example.com/green-swordtail-image.jpg',
    size: 'Small',
    species: 'Xiphophorus hellerii',
    family: 'Swordtail',
    experienceLevel: 'Beginner',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '72°F - 82°F (22°C - 28°C)'
  },
  {
    name: 'Yellow Swordtail',
    description: 'The Yellow Swordtail is a brightly colored fish with a distinct sword-like tail, adding vibrancy to aquariums.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 4 inches (10 cm)',
    img: 'https://example.com/yellow-swordtail-image.jpg',
    size: 'Small',
    species: 'Xiphophorus hellerii',
    family: 'Swordtail',
    experienceLevel: 'Beginner',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '72°F - 82°F (22°C - 28°C)'
  },
  {
    name: 'Red Swordtail',
    description: 'The Red Swordtail is a striking fish with vibrant red coloration and a distinctive sword-like tail.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 4 inches (10 cm)',
    img: 'https://example.com/red-swordtail-image.jpg',
    size: 'Small',
    species: 'Xiphophorus hellerii',
    family: 'Swordtail',
    experienceLevel: 'Beginner',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '72°F - 82°F (22°C - 28°C)'
  },
  {
    name: 'Kohaku Swordtail',
    description: 'The Kohaku Swordtail features a beautiful pattern of red and white colors, reminiscent of traditional Japanese aesthetics.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 4 inches (10 cm)',
    img: 'https://example.com/kohaku-swordtail-image.jpg',
    size: 'Small',
    species: 'Xiphophorus hellerii',
    family: 'Swordtail',
    experienceLevel: 'Intermediate',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  {
    name: 'Pygmy Swordtail',
    description: 'The Pygmy Swordtail is a smaller species with a distinct sword-like tail, suitable for smaller aquariums.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 2 inches (5 cm)',
    img: 'https://example.com/pygmy-swordtail-image.jpg',
    size: 'Small',
    species: 'Xiphophorus pygmaeus',
    family: 'Swordtail',
    experienceLevel: 'Intermediate',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  {
    name: 'Mickey Mouse Swordtail',
    description: 'The Mickey Mouse Swordtail is recognized for its unique coloration and markings, resembling Mickey Mouse ears.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 3 inches (7.5 cm)',
    img: 'https://example.com/mickey-mouse-swordtail-image.jpg',
    size: 'Small',
    species: 'Xiphophorus maculatus',
    family: 'Swordtail',
    experienceLevel: 'Beginner',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  // GOLDFISH
  {
    name: "Veiltail Goldfish",
    description: "The Veiltail Goldfish is known for its long, flowing double tail that gives it an elegant appearance.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 6 inches (15 cm)",
    img: "https://example.com/veiltail-goldfish-image.jpg",
    size: "Medium",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Beginner",
    waterPHRange: "6.0 - 8.0",
    temperatureRange: "65°F - 75°F (18°C - 24°C)"
  },
  {
    name: "Common Goldfish",
    description: "The Common Goldfish is the classic goldfish variety with a sleek, streamlined body and vibrant coloration.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 12 inches (30 cm)",
    img: "https://example.com/common-goldfish-image.jpg",
    size: "Large",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Beginner",
    waterPHRange: "6.0 - 8.0",
    temperatureRange: "65°F - 75°F (18°C - 24°C)"
  },
  {
    name: "Tamasaba Goldfish",
    description: "The Tamasaba Goldfish is recognized for its elongated body and distinct forked tail, resembling a traditional Japanese fan.",
    temperament: "Peaceful",
    maxGrowthSize: "Around 10 inches (25 cm)",
    img: "https://example.com/tamasaba-goldfish-image.jpg",
    size: "Large",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.5 - 7.5",
    temperatureRange: "60°F - 75°F (15°C - 24°C)"
  },
  {
    name: "Bubble Eye Goldfish",
    description: "The Bubble Eye Goldfish is characterized by its fluid-filled sacs or bubbles underneath its eyes, creating a distinctive appearance.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 6 inches (15 cm)",
    img: "https://example.com/bubble-eye-goldfish-image.jpg",
    size: "Medium",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.0 - 8.0",
    temperatureRange: "68°F - 74°F (20°C - 23°C)"
  },
  {
    name: "Telescope Goldfish",
    description: "The Telescope Goldfish is known for its protruding, telescope-like eyes, giving it a distinctive and charming appearance.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 8 inches (20 cm)",
    img: "https://example.com/telescope-goldfish-image.jpg",
    size: "Medium",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.5 - 7.5",
    temperatureRange: "68°F - 74°F (20°C - 23°C)"
  },
  {
    name: "Oranda Goldfish",
    description: "The Oranda Goldfish is distinguished by the prominent hood or wen on its head, which can develop into a large, fleshy growth.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 8 inches (20 cm)",
    img: "https://example.com/oranda-goldfish-image.jpg",
    size: "Medium",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.5 - 7.5",
    temperatureRange: "68°F - 74°F (20°C - 23°C)"
  },
  {
    name: "Comet Goldfish",
    description: "The Comet Goldfish is characterized by its long, flowing tail fin and vibrant coloration, resembling a comet streaking through the sky.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 12 inches (30 cm)",
    img: "https://example.com/comet-goldfish-image.jpg",
    size: "Medium to Large",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Beginner",
    waterPHRange: "6.0 - 8.0",
    temperatureRange: "65°F - 75°F (18°C - 24°C)"
  },  
  {
    name: "Lionhead Goldfish",
    description: "The Lionhead Goldfish is known for its lack of a dorsal fin and the development of a raspberry-like growth on the top of its head.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 8 inches (20 cm)",
    img: "https://example.com/lionhead-goldfish-image.jpg",
    size: "Medium",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.5 - 7.5",
    temperatureRange: "68°F - 74°F (20°C - 23°C)"
  },
  {
    name: "Ryukin Goldfish",
    description: "The Ryukin Goldfish has a distinctive hump on its back, a pointed caudal fin, and a deep body, making it a visually striking variety.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 8 inches (20 cm)",
    img: "https://example.com/ryukin-goldfish-image.jpg",
    size: "Medium",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.5 - 7.5",
    temperatureRange: "68°F - 74°F (20°C - 23°C)"
  },
  {
    name: "Shubunkin Goldfish",
    description: "The Shubunkin Goldfish is known for its calico coloration, which includes patches of red, orange, blue, and black, creating a vibrant and unique appearance.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 10 inches (25 cm)",
    img: "https://example.com/shubunkin-goldfish-image.jpg",
    size: "Medium",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Beginner",
    waterPHRange: "6.0 - 8.0",
    temperatureRange: "65°F - 75°F (18°C - 24°C)"
  },
  {
    name: "Celestial Eye Goldfish",
    description: "The Celestial Eye Goldfish has eyes that are pointed upwards, giving it a unique and celestial appearance.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 6 inches (15 cm)",
    img: "https://example.com/celestial-eye-goldfish-image.jpg",
    size: "Small",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.5 - 7.5",
    temperatureRange: "68°F - 74°F (20°C - 23°C)"
  },
  {
    name: "Ranchu Goldfish",
    description: "The Ranchu Goldfish is known for its rounded body, lack of a dorsal fin, and a distinctive head shape, creating a charming and unique appearance.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 6 inches (15 cm)",
    img: "https://example.com/ranchu-goldfish-image.jpg",
    size: "Small",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.5 - 7.5",
    temperatureRange: "68°F - 74°F (20°C - 23°C)"
  },
  {
    name: "Wakin Goldfish",
    description: "The Wakin Goldfish is known for its long, double tail and vibrant coloration, combining characteristics of the common goldfish and the fantail.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 10 inches (25 cm)",
    img: "https://example.com/wakin-goldfish-image.jpg",
    size: "Medium",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.0 - 8.0",
    temperatureRange: "65°F - 75°F (18°C - 24°C)"
  },
  {
    name: "Fantail Goldfish",
    description: "The Fantail Goldfish is characterized by its double tail and rounded body, creating an elegant and graceful appearance.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 8 inches (20 cm)",
    img: "https://example.com/fantail-goldfish-image.jpg",
    size: "Medium",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Beginner",
    waterPHRange: "6.5 - 7.5",
    temperatureRange: "68°F - 74°F (20°C - 23°C)"
  },
  {
    name: "Butterfly Tail Goldfish",
    description: "The Butterfly Tail Goldfish has telescope eyes and a butterfly-like tail, creating a unique and graceful swimming appearance.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 8 inches (20 cm)",
    img: "https://example.com/butterfly-tail-goldfish-image.jpg",
    size: "Medium",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.5 - 7.5",
    temperatureRange: "68°F - 74°F (20°C - 23°C)"
  },
  {
    name: "Tosakin Goldfish",
    description: "The Tosakin Goldfish is recognized for its unique tail structure, which spreads out horizontally like a fan, creating a distinctive appearance.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 6 inches (15 cm)",
    img: "https://example.com/tosakin-goldfish-image.jpg",
    size: "Small",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.5 - 7.5",
    temperatureRange: "68°F - 74°F (20°C - 23°C)"
  },
  {
    name: "Pearlscale Goldfish",
    description: "The Pearlscale Goldfish is known for its round body and scales that resemble pearls, giving it a unique and decorative appearance.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 6 inches (15 cm)",
    img: "https://example.com/pearlscale-goldfish-image.jpg",
    size: "Small",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Beginner",
    waterPHRange: "6.5 - 7.5",
    temperatureRange: "68°F - 74°F (20°C - 23°C)"
  },
  // Pleco
  {
  name: "Gold Nugget Pleco",
  description: "The Gold Nugget Pleco, scientifically known as Baryancistrus xanthellus, is admired for its vibrant golden-yellow coloration and unique patterns. It adds a touch of elegance to freshwater aquariums.",
  temperament: "Peaceful",
  maxGrowthSize: "Up to 7 inches (18 cm)",
  img: "https://example.com/gold-nugget-pleco-image.jpg",
  size: "Medium",
  species: "Baryancistrus xanthellus",
  family: "Pleco",
  experienceLevel: "Intermediate",
  waterPHRange: "6.0 - 7.5",
  temperatureRange: "75°F - 82°F (24°C - 28°C)"
},
{
  name: "Zebra Pleco",
  description: "The Zebra Pleco, scientifically known as Hypancistrus zebra, is highly prized for its striking black and white zebra-like stripes. It is a captivating and sought-after species among aquarium enthusiasts.",
  temperament: "Peaceful",
  maxGrowthSize: "Up to 4 inches (10 cm)",
  img: "https://example.com/zebra-pleco-image.jpg",
  size: "Small",
  species: "Hypancistrus zebra",
  family: "Pleco",
  experienceLevel: "Intermediate",
  waterPHRange: "6.0 - 7.5",
  temperatureRange: "78°F - 86°F (25°C - 30°C)"
},
{
  name: "Bristlenose Pleco",
  description: "The Bristlenose Pleco, also known as Ancistrus, is characterized by its distinctive bristle-like appendages on its snout. It is a popular and beneficial addition to aquariums.",
  temperament: "Peaceful",
  maxGrowthSize: "Up to 5 inches (12.7 cm)",
  img: "https://example.com/bristlenose-pleco-image.jpg",
  size: "Small",
  species: "Ancistrus",
  family: "Pleco",
  experienceLevel: "Beginner",
  waterPHRange: "6.5 - 7.5",
  temperatureRange: "72°F - 78°F (22°C - 26°C)"
},
{
  name: "Common Pleco",
  description: "The Common Pleco, or Hypostomus plecostomus, is a widely recognized and often large catfish species. It is known for its ability to help control algae in aquariums.",
  temperament: "Peaceful",
  maxGrowthSize: "Up to 24 inches (60 cm) or more",
  img: "https://example.com/common-pleco-image.jpg",
  size: "Large",
  species: "Hypostomus plecostomus",
  family: "Pleco",
  experienceLevel: "Intermediate",
  waterPHRange: "6.5 - 7.5",
  temperatureRange: "73°F - 82°F (23°C - 28°C)"
},
{
  name: "Sailfin Pleco",
  description: "The Sailfin Pleco, scientifically known as Pterygoplichthys gibbiceps, is named for its large sail-like dorsal fin. It is a robust and adaptable species with distinctive markings.",
  temperament: "Peaceful",
  maxGrowthSize: "Up to 18 inches (45 cm)",
  img: "https://example.com/sailfin-pleco-image.jpg",
  size: "Large",
  species: "Pterygoplichthys gibbiceps",
  family: "Pleco",
  experienceLevel: "Intermediate",
  waterPHRange: "6.5 - 7.5",
  temperatureRange: "75°F - 82°F (24°C - 28°C)"
},
{
  name: "Royal Pleco",
  description: "The Royal Pleco, or Panaque nigrolineatus, is known for its striking appearance, featuring a black body with white or yellowish spots. It is a captivating and sought-after species.",
  temperament: "Peaceful",
  maxGrowthSize: "Up to 15 inches (38 cm)",
  img: "https://example.com/royal-pleco-image.jpg",
  size: "Medium",
  species: "Panaque nigrolineatus",
  family: "Pleco",
  experienceLevel: "Intermediate",
  waterPHRange: "6.0 - 7.5",
  temperatureRange: "76°F - 86°F (24°C - 30°C)"
},
{
  name: "Snowball Pleco",
  description: "The Snowball Pleco, scientifically known as Hypancistrus inspector, is prized for its unique appearance with a white or light-colored body covered in small dark spots.",
  temperament: "Peaceful",
  maxGrowthSize: "Up to 5 inches (12.7 cm)",
  img: "https://example.com/snowball-pleco-image.jpg",
  size: "Small",
  species: "Hypancistrus inspector",
  family: "Pleco",
  experienceLevel: "Intermediate",
  waterPHRange: "6.0 - 7.5",
  temperatureRange: "78°F - 86°F (25°C - 30°C)"
},
{
  name: "Rubber Lip Pleco",
  description: "The Rubber Lip Pleco, or Chaetostoma milesi, is known for its rubbery lips and its ability to consume algae. It is a smaller and peaceful pleco species suitable for community tanks.",
  temperament: "Peaceful",
  maxGrowthSize: "Up to 4 inches (10 cm)",
  img: "https://example.com/rubber-lip-pleco-image.jpg",
  size: "Small",
  species: "Chaetostoma milesi",
  family: "Pleco",
  experienceLevel: "Beginner",
  waterPHRange: "6.5 - 7.5",
  temperatureRange: "72°F - 78°F (22°C - 26°C)"
},
{
  name: "Leopard Frog Pleco",
  description: "The Leopard Frog Pleco, scientifically known as Peckoltia compta, features a distinctive spotted pattern resembling a leopard. It is a smaller and attractive pleco species.",
  temperament: "Peaceful",
  maxGrowthSize: "Up to 4 inches (10 cm)",
  img: "https://example.com/leopard-frog-pleco-image.jpg",
  size: "Small",
  species: "Peckoltia compta",
  family: "Pleco",
  experienceLevel: "Intermediate",
  waterPHRange: "6.0 - 7.5",
  temperatureRange: "76°F - 82°F (24°C - 28°C)"
},
{
  name: "Peppermint Pleco",
  description: "The Peppermint Pleco, or Parancistrus nudiventris, is known for its attractive peppermint-like coloration, with alternating light and dark bands. It is a visually appealing species.",
  temperament: "Peaceful",
  maxGrowthSize: "Up to 4 inches (10 cm)",
  img: "https://example.com/peppermint-pleco-image.jpg",
  size: "Small",
  species: "Parancistrus nudiventris",
  family: "Pleco",
  experienceLevel: "Intermediate",
  waterPHRange: "6.0 - 7.5",
  temperatureRange: "78°F - 86°F (25°C - 30°C)"
},
{
  name: "Vampire Pleco",
  description: "The Vampire Pleco, scientifically known as Leporacanthicus heterodon, is named for its fang-like teeth. It is a unique and captivating pleco species, particularly appreciated by enthusiasts.",
  temperament: "Peaceful",
  maxGrowthSize: "Up to 10 inches (25 cm)",
  img: "https://example.com/vampire-pleco-image.jpg",
  size: "Medium",
  species: "Leporacanthicus heterodon",
  family: "Pleco",
  experienceLevel: "Intermediate",
  waterPHRange: "6.0 - 7.5",
  temperatureRange: "78°F - 86°F (25°C - 30°C)"
},
{
  name: "Sunshine Pleco",
  description: "The Sunshine Pleco, or Scobinancistrus aureatus, is known for its vibrant yellow-gold coloration. It is a striking and sought-after pleco species, adding a splash of color to aquariums.",
  temperament: "Peaceful",
  maxGrowthSize: "Up to 14 inches (35 cm)",
  img: "https://example.com/sunshine-pleco-image.jpg",
  size: "Medium",
  species: "Scobinancistrus aureatus",
  family: "Pleco",
  experienceLevel: "Intermediate",
  waterPHRange: "6.0 - 7.5",
  temperatureRange: "76°F - 86°F (24°C - 30°C)"
},
{
  name: "Blue-Eyed Pleco",
  description: "The Blue-Eyed Pleco, scientifically known as Panaqolus albivermis, features distinctive blue eyes and an attractive spotted pattern on its body. It is a visually appealing pleco species.",
  temperament: "Peaceful",
  maxGrowthSize: "Up to 4 inches (10 cm)",
  img: "https://example.com/blue-eyed-pleco-image.jpg",
  size: "Small",
  species: "Panaqolus albivermis",
  family: "Pleco",
  experienceLevel: "Intermediate",
  waterPHRange: "6.0 - 7.5",
  temperatureRange: "78°F - 86°F (25°C - 30°C)"
},
{
  name: "Blue/Green Phantom Pleco",
  description: "The Blue or Green Phantom Pleco, scientifically known as Hemiancistrus sp. L128, is admired for its stunning blue or green coloration and distinctive markings. It is a captivating and sought-after species.",
  temperament: "Peaceful",
  maxGrowthSize: "Up to 6 inches (15 cm)",
  img: "https://example.com/blue-green-phantom-pleco-image.jpg",
  size: "Small",
  species: "Hemiancistrus sp. L128",
  family: "Pleco",
  experienceLevel: "Intermediate",
  waterPHRange: "6.0 - 7.5",
  temperatureRange: "78°F - 86°F (25°C - 30°C)"
},
// Arowana
{
  name: "Silver Arowana",
  description: "The Silver Arowana, scientifically known as Osteoglossum bicirrhosum, is a majestic fish known for its sleek silver body and distinctive elongated shape. It is a popular choice among aquarium enthusiasts.",
  temperament: "Aggressive",
  maxGrowthSize: "Up to 36 inches (91 cm)",
  img: "https://example.com/silver-arowana-image.jpg",
  size: "Large",
  species: "Osteoglossum bicirrhosum",
  family: "Osteoglossidae",
  experienceLevel: "Advanced",
  waterPHRange: "6.0 - 7.5",
  temperatureRange: "75°F - 82°F (24°C - 28°C)"
},
{
  name: "Black Arowana",
  description: "The Black Arowana, also known as the Black Dragonfish, is a rare and captivating species prized for its deep black coloration. It is a unique and sought-after addition to advanced aquariums.",
  temperament: "Aggressive",
  maxGrowthSize: "Up to 36 inches (91 cm)",
  img: "https://example.com/black-arowana-image.jpg",
  size: "Large",
  species: "Osteoglossum ferreirai",
  family: "Osteoglossidae",
  experienceLevel: "Advanced",
  waterPHRange: "6.0 - 7.5",
  temperatureRange: "75°F - 82°F (24°C - 28°C)"
},
{
  name: "Jardini Arowana",
  description: "The Jardini Arowana, scientifically known as Scleropages jardini, is a stunning and lively species appreciated for its unique color patterns and active behavior. It is a captivating choice for experienced aquarists.",
  temperament: "Aggressive",
  maxGrowthSize: "Up to 30 inches (76 cm)",
  img: "https://example.com/jardini-arowana-image.jpg",
  size: "Large",
  species: "Scleropages jardini",
  family: "Osteoglossidae",
  experienceLevel: "Advanced",
  waterPHRange: "6.0 - 7.5",
  temperatureRange: "78°F - 86°F (25°C - 30°C)"
},
{
  name: "African Arowana",
  description: "The African Arowana, scientifically known as Heterotis niloticus, is a unique freshwater fish native to Africa. It is recognized for its distinctive appearance and is well-suited for large aquariums.",
  temperament: "Aggressive",
  maxGrowthSize: "Up to 30 inches (76 cm)",
  img: "https://example.com/african-arowana-image.jpg",
  size: "Large",
  species: "Heterotis niloticus",
  family: "Osteoglossidae",
  experienceLevel: "Intermediate",
  waterPHRange: "6.0 - 8.0",
  temperatureRange: "74°F - 82°F (23°C - 28°C)"
},

// Gar 
{
  name: "Longnose Gar",
  description: "The Longnose Gar, scientifically known as Lepisosteus osseus, is a slender and elongated freshwater fish with a distinctive long snout. It is known for its hardiness and adaptability to various aquarium conditions.",
  temperament: "Semi-aggressive",
  maxGrowthSize: "Up to 36 inches (91 cm)",
  img: "https://example.com/longnose-gar-image.jpg",
  size: "Large",
  species: "Lepisosteus osseus",
  family: "Lepisosteidae",
  experienceLevel: "Intermediate",
  waterPHRange: "6.0 - 8.0",
  temperatureRange: "65°F - 80°F (18°C - 27°C)"
},
{
  name: "Spotted Gar",
  description: "The Spotted Gar, scientifically known as Lepisosteus oculatus, is a visually striking freshwater fish with dark spots on its body. It is known for its unique appearance and adaptability to aquarium life.",
  temperament: "Semi-aggressive",
  maxGrowthSize: "Up to 30 inches (76 cm)",
  img: "https://example.com/spotted-gar-image.jpg",
  size: "Large",
  species: "Lepisosteus oculatus",
  family: "Lepisosteidae",
  experienceLevel: "Intermediate",
  waterPHRange: "6.0 - 8.0",
  temperatureRange: "70°F - 82°F (21°C - 28°C)"
},
{
  name: "Shortnose Gar",
  description: "The Shortnose Gar, scientifically known as Lepisosteus platostomus, is a smaller species with a short, broad snout. It is recognized for its aggressive feeding behavior and adaptability to aquarium conditions.",
  temperament: "Aggressive",
  maxGrowthSize: "Up to 24 inches (61 cm)",
  img: "https://example.com/shortnose-gar-image.jpg",
  size: "Medium",
  species: "Lepisosteus platostomus",
  family: "Lepisosteidae",
  experienceLevel: "Intermediate",
  waterPHRange: "6.0 - 8.0",
  temperatureRange: "65°F - 80°F (18°C - 27°C)"
},
{
  name: "Florida Gar",
  description: "The Florida Gar, scientifically known as Lepisosteus platyrhincus, is a smaller gar species with a slender body and attractive greenish coloration. It is suitable for aquariums and adapts well to captivity.",
  temperament: "Semi-aggressive",
  maxGrowthSize: "Up to 36 inches (91 cm)",
  img: "https://example.com/florida-gar-image.jpg",
  size: "Large",
  species: "Lepisosteus platyrhincus",
  family: "Lepisosteidae",
  experienceLevel: "Intermediate",
  waterPHRange: "6.0 - 8.0",
  temperatureRange: "70°F - 82°F (21°C - 28°C)"
},
{
  name: "Tropical Gar",
  description: "The Tropical Gar, belonging to the genus Atractosteus, is known for its tropical habitat and distinctive appearance. It is a fascinating species suitable for larger aquariums with appropriate conditions.",
  temperament: "Semi-aggressive",
  maxGrowthSize: "Up to 30 inches (76 cm)",
  img: "https://example.com/tropical-gar-image.jpg",
  size: "Large",
  species: "Atractosteus sp.",
  family: "Lepisosteidae",
  experienceLevel: "Intermediate",
  waterPHRange: "6.0 - 8.0",
  temperatureRange: "72°F - 80°F (22°C - 27°C)"
},
{
  name: "Alligator Gar",
  description: "The Alligator Gar, scientifically known as Atractosteus spatula, is one of the largest freshwater fish known for its alligator-like appearance. It requires a spacious aquarium due to its size and predatory nature.",
  temperament: "Aggressive",
  maxGrowthSize: "Up to 120 inches (305 cm)",
  img: "https://example.com/alligator-gar-image.jpg",
  size: "Extra Large",
  species: "Atractosteus spatula",
  family: "Lepisosteidae",
  experienceLevel: "Advanced",
  waterPHRange: "6.0 - 8.0",
  temperatureRange: "72°F - 82°F (22°C - 28°C)"
},
{
  name: "Cuban Gar",
  description: "The Cuban Gar, scientifically known as Atractosteus tristoechus, is a tropical gar species found in Cuba. It is recognized for its unique appearance and is suitable for larger aquariums with appropriate conditions.",
  temperament: "Semi-aggressive",
  maxGrowthSize: "Up to 36 inches (91 cm)",
  img: "https://example.com/cuban-gar-image.jpg",
  size: "Large",
  species: "Atractosteus tristoechus",
  family: "Lepisosteidae",
  experienceLevel: "Intermediate",
  waterPHRange: "6.0 - 8.0",
  temperatureRange: "72°F - 80°F (22°C - 27°C)"
}
];

  export default freshwaterFishSpecies;
  