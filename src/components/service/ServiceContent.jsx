import { useState } from "react";
import ServiceModal from "./ServiceModal";
import { ServiceBtn } from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServiceContent({ props }) {
    const [showModal, setShowModal] = useState(false);

    const { service_content, serviceBtn, icons } = props;

    const handleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="services__content">
            <FontAwesomeIcon icon={icons.grid} />
            <div>
                <h3 className="services__title">
                    Frontend <br /> Development
                </h3>
            </div>
            <ServiceBtn props={{ serviceBtn, handleModal }} />
            {showModal && (
                <ServiceModal props={{ icons, service_content, handleModal }} />
            )}
        </div>
    );
}

export default ServiceContent;
