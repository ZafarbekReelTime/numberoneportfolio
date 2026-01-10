import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Usetitle = (key) => {
 const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t(key)}`;
  }, [key, t]);
};

export default Usetitle;
