import { OrbitingCircles } from "@/components/OrbitingCircles";

const skills = [
  "openia",
  "redis",
  "docker",
  "python",
  "css3",
  "nextjs",
  "laravel",
  "git",
  "html5",
  "javascript",
  "microsoft",
  "react",
  "mysql",
  "tailwindcss",
  "vitejs",
  "wordpress",
] as const;

export function Frameworks() {
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40} radius={175}>
        {skills.map((s) => (
          <Icon
            key={s}
            src={`/assets/logos/${s}.svg`}
            alt={`${s} logo`}
            size={40}
          />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={25} radius={100} reverse>
        {[...skills].reverse().map((s) => (
          <Icon
            key={`inner-${s}`}
            src={`/assets/logos/${s}.svg`}
            alt={`${s} logo`}
            size={25}
          />
        ))}
      </OrbitingCircles>
    </div>
  );
}

function Icon({ src, alt, size }: { src: string; alt: string; size: number }) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{ width: "auto", height: "auto" }}
      className="rounded-sm transition-transform duration-200 hover:scale-110"
    />
  );
}
