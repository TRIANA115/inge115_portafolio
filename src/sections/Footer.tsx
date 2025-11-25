import { useTranslation } from "react-i18next";
import { mySocials } from "@/constants";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <div className="flex gap-2">
        <p>{t("Footer.terms")}</p>
        <p>|</p>
        <p>{t("Footer.privacy")}</p>
      </div>

      <div className="flex gap-3">
        {mySocials.map((social) => (
          <a
            key={`${social.name}-${social.href}`}
            href={social.href}
            aria-label={social.name}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <img
              src={social.icon}
              alt={social.name}
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </a>
        ))}
      </div>

      <p>
        {t("Footer.copyright", { year: new Date().getFullYear(), brand: "DarkCode" })}
      </p>
    </section>
  );
}
