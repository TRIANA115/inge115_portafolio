import { motion } from "framer-motion";

const cssTechs = [
  { name: "Tailwind", icon: "/assets/logos/tailwindcss.svg" },
  { name: "Bootstrap", icon: "/assets/logos/bootstrap.svg" },
  { name: "CSS Nativo", icon: "/assets/logos/css3.svg" },
  { name: "Heroku", icon: "/assets/logos/heroku.svg" },
  { name: "Radix UI", icon: "/assets/logos/radixui.svg" },
  { name: "Bulma", icon: "/assets/logos/bulma.svg" },
  { name: "DaisyUI", icon: "/assets/logos/daisyui.svg" },
  { name: "Chakra UI", icon: "/assets/logos/chakraui.svg" },
  { name: "Mantine", icon: "/assets/logos/mantine.svg" },
];

export default function CssCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="w-full p-6 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 backdrop-blur-sm border border-white/10 hover:border-pink-500/50 hover:bg-neutral-800/60 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-pink-500/20">
          <svg
            className="w-6 h-6 text-pink-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">CSS</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {cssTechs.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-white/5 hover:border-pink-500/30 transition-all duration-300"
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
