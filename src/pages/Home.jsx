import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { dataImage } from "../assets/js/data";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section>
      <section className="py-5 max-sm:py-10 md:flex md:flex-col md:py-16 md:gap-y-3">

        {/* Greeting */}
        <h1
          className="text-center text-4xl w-full max-w-md mx-auto text-orange-600 font-medium italic"
          dangerouslySetInnerHTML={{ __html: t("greeting") }}
        />

        {/* Description */}
        <p className="w-full max-w-4xl mx-auto text-center font-medium mt-5">
          {t("description")}
        </p>

        {/* Button for mobile */}
        <Link
          to="/haqida"
          className="flex items-center w-full max-w-36 mx-auto mt-5 justify-between bg-gray-900 border border-white/30 rounded-xl px-5 py-1 md:hidden focus:outline-none"
        >
          <span className="font-medium">{t("aboutBtn")}</span>
          <img width={35} height={35} className="mt-1" src={dataImage.leave} alt="" />
        </Link>

        {/* Button for desktop */}
        <div className="flex items-center gap-3 mt-8 justify-center max-sm:hidden">
          <span className="font-medium text-xl">
            {t("aboutText")}
          </span>
          <Link
            to="/haqida"
            className="bg-gray-900 border border-white/30 rounded-xl px-3 py-1 max-sm:py-2 focus:outline-none"
          >
            {t("aboutBtn")}
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Home;
