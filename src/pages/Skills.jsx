import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { datacode, datacodetype } from '../assets/js/data';
import TechModal from '../components/TechModal';
import { Typewriter } from 'react-simple-typewriter';

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
                <h2 className="font-medium text-lg text-center sm:text-start sm:ml-5">
                    <Typewriter
                        words={[t("skills")]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1200}
                    />
                </h2>
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