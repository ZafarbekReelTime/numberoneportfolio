import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { dataImage, datacode } from "../assets/js/data";
import Language from "./Language";
import Connection from "./Connection";
import Sidebar from "./Sidebar";
import { useTranslation } from "react-i18next";

const Xeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpeni, setIsOpeni] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <header className="border-b rounded-xl border-b-gray-500">
      <section className={`${datacode.container} py-3 flex items-center justify-between`}>
        {/* Logo */}
        <Link className="flex items-center gap-x-2 focus:outline-none" to='/'>
          <img width={45} height={45} className="p-1" src={dataImage.logo} alt="logo" />
          <p className="font-medium text-2xl">
            Fire<span>Dev</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-x-4 max-sm:hidden">
          <nav className="flex items-center gap-x-7 font-medium bg-black/40 backdrop-blur-sm py-3 px-7 rounded-xl border-x">
            <NavLink className='focus:outline-none' to='/'>{t("home")}</NavLink>
            <NavLink className='focus:outline-none' to='/haqida'>{t("about")}</NavLink>
            <NavLink className='focus:outline-none' to='/loyixalar'>{t("project")}</NavLink>
            <NavLink className='focus:outline-none' to='/boglanish'>{t("contact")}</NavLink>
          </nav>

          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="border-2 rounded-full"
            >
              <img
                width={35}
                height={35}
                src={getFlag()}
                alt="language"
                className="rounded-full"
              />
            </button>

            <Language open={open} close={() => setOpen(false)} />
          </div>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-x-2 md:hidden">
          {/* Connect button */}
          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-gray-900 border border-white/30 rounded-xl px-3 py-2 font-medium hover:border-white/60 hover:bg-black/30 hover:backdrop-blur-sm transition-all duration-200"
            >
              {t("connect")}
            </button>
            <Connection isVisible={isOpen} onClose={() => setIsOpen(false)} />
          </div>

          {/* Sidebar button */}
          <div>
            <button
              onClick={() => setIsOpeni(true)}
              className="bg-gray-900 border border-white/30 rounded-xl p-[7px] font-medium hover:border-white/60 hover:bg-black/30 hover:backdrop-blur-sm transition-all duration-200"
            >
              <img width={24} height={24} src={dataImage.menu} alt="menu" />
            </button>
            <Sidebar isOpen={isOpeni} close={() => setIsOpeni(false)} />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Xeader;
