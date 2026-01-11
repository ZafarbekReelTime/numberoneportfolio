import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { datacode, datacodetype } from '../assets/js/data';

const Skills = () => {

const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const openModal = (item) => {
    setActiveItem(item);
    setOpen(true);
  };

    return (
        <section className={`${datacode.container}`}>
            <section>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
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
                                className="bg-gray-900 border border-white/30 rounded-xl text-center p-2 hover:border-white hover:text-white/80 hover:transition-all hover:duration-200"
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
    )
}

export default Skills