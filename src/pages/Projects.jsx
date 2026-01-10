import React, { useState, useEffect, useRef } from "react";
import { datacode, dataImage, ProjectAPI } from "../assets/js/data";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import SearchBM from "../components/SearchBM";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef(null);

  const filteredProjects = ProjectAPI.filter((item) =>
    item.imgName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "/") {
        e.preventDefault();
        setOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section>
      <section className={`${datacode.container} py-3`}>
        {/* Typewriter */}
        <div className="flex flex-col gap-y-3 my-5">
          <h2 className="font-medium text-center sm:text-start sm:ml-5">
            <Typewriter
              words={[t("projects.title"), t("projects.searchHint")]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h2>
          <div className="w-full max-w-sm py-1 rounded-t-xl bg-orange-600/50 backdrop-blur-sm"></div>
        </div>

        {/* Project Cards */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {filteredProjects.slice(0, 10).map((item) => (
              <div key={item.imgName} className="flex flex-col gap-y-3">
                {/* Top Buttons */}
                <div className="flex items-center justify-between bg-black/30 backdrop-blur-sm p-2 rounded-xl border-x border-white/50">
                  <button className="bg-gray-900 border border-white/30 rounded-xl font-medium hover:border-white/60 hover:bg-black/30 hover:backdrop-blur-sm transition-all duration-200">
                    <img width={35} height={35} className="p-2" src={dataImage.eye} alt="" />
                  </button>

                  <div className="flex items-center gap-x-5">
                    <Link
                      className="bg-gray-900 border border-white/30 rounded-xl font-medium hover:border-white/60 hover:bg-black/30 hover:backdrop-blur-sm transition-all duration-200"
                      to="/"
                    >
                      <img width={35} height={35} className="p-2" src={dataImage.linkd} alt="" />
                    </Link>
                    <Link
                      className="bg-gray-900 border border-white/30 rounded-xl font-medium hover:border-white/60 hover:bg-black/30 hover:backdrop-blur-sm transition-all duration-200"
                      to="/"
                    >
                      <img width={35} height={35} className="p-2" src={dataImage.github} alt="" />
                    </Link>
                  </div>
                </div>

                {/* Card Image */}
                <div>
                  <img className="rounded-lg border border-white/50" src={item.cardImage} alt="" />
                  <div className="flex items-center justify-between p-3">
                    <p className="font-medium">{item.imgName}</p>
                    <div className="flex items-center gap-x-2">
                      <span className="font-semibold text-sm">
                        {item.preparationtype === "Oson"
                          ? t("projects.difficulty.easy")
                          : item.preparationtype === "O'rta"
                          ? t("projects.difficulty.medium")
                          : t("projects.difficulty.hard")}
                      </span>
                      <div
                        className={`p-1 rounded-full mt-1 ${
                          item.preparationtype === "Oson"
                            ? "bg-green-500"
                            : item.preparationtype === "O'rta"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Code Types */}
                  <div className="flex flex-wrap gap-2 px-2">
                    {item.codeType.map((ct, index) => (
                      <p key={index} className="font-medium text-sm text-orange-600">
                        {ct}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 gap-2">
            <span className="text-2xl font-medium">{t("projects.notFound")}</span>
            <img width={50} height={50} className="p-1" src={dataImage.nodata} alt="" />
          </div>
        )}
      </section>

      {/* Search Button */}
      <div>
        <button
          onClick={() => setOpen(!open)}
          className={`fixed left-1/2 -translate-x-1/2 -translate-y-1/2
          border border-b-0 rounded-full rounded-b-none
          bg-black/50 border-white/30 backdrop-blur-sm
          hover:border-white transition-all duration-200 z-40 ${
            open ? "bottom-11 max-sm:bottom-12" : "bottom-0"
          }`}
        >
          <img
            width={40}
            height={40}
            src={dataImage.top}
            alt=""
            className={`p-1 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
          />
        </button>

        {open && (
          <SearchBM
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            inputRef={inputRef}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
