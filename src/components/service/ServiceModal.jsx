import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServiceList from "./ServiceList";
import { v4 } from "uuid";

function ServiceModal({ props }) {
    const { icons, service_content, handleModal } = props;
    const { close, check_circle } = icons;

    return (
        <div className="services__modal">
            <div className="services__modal-content">
                <h4 className="services__modal-title">
                    UI/UX <br /> Designer
                </h4>
                <FontAwesomeIcon
                    icon={close}
                    className="services__modal-close grid"
                    onClick={() => handleModal()}
                />

                <ul className="services__modal-services grid">
                    {service_content.map((content) => (
                        <ServiceList key={v4()} props={{ icons, content }} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ServiceModal;
