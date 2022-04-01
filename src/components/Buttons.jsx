import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainBtn({ name, icon }) {
    return (
        <>
            {name}
            <FontAwesomeIcon icon={icon} className="button__icon" />
        </>
    );
}

function QualificationBtn({ name, icon }) {
    return (
        <div className="qualification__button button--flex">
            <FontAwesomeIcon icon={icon} className="qualification__icon" />
            {name}
        </div>
    );
}

function SocialsBtn({ url, icon }) {
    return (
        <a
            
            href={url}
            target="_blank"
            className="home__social-icon"
            rel="noreferrer"
        >
            <FontAwesomeIcon icon={icon} />
        </a>
    );
}

export { QualificationBtn, MainBtn, SocialsBtn };
