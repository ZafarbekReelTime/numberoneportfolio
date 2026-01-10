import React from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { dataImage } from "../assets/js/data";

const Sidebar = ({ isOpen, close }) => {
  const { t, i18n } = useTranslation();

  const getFlag = () => {
    switch (i18n.language) {
      case "uz":
        return dataImage.uzbekistan;
      case "en":
        return dataImage.english;
      case "ru":
        return dataImage.russia;
      default:
        return dataImage.uzbekistan;
    }
  };

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
    close();
  };

  const Switch = ({ active }) => (
    <div
      className={`border w-full max-w-[50px] p-1 rounded-full flex items-center transition-all
      ${active ? "justify-end" : "justify-start"}`}
    >
      <div className={`rounded-full w-5 h-5 ${active ? "bg-orange-600" : "bg-white"}`} />
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="w-full max-w-[450px] px-5 py-3 fixed left-0 top-0 h-screen border-r-2 rounded-r-xl bg-gray-900 overflow-y-scroll z-50"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium">
              {t("sidebar.pages")}
            </h2>
            <button
              onClick={close}
              className="bg-gray-900 border border-white/30 rounded-full p-1 hover:border-white/60"
            >
              <img width={40} height={40} className="p-1" src={dataImage.leave} alt="close" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-y-5 text-center font-medium bg-black/40 py-5 px-10 my-4 rounded-xl">
            <NavLink to="/">{t("nav.home")}</NavLink>
            <NavLink to="/haqida">{t("nav.about")}</NavLink>
            <NavLink to="/loyixalar">{t("nav.projects")}</NavLink>
            <NavLink to="/skills">{t("nav.skills")}</NavLink>
          </nav>

          {/* Language title */}
          <div className="flex items-center justify-between border-b-2 py-2 px-6 mb-5">
            <img width={35} height={35} src={getFlag()} alt="language" className="rounded-full" />
            <h2 className="font-semibold">{t("sidebar.language")}</h2>
          </div>

          {/* Language switch */}
          <div className="flex flex-col gap-y-4">
            <div onClick={() => changeLang("uz")} className="flex justify-between cursor-pointer">
              <span>{t("language.uz")}</span>
              <Switch active={i18n.language === "uz"} />
            </div>

            <div onClick={() => changeLang("en")} className="flex justify-between cursor-pointer">
              <span>{t("language.en")}</span>
              <Switch active={i18n.language === "en"} />
            </div>

            <div onClick={() => changeLang("ru")} className="flex justify-between cursor-pointer">
              <span>{t("language.ru")}</span>
              <Switch active={i18n.language === "ru"} />
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
