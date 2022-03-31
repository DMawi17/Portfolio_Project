import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function Buttons() {
    return (
        <div>
            {" "}
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

export default Buttons;