import { Link, useLocation } from "react-router-dom";
import { WhoopsBtn } from "../components/Buttons";
import { useData } from "../contexts/data-hooks";

const Whoops404 = () => {
    const location = useLocation();
    const { buttons } = useData();
    const { whoops404Btn } = buttons;

    return (
        <div className="whoops section">
            <div className="whoops__container container grid">
                <div className="whoops__content">
                    <h3 className="whoops__title">
                        Resource not found at {location.pathname}
                    </h3>
                    <p className="whoops__subtitle">
                        It looks like you've followed a broken link or entered a
                        URL that doesn't exist on this site.
                    </p>

                    <Link
                        to="/"
                        className="button button-flex button-small whoops__button"
                    >
                        <WhoopsBtn {...whoops404Btn} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Whoops404;
