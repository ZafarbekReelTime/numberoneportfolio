import React, { useState } from "react";
import { dataImage, datacode } from "../assets/js/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

/* 🔴 O'ZINGNIKI QO'Y */
const BOT_TOKEN = "7674748817:AAGHRO9EaK-g6t52YF6TVWJ3_s6vUWHTijQ";
const CHAT_ID = "7764198922";

const Contact = () => {
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
    } catch (err) {
      alert("Xatolik yuz berdi ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`${datacode.container} py-5`}>

      <section className="w-full max-w-7xl h-[350px] lg:h-[335px] bg-[#263039] rounded-xl border border-x-2 border-y-white/50 relative lg:top-24 max-lg:bg-transparent max-lg:border-none max-lg:top-0 max-lg:right-1 max-sm:hidden">

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
                  <img width={60} className="p-1" src={dataImage.github} alt="" />
                </div>
                <div>
                  <span className="font-medium text-2xl">Github</span>
                  <p>github.com/ZafarbekReelTime</p>
                </div>
              </Link>

              <Link className="flex items-center gap-x-5" target="_blank" to='https://t.me/GeniusZF'>
                <div className="bg-[#1c3949] p-2 rounded-lg">
                  <img width={60} className="p-3" src={dataImage.telegram} alt="" />
                </div>
                <div>
                  <span className="font-medium text-2xl">Telegram</span>
                  <p>t.me/GeniusZF</p>
                </div>
              </Link>

              <Link className="flex items-center gap-x-5" target="_blank" to='https://instagram.com/zafarbek55294'>
                <div className="instagram-gradient p-2 rounded-lg">
                  <img width={60} className="p-1" src={dataImage.instagram} alt="" />
                </div>
                <div>
                  <span className="font-medium text-2xl">Instagram</span>
                  <p>instagram.com/zafarbek55294</p>
                </div>
              </Link>

            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="absolute right-8 z-10 top-1/2 -translate-y-1/2 w-full max-w-sm px-5 bg-[#18222b]/50 backdrop-blur-sm border border-white/30 rounded-2xl h-[80vh]">

          <h2 className="text-center mt-2 font-medium text-lg lg:pt-2">
            {t("formTitle")}
          </h2>

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
              className="bg-white/30 w-full h-[125px] py-3 rounded-xl px-3 font-semibold placeholder:text-white/70 outline-none resize-none"
            />

          </div>

          <button
            disabled={loading}
            onClick={sendToTelegram}
            className="flex items-center mt-3 gap-x-5 border rounded-xl px-5 py-3 w-full max-w-44 justify-center"
          >
            {loading ? "Yuborilmoqda..." : t("submitBtn")}
            <img width={24} src={dataImage.yuborish} alt="" />
          </button>

        </div>

      </section>
    </section>
  );
};

export default Contact;
