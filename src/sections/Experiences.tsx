import { useTranslation } from "react-i18next";
import { Timeline, type Experience } from "@/components/Timeline";
import { experienceKeys } from "@/constants";

export default function Experiences() {
  const { t } = useTranslation();

  const experiences: Experience[] = experienceKeys.map((key) => ({
    title: t(`Experiences.items.${key}.title`),
    job: t(`Experiences.items.${key}.job`),
    date: t(`Experiences.items.${key}.date`),
    contents: t(`Experiences.items.${key}.contents`, {
      returnObjects: true,
    }) as string[],
  }));

  return (
    <section
      id="experiences"
      className="w-full c-space section-spacing scroll-mt-18"
      aria-label={t("Experiences.aria_label")}
    >
      <h2 className="text-heading">{t("Experiences.title")}</h2>
      <Timeline data={experiences} />
    </section>
  );
}
