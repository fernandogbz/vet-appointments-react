import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="container mx-auto mt-5">
      <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
        {t("header.title")}{" "}
        <span className="text-indigo-600">{t("header.vet")}</span>
      </h1>

      <p className="mt-5 text-center mb-2 uppercase font-semibold text-xl">
        {t("header.slogan")}
      </p>
      <p className="mt-5 text-center text-xl">{t("header.compromise")}</p>
    </header>
  );
};

export default Header;
