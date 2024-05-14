import "../styles/_layout.scss"
import { LanguageSelector } from "../App.jsx";
import { useContext } from "react";

export const Languages = () => {
    const { setLanguage } = useContext(LanguageSelector);
    return (
        <div className="lang">
        <button onClick={() => setLanguage("es-ES")} className="lang__btn">
            ES
        </button>
        |
        <button onClick={() => setLanguage("en-EN")} className="lang__btn">
            EN
        </button>
        |
        <button onClick={() => setLanguage("va-VA")} className="lang__btn">
            VA
        </button>
    </div>
    )
}