import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactContent({ title, address, icon }) {
    return (
        <div className="contact_information">
            <FontAwesomeIcon icon={icon} className="contact__icon" />

            <div>
                <h3 className="contact__title">{title}</h3>
                <span className="contact__subtitle">{address}</span>
            </div>
        </div>
    );
}

export default ContactContent;
