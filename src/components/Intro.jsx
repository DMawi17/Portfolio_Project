import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { MainBtn } from "./Buttons";

function Intro() {
    const fas = { element: "Contact Me", icon: solid("paper-plane") };

    return (
        <div className="home__data">
            <h1 className="home__title">Hi, I'm Mawi</h1>
            <h3 className="home__subtitle">Web Developer</h3>
            <p className="home_description">
                I build applications for the web because I like interacting with
                attractive and user-friendly UI/UX elements.
            </p>

            <a href="/contact" className="button button--flex">
                <MainBtn {...fas} />
            </a>
        </div>
    );
}

export default Intro;
