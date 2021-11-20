import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// needed for translations
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { CONSTANTS } from "./utils/constants";
import { client } from "./mqtt";
import RouterComponent from "./routing/router";
i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ru"],
    fallbackLng: "en",
    debug: false,
    // Options for language detector
    detection: {
      order: ["path", "cookie", "htmlTag"],
      // caches: ["cookie"],
    },
    react: { useSuspense: false },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

i18next.changeLanguage(CONSTANTS.LANGUAGE.ENGLISH);
//This sifsfsadfdasfds
ReactDOM.render(
  // <Suspense fallback={loadingMarkup}>
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RouterComponent></RouterComponent>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  // </Suspense>,
  document.getElementById("root")
);
