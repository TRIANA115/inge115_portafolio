import { useTranslation } from "react-i18next";
import { Timeline, type Experience } from "@/components/Timeline";
import BackendCard from "@/components/BackendCard";
import FrontendCard from "@/components/FrontendCard";
import CssCard from "@/components/CssCard";
import DatabaseCard from "@/components/DatabaseCard";
import DevOpsCard from "@/components/DevOpsCard";
import MobileCard from "@/components/MobileCard";

export default function Experiences() {
  const { t } = useTranslation();

  const experiences: Experience[] = [];

  return (
    <section
      id="experiences"
      className="w-full c-space section-spacing scroll-mt-18"
      aria-label={t("Experiences.aria_label")}
    >
      <h2 className="text-heading">{t("Experiences.title")}</h2>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BackendCard />
        <FrontendCard />
        <CssCard />
        <DatabaseCard />
        <DevOpsCard />
        <MobileCard />
      </div>
      <Timeline data={experiences} />
    </section>
  );
}
