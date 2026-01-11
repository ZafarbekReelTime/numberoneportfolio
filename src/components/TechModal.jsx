import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const TechModal = ({ open, onClose, data }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} 
          />

          {/* Modal */}
          <motion.div
            className="fixed top-0 left-0 w-full max-w-md h-full bg-gray-900 border-r border-white/20 p-5 z-50"
            initial={{ x: "-100%" }}   // chapdan tashqarida boshlaydi
            animate={{ x: 0 }}         // chapdan keladi
            exit={{ x: "-100%" }}      // yopilganda chapga ketadi
            transition={{ type: "tween", duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-white text-xl"
            >
              ✕
            </button>

            <img
              src={data.img}
              alt=""
              className="w-24 h-24 object-contain mb-4"
            />

            <h2 className="text-2xl font-semibold mb-3">{data.title}</h2>
            <p className="text-gray-300 leading-relaxed">{data.codeAbout}</p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TechModal;
