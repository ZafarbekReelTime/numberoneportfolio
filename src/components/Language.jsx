import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const Language = ({ open, close }) => {
  const { i18n, t } = useTranslation();
  const boxRef = useRef(null);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
    close();
  };

  // tashqariga bosilsa yopiladi
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        close();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, close]);

  const Switch = ({ active }) => (
    <div
      className={`border w-full max-w-[50px] p-1 rounded-full flex items-center transition-all
      ${active ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`rounded-full w-5 h-5 ${
          active ? "bg-orange-600" : "bg-white"
        }`}
      />
    </div>
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.section
          ref={boxRef}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-[270px] px-5 bg-slate-800 fixed z-30 right-0 bottom-0 md:bottom-1/2 py-3 rounded-l-lg text-white"
        >
          <h2 className="border-b font-semibold mb-5 py-1">
            {t("languageTitle")}
          </h2>

          <div className="flex flex-col gap-y-4">
            <div
              onClick={() => changeLang("uz")}
              className="flex items-center justify-between cursor-pointer"
            >
              <span>O‘zbekcha</span>
              <Switch active={i18n.language === "uz"} />
            </div>

            <div
              onClick={() => changeLang("en")}
              className="flex items-center justify-between cursor-pointer"
            >
              <span>English</span>
              <Switch active={i18n.language === "en"} />
            </div>

            <div
              onClick={() => changeLang("ru")}
              className="flex items-center justify-between cursor-pointer"
            >
              <span>Русский</span>
              <Switch active={i18n.language === "ru"} />
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Language;
