import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useId, useState } from "react";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mobileNavId = useId();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <motion.div
      className="fixed left-0 right-0 z-20"
      initial={false}
      animate={{ top: isMobile ? 0 : scrolled ? 0 : 16 }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
    >
      <motion.div
        className="backdrop-blur-lg bg-primary/40"
        style={{ width: "100%" }}
        initial={false}
        animate={{
          maxWidth: isMobile ? "100%" : scrolled ? "100%" : "80rem",
          borderRadius: isMobile ? "0rem" : scrolled ? "0rem" : "9999px",
          marginLeft: isMobile ? "0rem" : scrolled ? "0rem" : "auto",
          marginRight: isMobile ? "0rem" : scrolled ? "0rem" : "auto",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
      >
        <div className="c-space">
          <div className="grid grid-cols-2 md:grid-cols-[auto_1fr_auto] items-center py-2">
            <div className="flex items-center gap-2 col-start-1">
              <a href="#home" className="flex items-center gap-2 text-white">
                <img
                  src="/assets/logos/darkcode.png"
                  alt="DarkCode logo"
                  width={32}
                  height={32}
                  className="h-7 w-7"
                />
                <span className="text-xl font-bold">DarkCode</span>
              </a>
            </div>

            <nav className="hidden md:flex justify-center col-start-2">
              <ul className="nav-ul flex items-center gap-6">
                <li className="nav-li">
                  <a className="nav-link text-neutral-300" href="#home">
                    {t("Navbar.home")}
                  </a>
                </li>
                <li className="nav-li">
                  <a className="nav-link text-neutral-300" href="#about">
                    {t("Navbar.about")}
                  </a>
                </li>
                <li className="nav-li">
                  <a className="nav-link text-neutral-300" href="#work">
                    {t("Navbar.work")}
                  </a>
                </li>
                <li className="nav-li">
                  <a className="nav-link text-neutral-300" href="#experiences">
                    {t("Navbar.experiences")}
                  </a>
                </li>
                <li className="nav-li">
                  <a className="nav-link text-neutral-300" href="#contact">
                    {t("Navbar.contact")}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="ml-auto flex items-center col-start-3 gap-2">
              <div className="hidden md:flex gap-2">
                <button
                  onClick={() => changeLanguage("es")}
                  className={`px-3 py-1 rounded ${i18n.language === "es" ? "bg-white/20" : "bg-white/5"} text-sm`}
                >
                  ES
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`px-3 py-1 rounded ${i18n.language === "en" ? "bg-white/20" : "bg-white/5"} text-sm`}
                >
                  EN
                </button>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden ml-auto flex cursor-pointer text-neutral-200 hover:text-white"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls={mobileNavId}
              >
                <img
                  src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
                  alt="Menu"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Panel móvil */}
        {isOpen && (
          <motion.div
            className="block md:hidden text-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ maxHeight: "100vh" }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-primary/40 rounded-none">
              <nav id={mobileNavId} className="pb-3">
                <ul className="nav-ul flex flex-col items-center gap-4">
                  <li className="nav-li">
                    <a className="nav-link" href="#home" onClick={() => setIsOpen(false)}>
                      {t("Navbar.home")}
                    </a>
                  </li>
                  <li className="nav-li">
                    <a className="nav-link" href="#about" onClick={() => setIsOpen(false)}>
                      {t("Navbar.about")}
                    </a>
                  </li>
                  <li className="nav-li">
                    <a className="nav-link" href="#work" onClick={() => setIsOpen(false)}>
                      {t("Navbar.work")}
                    </a>
                  </li>
                  <li className="nav-li">
                    <a className="nav-link" href="#experiences" onClick={() => setIsOpen(false)}>
                      {t("Navbar.experiences")}
                    </a>
                  </li>
                  <li className="nav-li">
                    <a className="nav-link" href="#contact" onClick={() => setIsOpen(false)}>
                      {t("Navbar.contact")}
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex justify-center gap-2 pb-4">
                <button
                  onClick={() => changeLanguage("es")}
                  className={`px-3 py-1 rounded ${i18n.language === "es" ? "bg-white/20" : "bg-white/5"} text-sm`}
                >
                  ES
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`px-3 py-1 rounded ${i18n.language === "en" ? "bg-white/20" : "bg-white/5"} text-sm`}
                >
                  EN
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
