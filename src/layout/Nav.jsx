import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useData } from "../contexts/data-hooks";
import NavList from "../components/NavList";
import { v4 } from "uuid";

function Navigation() {
    const [toggleOn, setToggleOn] = useState(false);
    const { buttons, icons } = useData();

    const { bars, x } = icons;
    const { navBtn } = buttons;

    const handleToggle = (e) => {
        setToggleOn(!toggleOn);
    };

    return (
        <nav className="nav container">
            <a href="#home" className="nav__logo">
                DagmawiAsegid
            </a>

            <div
                className={toggleOn ? "nav__menu" : "nav__hidden"}
                id="nav_menu"
            >
                <ul className="nav__list grid">
                    {navBtn.map((btn) => (
                        <NavList key={v4()} btn={btn} />
                    ))}
                </ul>
                <FontAwesomeIcon
                    icon={x}
                    className="nav__close"
                    id="nav-close"
                    onClick={handleToggle}
                />
            </div>

            <div className="nav__btn">
                <div
                    className="nav__toggle"
                    id="nav_toggle"
                    onClick={handleToggle}
                >
                    <FontAwesomeIcon className="main__icon" icon={bars} />
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
