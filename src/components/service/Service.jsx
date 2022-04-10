import MainTitle from "../titles/MainTitle";
import ServiceContent from "./ServiceContent";
import { useData } from "../../contexts/data-hooks";

function Service() {
    const { service, buttons, icons } = useData();

    const { service_title, service_content } = service;
    const { serviceBtn } = buttons;

    return (
        <div className="services section" id="services">
            <MainTitle {...service_title} />
            <div className="services__container container grid">
                <ServiceContent
                    props={{ service_content, serviceBtn, icons }}
                />
            </div>
        </div>
    )
}

export default Service;
