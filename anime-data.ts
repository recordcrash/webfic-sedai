import type { Language } from "./src/i18n"

type AnimeItem = {
  title: string
  score: number
}

type Data = {
  [key: string]: AnimeItem[]
}

const data: Data = {
  "2006": [
    {
      title: "Death Note",
      score: 8.4,
    },
    {title: "Gintama", score: 8.7 },
    {
      title: "Higurashi When They Cry",
      score: 8,
    },
    {
      title: "Code Geass: Lelouch of the Rebellion",
      score: 8.3,
    },
    {
      title: "Welcome to the N.H.K.",
      score: 8.2,
    },
    {
      title: "Fate/stay night",
      score: 7.1,
    },
    {
      title: "The Melancholy of Haruhi Suzumiya",
      score: 8.2,
    },
    {
      title: "The Familiar of Zero",
      score: 7,
    },
    {
      title: "Black Lagoon",
      score: 7.8,
    },
    {title: "Kanon", score: 7.7 },
    {title: "NANA", score: 8 },
    {
      title: "×××HOLiC",
      score: 7.8,
    },
    {
      title: "Katekyo Hitman Reborn!",
      score: 7.5,
    },
    {
      title: "Ouran High School Host Club",
      score: 7.6,
    },
    {
      title: "Honey and Clover II",
      score: 8.5,
    },
  ],
  "2007": [
    {
      title: "Lucky Star",
      score: 8.3,
    },
    {title: "CLANNAD", score: 8.3 },
    {
      title: "Tengen Toppa Gurren Lagann",
      score: 8.6,
    },
    {
      title: "Hayate the Combat Butler",
      score: 7.4,
    },
    {
      title: "Naruto Shippuden",
      score: 7.6,
    },
    {
      title: "ef: A Tale of Memories",
      score: 7.9,
    },
    {
      title: "Kaiji: Ultimate Survivor",
      score: 7.9,
    },
    {
      title: "Baccano!",
      score: 8.2,
    },
    {
      title: "Mobile Suit Gundam 00",
      score: 7.6,
    },
    {
      title: "Sayonara, Zetsubou-Sensei",
      score: 7.8,
    },
    {
      title: "School Days",
      score: 6.3,
    },
    {
      title: "Minami-ke",
      score: 7.6,
    },
    {
      title: "Darker than Black",
      score: 8,
    },
    {
      title: "My Bride is a Mermaid",
      score: 7.4,
    },
    {
      title: "Dennō Coil",
      score: 8.1,
    },
    {title: "Mononoke", score: 8.2 },
    {
      title: "Hidamari Sketch",
      score: 7.5,
    },
    {
      title: "The Familiar of Zero: Knight of the Twin Moons",
      score: 6.9,
    },
    {title: "Sola", score: 7.2 },
  ],
  "2008": [
    {
      title: "To Love-Ru",
      score: 6.9,
    },
    {
      title: "Toradora!",
      score: 8,
    },
    {
      title: "A Certain Magical Index",
      score: 6.8,
    },
    {
      title: "Spice and Wolf",
      score: 7.8,
    },
    {
      title: "Natsume's Book of Friends",
      score: 8,
    },
    {
      title: "True Tears",
      score: 7.5,
    },
    {title: "Kannagi", score: 7.1 },
    {
      title: "Kanokon",
      score: 6.1,
    },
    {
      title: "Soul Eater",
      score: 7.4,
    },
    {title: "Black Butler", score: 7 },
    {
      title: "Zoku Sayonara Zetsubou Sensei",
      score: 7.8,
    },
    {
      title: "Sekirei",
      score: 6.2,
    },
    {
      title: "Strike Witches",
      score: 7.1,
    },
  ],
  "2009": [
    {title: "K-ON!", score: 8.2 },
    {
      title: "Fullmetal Alchemist: Brotherhood",
      score: 8.8,
    },
    {
      title: "Bakemonogatari",
      score: 8.4,
    },
    {
      title: "The Melancholy of Haruhi Suzumiya (2009)",
      score: 8,
    },
    {
      title: "A Certain Scientific Railgun",
      score: 7.5,
    },
    {
      title: "Student Council's Discretion",
      score: 7.4,
    },
    {
      title: "Heaven's Lost Property",
      score: 7.3,
    },
    {
      title: "Saki",
      score: 7.5,
    },
    {
      title: "White Album",
      score: 7.3,
    },
    {
      title: "Fairy Tail",
      score: 7.4,
    },
    {
      title: "Kimi ni Todoke",
      score: 7.6,
    },
  ],
  "2010": [
    {
      title: "Panty & Stocking with Garterbelt",
      score: 8,
    },
    {
      title: "The Tatami Galaxy",
      score: 8.6,
    },
    {
      title: "Seitokai Yakuindomo",
      score: 7.5,
    },
    {
      title: "Yosuga no Sora",
      score: 6.6,
    },
    {
      title: "Baka and Test",
      score: 7.4,
    },
    {
      title: "Angel Beats!",
      score: 7.5,
    },
    {
      title: "Durarara!!",
      score: 7.9,
    },
    {
      title: "The World God Only Knows",
      score: 7.2,
    },
    {
      title: "Amagami SS",
      score: 7.3,
    },
    {
      title: "Oreimo",
      score: 7.1,
    },
    {
      title: "And Yet the Town Moves",
      score: 7.8,
    },
    {
      title: "Kiss × Sis",
      score: 6.7,
    },
    {
      title: "Working!",
      score: 7.5,
    },
    {
      title: "High School of the Dead",
      score: 6.7,
    },
    {
      title: "Arakawa Under the Bridge",
      score: 7.5,
    },
    {
      title: "Heaven's Lost Property f",
      score: 7.3,
    },
    {
      title: "Bakuman",
      score: 8,
    },
    {
      title: "Maid Sama!",
      score: 6.9,
    },
    {
      title: "Seikon no Qwaser",
      score: 6,
    },
    {
      title: "Sound of the Sky",
      score: 6.8,
    },
  ],
  "2011": [
    {
      title: "Steins;Gate",
      score: 8.8,
    },
    {title: "Nichijou", score: 8.5 },
    {
      title: "Fate/Zero",
      score: 8.1,
    },
    {
      title: "Puella Magi Madoka Magica",
      score: 8.6,
    },
    {
      title: "Penguindrum",
      score: 8,
    },
    {
      title: "YuruYuri",
      score: 7.6,
    },
    {
      title: "AnoHana",
      score: 7.6,
    },
    {
      title: "Guilty Crown",
      score: 6.5,
    },
    {
      title: "Hanasaku Iroha",
      score: 7.5,
    },
    {
      title: "The Idolmaster",
      score: 8.3,
    },
    {title: "GOSICK", score: 7.3 },
    {
      title: "Haganai",
      score: 6.8,
    },
    {
      title: "Hunter x Hunter",
      score: 8.2,
    },
    {
      title: "Future Diary",
      score: 7.2,
    },
    {
      title: "Ground Control to Psychoelectric Girl",
      score: 7.1,
    },
    {
      title: "Is This a Zombie?",
      score: 6.8,
    },
    {
      title: "Kaiji: Against All Rules",
      score: 7.8,
    },
    {
      title: "Mayo Chiki!",
      score: 6.6,
    },
    {
      title: "Mashiro-iro Symphony",
      score: 6.5,
    },
    {
      title: "Heaven's Memo Pad",
      score: 6.7,
    },
    {title: "BLOOD-C", score: 6 },
    {
      title: "The Mystic Archives of Dantalian",
      score: 7.1,
    },
  ],
  "2012": [
    {title: "Hyouka", score: 8.2 },
    {
      title: "JoJo's Bizarre Adventure",
      score: 7.8,
    },
    {
      title: "Daily Lives of High School Boys",
      score: 7.9,
    },
    {
      title: "Love, Chunibyo & Other Delusions!",
      score: 7.4,
    },
    {
      title: "From the New World",
      score: 8.2,
    },
    {
      title: "Nisemonogatari",
      score: 7.8,
    },
    {title: "Another", score: 7 },
    {
      title: "The Pet Girl of Sakurasou",
      score: 7.4,
    },
    {
      title: "Psycho-Pass",
      score: 7.9,
    },
    {
      title: "High School DxD",
      score: 6.9,
    },
    {
      title: "Sword Art Online",
      score: 7.3,
    },
    {
      title: "Humanity Has Declined",
      score: 7.9,
    },
    {
      title: "Little Busters!",
      score: 7.1,
    },
    {
      title: "Nyaruko: Crawling with Love",
      score: 7,
    },
    {
      title: "My Little Monster",
      score: 7.2,
    },
    {
      title: "Nekomonogatari (Black)",
      score: 7.7,
    },
    {
      title: "Girls und Panzer",
      score: 7.6,
    },
    {
      title: "Kokoro Connect",
      score: 7.4,
    },
    {
      title: "TARI TARI",
      score: 7.3,
    },
    {
      title: "Mysterious Girlfriend X",
      score: 7,
    },
    {
      title: "OniAi",
      score: 5.9,
    },
    {
      title: "Sankarea: Undying Love",
      score: 6.8,
    },
  ],
  "2013": [
    {
      title: "Attack on Titan",
      score: 8.2,
    },
    {
      title: "Kill la Kill",
      score: 8.1,
    },
    {
      title: "My Teen Romantic Comedy SNAF",
      score: 7.5,
    },
    {
      title: "Non Non Biyori",
      score: 8,
    },
    {
      title: "Tamako Market",
      score: 7.2,
    },
    {
      title: "Yama no Susume",
      score: 7.1,
    },
    {
      title: "Date A Live",
      score: 6.6,
    },
    {
      title: "Strike the Blood",
      score: 6.6,
    },
    {
      title: "Nagi-Asu: A Lull in the Sea",
      score: 7.5,
    },
    {
      title: "Oreimo 2",
      score: 6.9,
    },
    {
      title: "WataMote",
      score: 6.9,
    },
    {
      title: "Beyond the Boundary",
      score: 6.8,
    },
    {
      title:
        "My Brain's Little Options Are Doing Their Best to Hinder My School Romance Comedy",
      score: 6.6,
    },
    {
      title: "Fate/kaleid liner 魔法少女☆イリヤ",
      score: 6.9,
    },
    {title: "GJ Club", score: 6.9 },
    {
      title: "Danganronpa: The Animation",
      score: 6.6,
    },
    {
      title: "Golden Time",
      score: 7.3,
    },
    {
      title: "Love Live!",
      score: 7.2,
    },
    {
      title: "Oreshura",
      score: 6.4,
    },
    {
      title: "Haganai NEXT",
      score: 6.7,
    },
  ],
  "2014": [
    {title: "Shirobako", score: 8.7 },
    {
      title: "Your Lie in April",
      score: 8,
    },
    {
      title: "Fate/stay night [Unlimited Blade Works]",
      score: 7.5,
    },
    {
      title: "No Game No Life",
      score: 7.7,
    },
    {
      title: "Ping Pong",
      score: 8.7,
    },
    {
      title: "Amagi Brilliant Park",
      score: 7,
    },
    {
      title: "Parasyte -the maxim-",
      score: 8,
    },
    {title: "Nisekoi", score: 7.1 },
    {
      title: "Monthly Girls' Nozaki-kun",
      score: 7.8,
    },
    {
      title: "Is the Order a Rabbit?",
      score: 7.3,
    },
    {
      title: "Akame ga Kill!",
      score: 6.6,
    },
    {
      title: "Space Dandy",
      score: 8,
    },
    {
      title: "Seitokai Yakuindomo",
      score: 7.6,
    },
    {
      title: "Tokyo Ghoul",
      score: 6.7,
    },
    {
      title: "Owarimonogatari: End Tale",
      score: 7.5,
    },
    {
      title: "The Fruit of Grisaia",
      score: 7.1,
    },
    {
      title: "Hanamonogatari ",
      score: 7.3,
    },
    {title: "Nourin", score: 6.6 },
    {
      title: "The Irregular at Magic High School",
      score: 5.8,
    },
    {title: "Noragami", score: 7.1 },
  ],
  "2015": [
    {
      title: "Saekano: How to Raise a Boring Girlfriend",
      score: 7.2,
    },
    {
      title: "Assassination Classroom",
      score: 7.3,
    },
    {
      title: "One Punch Man",
      score: 8,
    },
    {
      title: "The Testament of Sister New Devil",
      score: 5.8,
    },
    {
      title: "Charlotte",
      score: 6.3,
    },
    {
      title: "Overlord",
      score: 6.9,
    },
    {
      title: "Prison School",
      score: 7.3,
    },
    {
      title: "Plastic Memories",
      score: 7,
    },
    {
      title: "Is it wrong to Try to Pick Up Girls in a Dungeon?",
      score: 6.8,
    },
    {
      title: "Himouto! Umaru-chan",
      score: 6.8,
    },
    {
      title: "Sound! Euphonium",
      score: 8.3,
    },
    {
      title: "Owarimonogatari",
      score: 7.8,
    },
    {
      title: "The Rolling Girls",
      score: 7.4,
    },
    {
      title: "Chivalry of a Failed Knight",
      score: 6.5,
    },
    {
      title: "Shimoneta",
      score: 6.1,
    },
  ],
  "2016": [
    {
      title: "Kono Suba",
      score: 7.6,
    },
    {
      title: "March Comes in Like a Lion",
      score: 8.3,
    },
    {title: "ReLIFE", score: 7.7 },
    {
      title: "The Disastrous Life of Saiki K.",
      score: 7.7,
    },
    {
      title: "Re:Zero ",
      score: 7.4,
    },
    {
      title: "Erased",
      score: 7.7,
    },
    {
      title: "Mob Psycho 100",
      score: 7.8,
    },
    {
      title: "Grimgar of Fantasy and Ash",
      score: 7.5,
    },
    {
      title: "This Art Club Has a Problem!",
      score: 7.3,
    },
    {
      title: "Flip Flappers",
      score: 7.5,
    },
    {
      title: "Flying Witch",
      score: 7.5,
    },
    {
      title: "NEW GAME!",
      score: 7.4,
    },
    {
      title: "Haven't You Heard? I'm Sakamoto",
      score: 6.5,
    },
    {
      title: "Descending Stories: Showa Genroku Rakugo Shinju",
      score: 8.2,
    },
    {
      title: "Myriad Colors Phantom World",
      score: 6.2,
    },
    {
      title: "And You Thought There Is Never a Girl Online? ",
      score: 6,
    },
    {
      title: "Ajin: Demi-Human",
      score: 7.3,
    },
    {
      title: "Kabaneri of the Iron Fortress",
      score: 5.9,
    },
    {
      title: "Berserk",
      score: 6.8,
    },
  ],
  "2017": [
    {
      title: "Girls' Last Tour",
      score: 8.1,
    },
    {
      title: "Made in Abyss",
      score: 8.2,
    },
    {
      title: "Miss Kobayashi's Dragon Maid",
      score: 7.4,
    },
    {
      title: "Kakegurui",
      score: 7,
    },
    {
      title: "WorldEnd",
      score: 7.6,
    },
    {
      title: "Tsuki ga Kirei",
      score: 7.9,
    },
    {
      title: "Sagrada Reset",
      score: 7.9,
    },
    {
      title: "BanG Dream!",
      score: 6.4,
    },
    {
      title: "Saga of Tanya the Evil",
      score: 7.2,
    },
    {
      title: "Little Witch Academia",
      score: 7.7,
    },
    {
      title: "Just Because!",
      score: 7.3,
    },
    {
      title: "Eromanga Sensei",
      score: 6.6,
    },
    {
      title: "Scum's Wish",
      score: 6.6,
    },
    {
      title: "Gabriel DropOut",
      score: 7.1,
    },
    {
      title: "Aho-Girl",
      score: 6.6,
    },
    {
      title: "Black Clover",
      score: 6.5,
    },
    {
      title: "A Sister's All You Need",
      score: 6.6,
    },
    {
      title: "Tsuredure Children",
      score: 7.1,
    },
    {
      title: "Akashic Records of Bastard Magic Instructor",
      score: 6.2,
    },
  ],
  "2018": [
    {
      title: "Yuru Camp△",
      score: 8.2,
    },
    {
      title: "Grand Blue",
      score: 7.8,
    },
    {
      title: "Umamusume Pretty Derby",
      score: 7,
    },
    {
      title: "Violet Evergarden",
      score: 7.5,
    },
    {
      title: "Run with the Wind",
      score: 8.3,
    },
    {
      title: "Shōjo☆gekijō Revue Starlight",
      score: 7.9,
    },
    {
      title: "Teasing Master Takagi-san",
      score: 7.5,
    },
    {
      title: "Zombie Land Saga",
      score: 7.8,
    },
    {
      title: "A Place Further Than the Universe",
      score: 8.2,
    },
    {
      title: "Rascal Does Not Dream of Bunny Girl Senpai",
      score: 7.4,
    },
    {
      title: "Goblin Slayer",
      score: 6.7,
    },
    {
      title: "Bloom into You",
      score: 7.8,
    },
    {
      title: "DARLING in the FRANXX",
      score: 6.2,
    },
    {
      title: "Gamers!",
      score: 7.6,
    },
    {
      title: "Dropkick on My Devil!",
      score: 7,
    },
    {
      title: "After the Rain",
      score: 7.5,
    },
    {
      title: "That Time I Got Reincarnated as a Slime",
      score: 6.6,
    },
    {
      title: "Golden Kamuy",
      score: 7.5,
    },
  ],
  "2019": [
    {
      title: "Vinland Saga",
      score: 8.3,
    },
    {
      title: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunōsen",
      score: 7.8,
    },
    {
      title: "The Demon Girl Next Door",
      score: 7.5,
    },
    {
      title: "Demon Slayer",
      score: 7.3,
    },
    {
      title: "Fire Force",
      score: 6.5,
    },
    {
      title: "Wasteful Days of High School Girls",
      score: 7.6,
    },
    {
      title: "Cautious Hero: ",
      score: 6.9,
    },
    {
      title: "Angels' 3Piece!",
      score: 7.3,
    },
    {
      title: "Boogiepop and Others",
      score: 7.3,
    },
    {
      title: "How Clumsy You Are, Miss Ueno",
      score: 6.5,
    },
    {
      title: "The Quintessential Quintuplets",
      score: 6,
    },
    {
      title: "Yakusoku no Neverland",
      score: 7.6,
    },
    {
      title: "Hensuki",
      score: 6.1,
    },
    {
      title: "Fate/Grand Order -Absolute Demonic Front: Babylonia-",
      score: 6.8,
    },
    {
      title: "Kanojo, Okarishimasu",
      score: 6.3,
    },
    {
      title: "The Case Files of Lord El-Melloi II: Rail Zeppelin Grace Note",
      score: 6.7,
    },
    {
      title: "Dr. Stone",
      score: 7.2,
    },
  ],
  "2020": [
    {
      title: "Ishuzoku Reviewers",
      score: 7.7,
    },
    {
      title: "Wandering Witch: The Journey of Elaina",
      score: 7.1,
    },
    {
      title: "Adachi and Shimamura",
      score: 7.3,
    },
    {
      title: "ID:INVADED",
      score: 7.5,
    },
    {
      title: "Keep Your Hands Off Eizouken!",
      score: 8.1,
    },
    {
      title: "Jujutsu Kaisen",
      score: 7.1,
    },
    {
      title: "Tonikawa: Over the Moon For You",
      score: 6.3,
    },
    {
      title: "Kakushigoto",
      score: 7.7,
    },
    {
      title: "In/Spectre",
      score: 6.3,
    },
    {
      title: "Koisuru Asteroid",
      score: 6.9,
    },
    {
      title: "Our Last Crusade or the Rise of a New World",
      score: 5.5,
    },
    {
      title: "Dropkick on My Devil!",
      score: 7.3,
    },
    {
      title: "My Next Life as a Villainess: All Routes Lead to Doom!",
      score: 6.5,
    },
    {
      title: "Sleepy Princess in the Demon Castle",
      score: 7,
    },
    {
      title: "Rent-A-Girlfriend",
      score: 5.8,
    },
  ],
  "2021": [
    {
      title: "86 -Eighty-Six-",
      score: 7.6,
    },
    {
      title: "Mushoku Tensei: Jobless Reincarnation",
      score: 7.9,
    },
    {
      title: "Redo of Healer",
      score: 6.2,
    },
    {
      title: "Odd Taxi",
      score: 8.5,
    },
    {
      title: "I’ve Been Killing Slimes for 300 Years and Maxed Out My Level",
      score: 6.3,
    },
    {
      title: "Sonny Boy",
      score: 7.8,
    },
    {
      title: "Horimiya",
      score: 6.8,
    },
    {
      title: "Combatants Will Be Dispatched!",
      score: 6.3,
    },
    {
      title: "Komi Can't Communicate",
      score: 7,
    },
    {
      title: "Wonder Egg Priority",
      score: 6.8,
    },
    {
      title: "Remake Our Life!",
      score: 6.4,
    },
    {
      title: "Mieruko-chan",
      score: 6.8,
    },
    {
      title: "The Dungeon of Black Company",
      score: 6.7,
    },
    {
      title: "Megami-ryō no Ryōbo-kun",
      score: 5.8,
    },
  ],
  "2022": [
    {
      title: "Bocchi the Rock!",
      score: 8.4,
    },
    {
      title: "Lycoris Recoil",
      score: 6.3,
    },
    {
      title: "The Eminence in Shadow",
      score: 7.1,
    },
    {
      title: "Summer Time Rendering",
      score: 7.5,
    },
    {
      title: "Uncle from Another World",
      score: 7.6,
    },
    {
      title: "My Dress-Up Darling",
      score: 7.2,
    },
    {
      title: "Call of the Night",
      score: 7.4,
    },
    {
      title: "Aharen Is Indecipherable",
      score: 6.4,
    },
    {
      title: "SPY×FAMILY",
      score: 7.2,
    },
    {
      title: "Immoral Guild",
      score: 7.1,
    },
    {
      title: "Chainsaw Man",
      score: 6.9,
    },
    {
      title: "Akebi's Sailor Uniform",
      score: 7.5,
    },
    {
      title: "Engage Kiss",
      score: 6.9,
    },
    {
      title: "Sasaki and Miyano",
      score: 7.8,
    },
  ],
  "2023": [
    {
      title: "Frieren: Beyond Journey's End",
      score: 8.5,
    },
    {
      title: "The Apothecary Diaries",
      score: 7.5,
    },
    {
      title: "BanG Dream! It's MyGO!!!!!",
      score: 8.1,
    },
    {
      title: "The Dangers in My Heart",
      score: 7.8,
    },
    {
      title: "The 100 Girlfriends Who Really Love You",
      score: 7.3,
    },
    {
      title: "Onimai: I'm Now Your Sister!",
      score: 7.6,
    },
    {
      title: "Skip and Loafer",
      score: 7.7,
    },
    {
      title: "Pokémon Horizons",
      score: 7.5,
    },
    {
      title: "Shangri-La Frontier",
      score: 6.4,
    },
    {
      title: "KamiKatsu: Working for God in a Godless World",
      score: 6.8,
    },
    {
      title: "Oshi no Ko",
      score: 7.4,
    },
    {
      title: "Heavenly Delusion",
      score: 7.8,
    },
    {
      title: "Farming Life in Another World",
      score: 6.4,
    },
  ],
  "2024": [
    {
      title: "Too Many Losing Heroines!",
      score: 8,
    },
    {
      title: "GIRLS BAND CRY",
      score: 7.6,
    },
    {
      title: "Dandadan",
      score: 7.5,
    },
    {
      title: "Gimai Seikatsu",
      score: 7.3,
    },
    {
      title: "Delicious in Dungeon",
      score: 7.8,
    },
    {
      title: "Solo Leveling",
      score: 6.5,
    },
    {
      title: "Shoshimin",
      score: 6.1,
    },
    {
      title: "Gushing over Magical Girls",
      score: 7,
    },
    {title: "Blue Box", score: 6.8 },
    {
      title: "2.5 Dimensional Seduction",
      score: 6.7,
    },
    {
      title: "Orb: On the Movements of the Earth",
      score: 6.2,
    },
    {
      title: "The Elusive Samurai",
      score: 7.9,
    },
    {
      title: "Alya Sometimes Hides Her Feelings in Russian",
      score: 5.6,
    },
    {
      title: "Fisherman's Songs",
      score: 7.3,
    },
    {
      title: "Atri: My Dear Moments",
      score: 6.3,
    },
    {
      title: "The Elusive Samurai",
      score: 5.9,
    },
  ],
}

export const getAnimeTitle = (anime: AnimeItem): string => {
  return anime["title"] as string
}

export default data
