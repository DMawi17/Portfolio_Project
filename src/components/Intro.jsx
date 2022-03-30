import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function Intro() {
    return (
        <div className="home__data">
            <h1 className="home__title">Hi, I'm Mawi</h1>
            <h3 className="home__subtitle">Web Developer</h3>
            <p className="home_description">
                I build applications for the web because I like interacting with
                attractive and user-friendly UI/UX elements.
            </p>

            <Link to="/contact" className="button button--flex">
                Contact Me{" "}
                <FontAwesomeIcon
                    icon={solid("paper-plane")}
                    className="nav__icon"
                />
            </Link>
        </div>
    );
}

export default Intro;
