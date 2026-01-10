import React from "react";
import { dataImage, datacode } from "../assets/js/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className={`${datacode.container} py-5`}>

      <section className="w-full max-w-7xl h-[350px] bg-[#263039] rounded-xl border border-x-2 border-y-white/50 relative lg:top-24 max-lg:bg-transparent max-lg:border-none max-lg:top-0 max-lg:right-1 max-sm:hidden">

        <h2 className="text-4xl w-full max-w-xs pt-48 text-center font-medium max-sm:hidden lg:hidden">
          {t("contactTitle")}
        </h2>

        <div className="px-10 max-lg:hidden">
          {/* Social */}
          <div>
            <h2 className="text-2xl font-medium my-5 truncate">{t("socialTitle")}</h2>
            <div className="flex flex-col gap-y-3">
              <Link className="flex items-center gap-x-3" target="_blank" to='https://github.com/ZafarbekReelTime'>
                <div className="bg-[#545454] p-2 rounded-lg">
                  <img width={60} height={60} className="p-1" src={dataImage.github} alt="" />
                </div>
                <div className="flex flex-col gap-y-1">
                  <span className="font-medium text-2xl">Github</span>
                  <p>https://github.com/ZafarbekReelTime</p>
                </div>
              </Link>

              <Link className="flex items-center gap-x-5" target="_blank" to='https://telegram/GeniusZF'>
                <div className="bg-[#1c3949] p-2 rounded-lg">
                  <img width={60} height={60} className="p-3" src={dataImage.telegram} alt="" />
                </div>
                <div className="flex flex-col gap-y-1">
                  <span className="font-medium text-2xl">Telegram</span>
                  <p>https://telegram/GeniusZF</p>
                </div>
              </Link>

              <Link className="flex items-center gap-x-5" target="_blank" to='https://instagram/zafarbek55294'>
                <div className="instagram-gradient p-2 rounded-lg">
                  <img width={60} height={60} className="p-1" src={dataImage.instagram} alt="" />
                </div>
                <div className="flex flex-col gap-y-1">
                  <span className="font-medium text-2xl">Instagram</span>
                  <p>https://instagram/zafarbek55294</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute right-8 z-10 top-1/2 max-lg:-translate-y-0 max-lg:top-0 -translate-y-1/2 w-full max-w-sm px-5 bg-[#18222b]/50 backdrop-blur-sm border border-white/30 rounded-2xl h-[80vh] max-lg:h-[70vh]">
          <h2 className="text-center mt-2 font-medium text-lg">{t("formTitle")}</h2>

          {/* Form */}
          <div className="flex flex-col gap-y-4 mt-5">
            <label htmlFor="name">
              <span className="font-medium text-sm ml-5">{t("labelName")}</span>
              <input
                className="bg-white/30 backdrop-blur-sm w-full mt-3 py-3 rounded-xl px-3 font-semibold placeholder:font-medium placeholder:text-sm placeholder:text-white/70 focus:outline-none"
                placeholder={t("placeholderName")}
                type="text"
              />
            </label>

            <label htmlFor="email">
              <span className="font-medium text-sm ml-5">{t("labelEmail")}</span>
              <input
                className="bg-white/30 backdrop-blur-sm w-full mt-3 py-3 rounded-xl px-3 font-semibold placeholder:font-medium placeholder:text-sm placeholder:text-white/70 focus:outline-none"
                placeholder={t("placeholderEmail")}
                type="text"
              />
            </label>

            <div>
              <label className="font-medium text-sm ml-5" htmlFor="message">{t("labelMessage")}</label>
              <textarea
                className="bg-white/30 backdrop-blur-sm w-full h-[125px] mt-3 py-3 rounded-xl px-3 font-semibold placeholder:font-medium placeholder:text-sm placeholder:text-white/70 focus:outline-none resize-none"
                placeholder={t("placeholderMessage")}
              ></textarea>
            </div>
          </div>

          <button className="flex items-center mt-3 gap-x-5 border rounded-xl px-5 py-3">
            <span className="font-medium">{t("submitBtn")}</span>
            <img width={24} height={24} src={dataImage.yuborish} alt="" />
          </button>
        </div>

      </section>
    </section>
  );
};

export default Contact;
