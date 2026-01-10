import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dataImage } from "../assets/js/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../assets/css/instagram.css";

const Connection = ({ isVisible, onClose }) => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Modal */}
          <motion.section
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full max-w-[450px] mx-auto px-5 h-[84vh] bg-gray-900 overflow-y-scroll fixed left-0 bottom-0 z-50 border-t rounded-t-xl py-3"
          >
            <h2 className="text-center mt-2 font-medium text-lg">
              {t("formTitle")}
            </h2>

            {/* Form */}
            <div className="flex flex-col gap-y-4 mt-5">
              <label>
                <span className="font-medium text-sm ml-5">
                  {t("labelName")}
                </span>
                <input
                  className="bg-white/30 backdrop-blur-sm w-full mt-3 py-3 rounded-xl px-3 font-semibold placeholder:font-medium placeholder:text-sm placeholder:text-white/70 focus:outline-none"
                  placeholder={t("placeholderName")}
                  type="text"
                />
              </label>

              <label>
                <span className="font-medium text-sm ml-5">
                  {t("labelEmail")}
                </span>
                <input
                  className="bg-white/30 backdrop-blur-sm w-full mt-3 py-3 rounded-xl px-3 font-semibold placeholder:font-medium placeholder:text-sm placeholder:text-white/70 focus:outline-none"
                  placeholder={t("placeholderEmail")}
                  type="text"
                />
              </label>

              <div>
                <label className="font-medium text-sm ml-5">
                  {t("labelMessage")}
                </label>
                <textarea
                  className="bg-white/30 backdrop-blur-sm w-full h-[250px] mt-3 py-3 rounded-xl px-3 font-semibold placeholder:font-medium placeholder:text-sm placeholder:text-white/70 focus:outline-none resize-none"
                  placeholder={t("placeholderMessage")}
                />
              </div>
            </div>

            <button className="flex items-center mt-3 gap-x-5 border rounded-xl px-5 py-3">
              <span className="font-medium">{t("submitBtn")}</span>
              <img width={24} height={24} src={dataImage.yuborish} alt="" />
            </button>

            {/* Social */}
            <div>
              <h2 className="text-2xl font-medium my-5 text-end truncate">
                {t("socialTitle")}
              </h2>

              <div className="flex flex-col gap-y-3">
                <Link
                  className="flex items-center gap-x-3"
                  target="_blank"
                  to="https://github.com/ZafarbekReelTime"
                >
                  <div className="bg-[#545454] p-2 rounded-lg">
                    <img width={60} height={60} className="p-1" src={dataImage.github} alt="" />
                  </div>
                  <div>
                    <span className="font-medium text-2xl">Github</span>
                    <p>https://github.com/ZafarbekReelTime</p>
                  </div>
                </Link>

                <Link
                  className="flex items-center gap-x-5"
                  target="_blank"
                  to="https://telegram/GeniusZF"
                >
                  <div className="bg-[#1c3949] p-2 rounded-lg">
                    <img width={60} height={60} className="p-3" src={dataImage.telegram} alt="" />
                  </div>
                  <div>
                    <span className="font-medium text-2xl">Telegram</span>
                    <p>https://telegram/GeniusZF</p>
                  </div>
                </Link>

                <Link
                  className="flex items-center gap-x-5"
                  target="_blank"
                  to="https://instagram/zafarbek55294"
                >
                  <div className="instagram-gradient p-2 rounded-lg">
                    <img width={60} height={60} className="p-1" src={dataImage.instagram} alt="" />
                  </div>
                  <div>
                    <span className="font-medium text-2xl">Instagram</span>
                    <p>https://instagram/zafarbek55294</p>
                  </div>
                </Link>
              </div>
            </div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
};

export default Connection;
