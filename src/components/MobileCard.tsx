import { motion } from "framer-motion";

const mobileTechs = [
  { name: "Dart", icon: "/assets/logos/dart.svg" },
  { name: "Flutter", icon: "/assets/logos/flutter.svg" },
];

export default function MobileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 1.0 }}
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
          <div className="p-2 rounded-lg bg-cyan-500/20">
          <svg
            className="w-6 h-6 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">Mobile</h3>
      </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {mobileTechs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
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
