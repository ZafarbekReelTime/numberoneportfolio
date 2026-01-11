import React, { useState } from "react";
import { datacode, datacodetype, dataImage } from "../assets/js/data";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import TechModal from "../components/TechModal";
import { useTranslation } from "react-i18next";

const Abaut = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const openModal = (item) => {
    setActiveItem(item);
    setOpen(true);
  };

  return (
    <section className={`${datacode.container} py-5`}>

      {/* Intro with typewriter */}
      <section>
        <div className="flex flex-col gap-y-3 justify-start my-5">
          <h2 className="font-medium text-lg text-center sm:text-start sm:ml-5">
            <Typewriter
              words={[t("introTypewriter")]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h2>

          <div className="w-full max-w-sm py-1 rounded-t-xl bg-orange-600/80 backdrop-blur-sm"></div>
        </div>

        <section className="space-y-8 max-sm:space-y-12">
          <div>
            <p className="font-medium text-2xl w-full max-w-[850px]">{t("paragraph1")}</p>
          </div>
          <div>
            <p className="font-medium text-2xl w-full max-w-[850px]">{t("paragraph2")}</p>
          </div>
          <div>
            <p className="font-medium text-2xl w-full max-w-[850px]">{t("paragraph3")}</p>
          </div>
        </section>

        <p className="font-medium text-2xl w-full max-w-[850px] mt-5">{t("projectsIntro")}</p>

        <Link
          to='/loyixalar'
          className="flex items-center gap-x-2 w-full max-w-36 mx-auto mt-5 justify-between bg-gray-900 border border-white/30 rounded-xl px-5 py-1 focus:outline-none"
        >
          <span className="font-medium">{t("projectsBtn")}</span>
          <img width={35} height={35} className="mt-1" src={dataImage.leave} alt="" />
        </Link>
      </section>

      {/* Tech grid */}
      <section className="max-sm:hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
          {datacodetype.map((item) => (
            <button
              key={item.id}
              onClick={() => openModal(item)}
              className="bg-gray-900 border border-white/30 rounded-xl text-center p-2 max-sm:flex max-sm:flex-col"
            >
              <img
                className="inline-block max-w-[150px] max-h-[80px] object-contain mr-5 max-sm:mr-0"
                src={item.img}
                alt=""
              />
              <button
                onClick={() => openModal(item)}
                className="bg-gray-900 border border-white/30 rounded-xl text-center max-sm:w-full p-2 hover:border-white hover:text-white/80 hover:transition-all hover:duration-200"
              >
                {t("aboutBtn")}
              </button>
            </button>
          ))}
        </div>
      </section>

      {/* modal */}
      {activeItem && (
        <TechModal
          open={open}
          onClose={() => setOpen(false)}
          data={activeItem}
        />
      )}
    </section>
  );
};

export default Abaut;
