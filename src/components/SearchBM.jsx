import React from "react";
import { dataImage } from "../assets/js/data";

const SearchBM = ({ searchQuery, setSearchQuery, inputRef }) => {
  return (
    <section className="w-full max-w-xl max-sm:max-w-md -translate-x-1/2  px-5 mx-auto fixed z-30 bottom-0 left-1/4 right-1/4 md:left-1/2 max-sm:left-1/2 max-sm:-right-1/4 bg-sky-950 py-3 border-x-2 border-x-white/30 rounded-t-2xl">
      <div className="">
        <div className="w-full relative">
          <img
            width={25}
            height={25}
            className="absolute z-10 top-2 left-3 max-sm:top-3"
            src={dataImage.qidirish}
            alt=""
          />
          <input
            ref={inputRef} // ref qo‘shildi
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-xl py-2 max-sm:py-3 rounded-xl bg-black/70 backdrop-blur-sm border-x-2 focus:outline-none px-10 placeholder:font-medium"
            placeholder="Qidirish"
            type="search"
          />
        </div>
       
      </div>
    </section>
  );
};

export default SearchBM;
