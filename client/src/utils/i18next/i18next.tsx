import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en-US', 'zh-Hans-CN', 'zh-Hant-CN', 'km-KH', 'ar-SA'],
    ns: ['index','navigation'],
    defaultNS: "index",
    fallbackLng: "en-US",
    debug: true,
    detection: {
      order: ['path', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'querystring', 'htmlTag', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/api/locales/{{lng}}/{{ns}}.json',
      allowMultiLoading: false,
    },
  }).then(() => {
    console.warn(i18next.languages);
    i18next.languages.forEach((lang) =>
      console.warn(i18next.getDataByLanguage(lang))
    );
    if (
      i18next.languages.every((lang) => i18next.getDataByLanguage(lang) === undefined)
    ) {
      throw new Error(`Failed to load localization`);
    }
  });

  export default i18next;