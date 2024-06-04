import "./App.css";
import { Scenes } from "./components/Scenes";
import { IntlProvider } from "react-intl";
import English from "./lang/en.json";
import Spanish from "./lang/es.json";
import Valencia from "./lang/va.json";
import { createContext, useEffect, useState } from "react";
import { Layout } from "./pages/Layout";
import { Start } from "./pages/Start";
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

export const LanguageSelector = createContext(null);

function App() {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState();

  const params = new URLSearchParams(window.location.search);

  const lang = params.get('lang');

  useEffect(() => {

    if (lang != null) {
      setLocale(lang);
    } else {
      setLocale("va")
    }

  }, [])

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

  
  const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Start />}></Route>
      <Route path="content" element={<Scenes />}></Route>
  </Route>
  ))

  return (
    <>
      <LanguageSelector.Provider
        value={{ language: locale, setLanguage: setLocale }}
      >
        <IntlProvider messages={messages} locale={locale}>
          <RouterProvider router={appRouter}/>
        </IntlProvider>
      </LanguageSelector.Provider>
    </>
  );
}

export default App;
