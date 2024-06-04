import { Languages } from "../components/Languages";
import logo from "../../public/assets/img/logo.png";
import tecnocasa from "../../public/assets/img/tecnocasa.png";
import electrodepot from "../../public/assets/img/electrodepot.png"
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <>
            <Languages></Languages>
                <div className="header">
                <img src={logo} alt="" className="header__logo"/>
                <div className="header__sponsor">
                    <img src={tecnocasa} alt="" className="header__sponsor--tecnocasa" />
                    <img src={electrodepot} alt="" className="header__sponsor--electrodepot" />
                </div>

            </div>
            <Outlet></Outlet>
        </>
    )
}