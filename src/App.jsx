import "./App.css";
import { Languages } from "./components/Languages";
import logo from "./assets/img/logo.png";
import { Scenes } from "./components/Scenes";
import { IntlProvider } from "react-intl";
import English from "./lang/en.json";
import Spanish from "./lang/es.json";
import Valencia from "./lang/va.json";
import { createContext, useEffect, useState } from "react";

export const LanguageSelector = createContext(null);

function App() {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState();

  const params = new URLSearchParams(window.location.search);

  const lang = params.get('lang');

  useEffect(() => {

    if(lang != null) {
      setLocale(lang);
    } else{
      setLocale("va")
    }

  },[])

  useEffect(() => {
    switch (locale) {
      case "es":
        setMessages(Spanish);
        break;
      case "en":
        setMessages(English);
        break;
      case "va":
        setMessages(Valencia);
        break;
    }
  }, [locale]);

  return (
    <>
      <LanguageSelector.Provider
        value={{ language: locale, setLanguage: setLocale }}
      >
        <IntlProvider messages={messages} locale={locale}>
          <Languages></Languages>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <Scenes></Scenes>
        </IntlProvider>
      </LanguageSelector.Provider>
    </>
  );
}

export default App;
