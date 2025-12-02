import { motion } from "framer-motion";

const devopsTechs = [
  { name: "Docker", icon: "/assets/logos/docker.svg" },
  { name: "Ubuntu Server", icon: "/assets/logos/ubuntu.svg" },
  { name: "Vercel", icon: "/assets/logos/vercel.svg" },
  { name: "Netlify", icon: "/assets/logos/netlify.svg" },
];

export default function DevOpsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="w-full p-6 bg-gradient-to-b from-storm to-indigo rounded-2xl hover:-translate-y-1 duration-200 cursor-pointer relative overflow-hidden"
      style={{
        backgroundImage: "url('/assets/1_6X5M-VHXjmy3-RD2uU9aEA.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl" />
      
      {/* Contenido */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-orange-500/20">
          <svg
            className="w-6 h-6 text-orange-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">DevOps</h3>
      </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {devopsTechs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-white/5 hover:border-orange-500/30 transition-all duration-300"
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
      </div>
    </motion.div>
  );
}
