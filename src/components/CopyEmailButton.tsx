import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function CopyEmailButton() {
  const { t } = useTranslation();

  const [copied, setCopied] = useState(false);
  const email = "deyvi132002@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative w-[14rem] cursor-pointer overflow-hidden rounded-full bg-primary px-1 py-4 text-center text-sm font-extralight"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img
              src="/assets/copy-done.svg"
              width={20}
              height={20}
              alt={t("CopyEmailButton.iconAlt")}
            />
            {t("CopyEmailButton.copied")}
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img
              src="/assets/copy-done.svg"
              width={20}
              height={20}
              alt={t("CopyEmailButton.iconAlt")}
            />
            {t("CopyEmailButton.copy")}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
