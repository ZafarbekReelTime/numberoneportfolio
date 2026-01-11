import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dataImage } from "../assets/js/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../assets/css/instagram.css";

/* 🔴 O'ZINGNIKI QO'Y */
const BOT_TOKEN = "7674748817:AAGHRO9EaK-g6t52YF6TVWJ3_s6vUWHTijQ";
const CHAT_ID = "7764198922";

const Connection = ({ isVisible, onClose }) => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendToTelegram = async () => {
    if (!name || !email || !message) {
      alert("Barcha maydonlarni to‘ldiring!");
      return;
    }

    setLoading(true);

    const text = `
📩 YANGI XABAR

👤 Ism: ${name}
📧 Email: ${email}
💬 Xabar: ${message}
`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
        }),
      });

      alert("Xabar yuborildi ✅");

      setName("");
      setEmail("");
      setMessage("");
      onClose();
    } catch (err) {
      alert("Xatolik yuz berdi ❌");
    } finally {
      setLoading(false);
    }
  };

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
            className="w-full max-w-[450px] mx-auto px-5 h-[85vh] bg-gray-900 overflow-y-scroll fixed left-0 bottom-0 z-50 border-t rounded-t-xl py-3"
          >
            <h2 className="text-center mt-2 font-medium text-lg">
              {t("formTitle")}
            </h2>

            {/* FORM */}
            <div className="flex flex-col gap-y-4 mt-5">

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("placeholderName")}
                className="bg-white/30 w-full py-3 rounded-xl px-3 font-semibold placeholder:text-white/70 outline-none"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("placeholderEmail")}
                className="bg-white/30 w-full py-3 rounded-xl px-3 font-semibold placeholder:text-white/70 outline-none"
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("placeholderMessage")}
                className="bg-white/30 w-full h-[180px] py-3 rounded-xl px-3 font-semibold placeholder:text-white/70 outline-none resize-none"
              />

            </div>

            <button
              disabled={loading}
              onClick={sendToTelegram}
              className="flex items-center justify-center mt-4 gap-x-5 border rounded-xl px-5 py-3 w-full"
            >
              {loading ? "Yuborilmoqda..." : t("submitBtn")}
              <img width={24} src={dataImage.yuborish} alt="" />
            </button>

            {/* SOCIAL */}
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
                    <img width={60} className="p-1" src={dataImage.github} />
                  </div>
                  <div>
                    <span className="font-medium text-2xl">Github</span>
                    <p>github.com/ZafarbekReelTime</p>
                  </div>
                </Link>

                <Link
                  className="flex items-center gap-x-5"
                  target="_blank"
                  to="https://t.me/GeniusZF"
                >
                  <div className="bg-[#1c3949] p-2 rounded-lg">
                    <img width={60} className="p-3" src={dataImage.telegram} />
                  </div>
                  <div>
                    <span className="font-medium text-2xl">Telegram</span>
                    <p>t.me/GeniusZF</p>
                  </div>
                </Link>

                <Link
                  className="flex items-center gap-x-5"
                  target="_blank"
                  to="https://instagram.com/zafarbek55294"
                >
                  <div className="instagram-gradient p-2 rounded-lg">
                    <img width={60} className="p-1" src={dataImage.instagram} />
                  </div>
                  <div>
                    <span className="font-medium text-2xl">Instagram</span>
                    <p>instagram.com/zafarbek55294</p>
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
