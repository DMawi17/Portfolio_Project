import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainBtn({ element, icon }) {
    return (
        <>
            {element}
            <FontAwesomeIcon icon={icon} className="button__icon" />
        </>
    );
}

function QualificationBtn({ element, icon }) {
    return (
        <div className="qualification__button button--flex">
            <FontAwesomeIcon icon={icon} className="qualification__icon" />
            {element}
        </div>
    );
}

export { QualificationBtn, MainBtn };
