import { Link } from "react-router-dom";
import { ThanksBtn } from "../Buttons";
import { useData } from "../../contexts/data-hooks";

function ThankYou() {
    const { buttons } = useData();
    const { whoops404Btn } = buttons;

    return (
        <div className="thanks section">
            <div className="thanks__container container grid">
                <div className="thanks__content">
                    <h3 className="thanks__title">Thank you!</h3>
                    <p className="thanks__subtitle">
                        Your form submission has been received.
                    </p>

                    <Link
                        to="/"
                        className="button button-flex button-small thanks__button"
                    >
                        <ThanksBtn {...whoops404Btn} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ThankYou;
