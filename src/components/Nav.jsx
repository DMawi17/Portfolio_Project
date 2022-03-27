import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function Navigation() {
    const [toggleOn, setToggleOn] = useState(false);

    const handleToggle = (e) => {
        setToggleOn(!toggleOn);
    };

    return (
        <div className="nav container">
            <Link to="/" className="nav__logo">
                DMawi
            </Link>
            {toggleOn && (
                <div className="nav__menu" id="nav_menu">
                    <ul className="nav__list grid" onClick={handleToggle}>
                        <li className="nav_item">
                            <Link to="/" className="nav__link">
                                <FontAwesomeIcon
                                    icon={solid("house-chimney")}
                                    className="nav__icon"
                                    // className="uil uil-home"
                                />{" "}
                                Home
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/about" className="nav__link">
                                <FontAwesomeIcon
                                    icon={solid("user")}
                                    // className="uil uil-user"
                                    className="nav__icon"
                                />{" "}
                                About
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/skills" className="nav__link">
                                <FontAwesomeIcon
                                    icon={solid("file-alt")}
                                    // className="uil uil-file-alt"
                                    className="nav__icon"
                                />{" "}
                                Skills
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/service" className="nav__link">
                                <FontAwesomeIcon
                                    icon={solid("briefcase")}
                                    // className="uil uil-briefcase-alt"
                                    className="nav__icon"
                                />{" "}
                                Service
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/portfolio" className="nav__link">
                                <FontAwesomeIcon
                                    icon={solid("image")}
                                    // className="uil uil-scenery"
                                    className="nav__icon"
                                />{" "}
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/portfolio" className="nav__link">
                                <FontAwesomeIcon
                                    icon={solid("paper-plane")}
                                    // className="uil uil-message"
                                    className="nav__icon"
                                />{" "}
                                Contact me
                            </Link>
                        </li>
                    </ul>
                    <FontAwesomeIcon
                        icon={solid("x")}
                        className="nav__close"
                        id="nav-close"
                        onClick={handleToggle}
                    />
                </div>
            )}

            <div className="nav__btn">
                <div
                    className="nav__toggle"
                    id="nav_toggle"
                    onClick={handleToggle}
                >
                    <FontAwesomeIcon icon={solid("border-all")} />
                </div>
            </div>
        </div>
    );
}

export default Navigation;
