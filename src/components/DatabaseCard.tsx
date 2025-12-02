import { motion } from "framer-motion";

const databaseTechs = [
  { name: "MySQL", icon: "/assets/logos/mysql.svg" },
  { name: "PostgreSQL", icon: "/assets/logos/postgresql.svg" },
  { name: "MongoDB", icon: "/assets/logos/mongodb.svg" },
];

export default function DatabaseCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="w-full p-6 bg-gradient-to-b from-storm to-indigo rounded-2xl hover:-translate-y-1 duration-200 cursor-pointer relative overflow-hidden"
      style={{
        backgroundImage: "url('/img/Dog Man GIF by Pluralsight.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/30 rounded-2xl" />
      
      {/* Contenido */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-green-500/20">
          <svg
            className="w-6 h-6 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">Database</h3>
      </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {databaseTechs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-white/5 hover:border-green-500/30 transition-all duration-300"
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
