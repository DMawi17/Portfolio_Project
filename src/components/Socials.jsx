import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

function Socials() {
    return (
        <div className="home__social">
            <a
                href="https://www.linkedin.com/in/dmawi17/"
                target="_blank"
                className="home__social-icon"
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={brands("linkedin-in")} />
            </a>
            <a
                href="https://github.com/DMawi17"
                target="_blank"
                className="home__social-icon"
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={brands("github-alt")} />
            </a>
            <a
                href="https://codepen.io/dmawi17"
                target="_blank"
                className="home__social-icon"
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={brands("codepen")} />
            </a>
        </div>
    );
}

export default Socials;
