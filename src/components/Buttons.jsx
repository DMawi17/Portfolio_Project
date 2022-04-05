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

function ServiceBtn({ props }) {
    const { serviceBtn, handleModal } = props;

    return (
        <span
            className="button button--flex button-small button-link services__button"
            onClick={() => handleModal()}
        >
            {serviceBtn.name}
            <FontAwesomeIcon icon={serviceBtn.icon} className="button__icon" />
        </span>
    );
}

function PortfolioBtn({ props }) {
    const { icons, content } = props;

    return (
        <a
            href="/"
            className="button button--flex button-small portfolio__button"
        >
            {content.BtnName}
            <FontAwesomeIcon icon={icons.arrowRgt} className="button_icon" />
        </a>
    );
}

// function ContactBtn({ props }) {
//     const { icons } = props;

//     return <FontAwesomeIcon icon={icons.contact} className="contact__icon" />;
// }

export {
    QualificationBtn,
    MainBtn,
    SocialsBtn,
    ScrollDownBtn,
    ServiceBtn,
    PortfolioBtn,
    // ContactBtn,
};
