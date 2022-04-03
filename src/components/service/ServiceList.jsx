import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServiceList({ props }) {
    const { icons, content } = props;
    const { close, check_circle } = icons;

    return (
        <li className="services__modal-service">
            <FontAwesomeIcon
                icon={check_circle}
                className="services__modal-icon"
            />
            <p>{content}</p>
        </li>
    );
}

export default ServiceList;
