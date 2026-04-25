import { MessageCircle } from "lucide-react";

import { homeData } from "../../data/homeData";

import style from "./Navbar.module.css";

function Navbar() {

    const { logo, cta, whatsappNumber, message } = homeData.navbar;
    const whatsappLink = whatsappNumber && message
        ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
        : "#";
        
    return (
        <header className={style.navbar}>
            <div className={style.navbarcontainer}>

                <h1 className={style.titulo}>{logo}</h1>

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.btnwhatsapp}
                >
                    <MessageCircle size={18} className={style.logo} />
                    {cta}
                </a>

            </div>
        </header>
    );
}

export default Navbar;