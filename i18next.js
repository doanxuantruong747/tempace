import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// import translationEN from "@/public/locales/en.json";
// import translationVi from "@/public/locales/vi.json";
// import translationChina from "@/public/locales/china.json";
// import translationKorean from "@/public/locales/korean.json";
import translationEN from "./locales/en/index";
import translationVi from "./locales/vi/index";
import translationKorean from "./locales/kr/index";

const languages = ["en", "vi", "china", "korean"];

const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVi,
  },
  // china: {
  //   translation: translationChina,
  // },
  korean: {
    translation: translationKorean,
  },
};
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    lng: "en",
    // debug: true,
    whitelist: languages,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
