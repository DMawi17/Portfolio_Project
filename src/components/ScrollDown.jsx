import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function ScrollDown() {
    return (
        <div className="home__scroll">
            <a href="/about" className="home__scroll-button button-flex">
                <FontAwesomeIcon
                    icon={solid("computer-mouse")}
                    className="home__scroll-mouse"
                />{" "}
                <span className="home__scroll-name">Scroll down</span>{" "}
                <FontAwesomeIcon icon={solid("arrow-down")} />
            </a>
        </div>
    );
}

export default ScrollDown;
