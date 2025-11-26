import { motion } from "framer-motion";

const backendTechs = [
  { name: "Laravel", icon: "/assets/logos/laravel.svg" },
  { name: "PHP", icon: "/assets/logos/php.svg" },
  { name: "Python", icon: "/assets/logos/python.svg" },
  { name: "FastAPI", icon: "/assets/logos/fastapi.svg" },
  { name: "Node.js", icon: "/assets/logos/nodejs.svg" },
  { name: "NestJS", icon: "/assets/logos/nestjs.svg" },
  { name: "Prisma", icon: "/assets/logos/prisma.svg" },
  { name: "Strapi", icon: "/assets/logos/strapi.svg" },
  { name: "C# Sharp", icon: "/assets/logos/csharp.svg" },
  { name: ".NET", icon: "/assets/logos/dotnet.svg" },
  { name: "GraphQL", icon: "/assets/logos/graphql.svg" },
];

export default function BackendCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full p-6 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 backdrop-blur-sm border border-white/10"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-purple-500/20">
          <svg
            className="w-6 h-6 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">Backend</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {backendTechs.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-white/5 hover:border-purple-500/30 transition-all duration-300"
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
