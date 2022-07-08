import { NextPage } from "next";
import Domain from "@modules/Domain";
import Head from "next/head";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const DomainPage: NextPage = () => {
  const { t } = useTranslation("domain");
  const router = useRouter();

  const { domain } = router.query;

  return (
    <>
      <Head>
        <title>
          {t("dashboard")} | {domain}
        </title>
      </Head>

      <Domain />
    </>
  );
};

export default DomainPage;
