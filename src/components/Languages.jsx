import "../styles/_layout.scss"
import { LanguageSelector } from "../App.jsx";
import { useContext } from "react";
import valencia from "../assets/img/valencia.svg"
import spain from "../assets/img/spain.svg"
import uk from "../assets/img/uk.svg"

export const Languages = () => {
    const { setLanguage } = useContext(LanguageSelector);
    return (
        <div className="lang">
            <img src={spain} alt="" onClick={() => setLanguage("es")}/>
            <img src={uk} alt="" onClick={() => setLanguage("en")}/>
            <img src={valencia} alt="" onClick={() => setLanguage("va")}/>
        </div>
    )
}
