/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocale, useTranslations } from "next-intl";
import PageLayout from "@/components/PageLayout";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "@/components/LocalSwitcher";

export default function Index() {
  const t = useTranslations("Index");
  const locale = useLocale();

  return (
    <PageLayout title={t("title")}>
      <p>{t("description")}</p>
      <LocaleSwitcher />
      <p>
        <Link href="/about" locale={locale as any}>
          {t("navigateToAbout")}
        </Link>
      </p>
    </PageLayout>
  );
}
