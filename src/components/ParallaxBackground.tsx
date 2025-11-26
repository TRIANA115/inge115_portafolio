import {
  type MotionStyle,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 -z-50 h-screen w-full"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />

        {/* Mountain Layer 3 */}
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-0 -z-40"
        >
          <motion.div
            className="absolute inset-0"
            style={
              {
                backgroundImage: "url(/assets/mountain-3.webp)",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                y: mountain3Y,
              } as MotionStyle
            }
          />
        </motion.div>

        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={
            {
              backgroundImage: "url(/assets/planets.png)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              x: planetsX,
            } as MotionStyle
          }
        />

        {/* Mountain Layer 2 */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute inset-0 -z-20"
        >
          <motion.div
            className="absolute inset-0"
            style={
              {
                backgroundImage: "url(/assets/mountain-2.webp)",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                y: mountain2Y,
              } as MotionStyle
            }
          />
        </motion.div>

        {/* Mountain Layer 1 */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute inset-0 -z-10"
        >
          <motion.div
            className="absolute inset-0"
            style={
              {
                backgroundImage: "url(/assets/mountain-1.webp)",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                y: mountain1Y,
              } as MotionStyle
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
