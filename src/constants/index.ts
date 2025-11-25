export type Tag = { id: number; name: string; path: string };

export type Project = {
  id: number;
  slug: string;
  href: string;
  logo: string;
  image: string;
  tags: Tag[];
};

export type Social = { name: string; href: string; icon: string };

// Sólo metadatos de los reviews, el texto se traduce por i18n
export type ReviewMeta = {
  key: string;
  img: string;
};

export const myProjects: Project[] = [
  {
    id: 1,
    slug: "ecommerce-platform",
    href: "",
    logo: "",
    image: "/assets/projects/darkshop.png",
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "NextJS", path: "/assets/logos/nextjs.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Docker", path: "/assets/logos/docker.svg" },
      { id: 5, name: "Redis", path: "/assets/logos/redis.svg" },
      { id: 6, name: "MySQL", path: "/assets/logos/mysql.svg" },
    ],
  },
  {
    id: 2,
    slug: "social-network",
    href: "",
    logo: "",
    image: "/assets/projects/red-social.png",
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "MySQL", path: "/assets/logos/mysql.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 3,
    slug: "appointments-system",
    href: "",
    logo: "",
    image: "/assets/projects/appointments.png",
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "NextJS", path: "/assets/logos/nextjs.svg" },
      { id: 3, name: "Python", path: "/assets/logos/python.svg" },
      { id: 4, name: "Docker", path: "/assets/logos/docker.svg" },
      { id: 5, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 6, name: "MySQL", path: "/assets/logos/mysql.svg" },
    ],
  },
  {
    id: 4,
    slug: "emotion-recognition-system",
    href: "",
    logo: "",
    image: "/assets/projects/pevico.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 3, name: "CSS", path: "/assets/logos/css3.svg" },
      { id: 4, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 5,
    slug: "cyberpunk-hacker-game",
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      { id: 1, name: "NextJS", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "Gemini API", path: "/assets/logos/gemini.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 6,
    slug: "software-agency-website",
    href: "",
    logo: "",
    image: "/assets/projects/codemitsu.png",
    tags: [
      { id: 1, name: "WordPress", path: "/assets/logos/wordpress.svg" },
      { id: 2, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 3, name: "CSS", path: "/assets/logos/css3.svg" },
      { id: 4, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
];

export const mySocials: Social[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/51961319954?text=Hola%20Deyvi%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto%20de%20desarrollo%20de%20software.",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/deyvi-villegas/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/deyvi_v_/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experienceKeys = [
  "tsoluciona",
  "interiberica",
  "freelance",
] as const;

export const reviews: ReviewMeta[] = [
  { key: "jack", img: "https://robohash.org/jack" },
  { key: "jill", img: "https://robohash.org/jill" },
  { key: "john", img: "https://robohash.org/john" },
  { key: "alice", img: "https://robohash.org/alice" },
  { key: "bob", img: "https://robohash.org/bob" },
  { key: "charlie", img: "https://robohash.org/charlie" },
  { key: "dave", img: "https://robohash.org/dave" },
  { key: "eve", img: "https://robohash.org/eve" },
];
