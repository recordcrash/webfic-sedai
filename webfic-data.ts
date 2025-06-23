type WebficItem = {
  title: string
  score: number
}

type Data = {
  [key: string]: WebficItem[]
}

const data: Data = {
  "≤2010": [
    {
      title: "Fine Structure",
      score: 0.0,
    },
    {
      title: "Tales of Mu",
      score: 0.0,
    },
    {
      title: "Saga of Soul",
      score: 0.0,
    },
    {
      title: "Dungeon Keeper Ami",
      score: 0.0,
    },
    {
      title: "Harry Potter and the Methods of Rationality",
      score: 0.0,
    },
    {
      title: "Luminosity",
      score: 0.0,
    },
  ],
  "2011": [
    {
      title: "Worm",
      score: 0.0,
    },
    {
      title: "Mother of Learning",
      score: 0.0,
    },
    {
      title: "To the Stars",
      score: 0.0,
    },
  ],
  "2012": [
    {
      title: "Friendship Is Optimal",
      score: 0.0,
    },
  ],
  "2013": [
    {
      title: "Pokemon Toos",
      score: 0.0,
    },
    {
      title: "Lighting Up the Dark",
      score: 0.0,
    },
    {
      title: "Ra",
      score: 0.0,
    },
    {
      title: "Pact",
      score: 0.0,
    },
    {
      title: "Stone Burners",
      score: 0.0,
    },
  ],
  "2014": [
    {
      title: "Twig",
      score: 0.0,
    },
    {
      title: "Floornight",
      score: 0.0,
    },
  ],
  "2015": [
    {
      title: "R! Animorphs",
      score: 0.0,
    },
    {
      title: "The Waves Arisen",
      score: 0.0,
    },
    {
      title: "Fargo",
      score: 0.0,
    },
    {
      title: "Marked for Death",
      score: 0.0,
    },
    {
      title: "A Practical Guide to Evil",
      score: 0.0,
    },
    {
      title: "The Northern Caves",
      score: 0.0,
    },
  ],
  "2016": [
    {
      title: "UNSONG",
      score: 0.0,
    },
    {
      title: "Cordyceps",
      score: 0.0,
    },
    {
      title: "Almost Nowhere",
      score: 0.0,
    },
    {
      title: "Forty Millenniums of Cultivation",
      score: 0.0,
    },
  ],
  "2017": [
    {
      title: "Worth the Candle",
      score: 0.0,
    },
    {
      title: "The World As It Appears",
      score: 0.0,
    },
    {
      title: "The Erogamer",
      score: 0.0,
    },
    {
      title: "Modern Cannibals",
      score: 0.0,
    },
    {
      title: "Ward",
      score: 0.0,
    },
  ],
  "2018": [
    {
      title: "Chicago",
      score: 0.0,
    },
    {
      title: "The Gig Economy",
      score: 0.0,
    },
  ],
  "2019": [
    {
      title: "Chili Chocolate Factory",
      score: 0.0,
    },
    {
      title: "The Flower That Bloomed Nowhere",
      score: 0.0,
    },
    {
      title: "Wake of the Ravager",
      score: 0.0,
    },
    {
      title: "Katalepsis",
      score: 0.0,
    },
    {
      title: "Pale",
      score: 0.0,
    },
    {
      title: "God-Shaped Hole",
      score: 0.0,
    },
    {
      title: "Vainqueur the Dragon",
      score: 0.0,
    },
  ],
  "2020": [],
  "2021": [],
  "2022": [
    {
      title: "Cockatiel x Chameleon",
      score: 0.0,
    },
    {
      title: "Time to Orbit Unknown",
      score: 0.0,
    },
  ],
  "2023": [
    {
      title: "Super Supportive",
      score: 0.0,
    },
  ],
  "2024": [
    {
      title: "When I Win the World Ends",
      score: 0.0,
    },
    {
      title: "Seek",
      score: 0.0,
    },
  ],
  "2025": [
    {
      title: "Inkbound",
      score: 0.0,
    },
    {
      title: "Khaos Architect",
      score: 0.0,
    },
    {
      title: "House of Bastards",
      score: 0.0,
    },
  ],
};


export const getWebficTitle = (webfic: WebficItem): string => {
  return webfic["title"] as string
}

export default data
