import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

function MainBtn({ name, icon }) {
    return (
        <>
            {name}
            <FontAwesomeIcon icon={icon} className="button__icon" />
        </>
    );
}

function ScrollDownBtn({ name, icons }) {
    return (
        <a href="/" className="home__scroll-button button-flex">
            <FontAwesomeIcon
                icon={icons.mouse}
                className="home__scroll-mouse"
            />{" "}
            <span className="home__scroll-name">{name}</span>{" "}
            <FontAwesomeIcon
                icon={icons.arrowDwn}
                className="home__scroll-arrow"
            />
        </a>
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

export { QualificationBtn, MainBtn, SocialsBtn, ScrollDownBtn };
