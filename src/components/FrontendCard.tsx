import { motion } from "framer-motion";

const frontendTechs = [
  { name: "HTML5", icon: "/assets/logos/html5.svg" },
  { name: "JavaScript", icon: "/assets/logos/javascript.svg" },
  { name: "TypeScript", icon: "/assets/logos/typescript.svg" },
  { name: "React", icon: "/assets/logos/react.svg" },
  { name: "Next.js", icon: "/assets/logos/nextjs.svg" },
  { name: "Astro", icon: "/assets/logos/astro.svg" },
  { name: "Angular", icon: "/assets/logos/angular.svg" },
  { name: "Vue.js", icon: "/assets/logos/vuejs.svg" },
];

export default function FrontendCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full p-6 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 backdrop-blur-sm border border-white/10"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-blue-500/20">
          <svg
            className="w-6 h-6 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">Frontend</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {frontendTechs.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-white/5 hover:border-blue-500/30 transition-all duration-300"
          >
            <img
              src={tech.icon}
              alt={`${tech.name} logo`}
              className="w-8 h-8"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="text-sm font-medium text-neutral-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
