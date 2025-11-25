import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Project from "@/components/Project";
import { myProjects } from "@/constants";

export default function Projects() {
  const { t } = useTranslation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      x.set(e.clientX + 20);
      y.set(e.clientY + 20);
    };

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX + 20);
      y.set(e.clientY + 20);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return (
    <section
      id="work"
      aria-label={t("Projects.aria_label")}
      className="relative c-space section-spacing scroll-mt-22"
    >
      <h2 className="text-heading">{t("Projects.title")}</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      {preview && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-50 rounded-lg shadow-lg"
          style={{ x: springX, y: springY }}
          aria-hidden="true"
        >
          <img
            src={preview}
            alt={t("Projects.preview_alt")}
            className="h-48 w-80 rounded-lg object-cover"
          />
        </motion.div>
      )}
    </section>
  );
}
