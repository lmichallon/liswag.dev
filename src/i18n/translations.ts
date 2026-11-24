export const defaultLang = "fr" as const;

export const translations = {
  fr: {
    title: "Lisa Michallon | Développeuse Front-End",
    description: "Lisa Michallon — Développeuse Front-End",
    hero: "Développeuse Front-End",
    about: {
      title: "Pourquoi le dev ?",
      body: `J'ai grandi sur internet. Je passais des heures à bidouiller le thème de mon Tumblr ou à customiser mon Skyblog. J'adorais ça ! Faire que les choses soient exactement comme je les voulais.\n\nÀ l'université, c'est l'anglais que j'ai étudié. Apprendre une langue c'est décortiquer ses règles, sa syntaxe, sa logique propre. C'est peut-être ce qui m'a ensuite attirée vers le code : le plaisir de comprendre un nouveau langage.\n\nLe front-end, c'est la rencontre de tout ça. Mon faible pour les belles choses. Les interfaces soignées, les détails qui font la différence, le sentiment que chaque décision a été prise avec intention. Il y a quelque chose de satisfaisant à voir une interface bien pensée prendre forme.`,
    },
    qualities: {
      quote: `Chaque expérience \nm'a amenée à découvrir \nde nouveaux outils, de nouveaux \nframeworks, de nouvelles façons \nd'organiser le code.`,
      quote2: `Au fil des projets \net des équipes, j'ai \nappris à m'adapter vite.`,
    },
  },
  en: {
    title: "Lisa Michallon | Front-End Developer",
    description: "Lisa Michallon — Front-End Developer",
    hero: "Front-End Developer",
    about: {
      title: "Why development?",
      body: `I grew up on the internet. I spent hours tweaking my Tumblr theme or customising my Skyblog. I loved it ! Making things look exactly how I wanted them.\n\nAt university, I studied English. Learning a language means breaking down its rules, its syntax, its internal logic. Maybe that's what later drew me to code: the pleasure of understanding a new language.\n\nFront-end is where it all comes together. My love for beautiful things. Polished interfaces, the details that make a difference, the feeling that every decision was made with intention. There's something satisfying about seeing a well-crafted interface take shape.`,
    },
    qualities: {
      quote: `Every experience \nhas led me to discover \nnew tools, new \nframeworks, new ways \nof organising code.`,
      quote2: `Through projects \nand teams, I've learnt \nto adapt quickly.`,
    },
  },
} as const;

export type Lang = keyof typeof translations;

export function useTranslations(lang: Lang) {
  return translations[lang];
}
