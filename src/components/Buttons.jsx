import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

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

function ScrollDownBtn({ icons }) {
    return (
        <div className="home__scroll">
            <a href="#about" className="home__scroll-button button-flex">
                <FontAwesomeIcon
                    icon={icons.angles_down}
                    className="home__scroll-arrow"
                />
            </a>
        </div>
    );
}

function QualificationBtn({ name, icon }) {
    return (
        <div className="qualification__button button-flex">
            <FontAwesomeIcon icon={icon} className="qualification__icon" />
            {name}
        </div>
    );
}

function ServiceBtn({ props }) {
    const { serviceBtn, handleModal } = props;

    return (
        <span
            className="button button-flex button-small button-link services__button"
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
            className="button button-flex button-small portfolio__button"
        >
            {content.BtnName}
            <FontAwesomeIcon icon={icons.arrowRgt} className="button__icon" />
        </a>
    );
}

function SocialsFooterBtn({ url, icon }) {
    return (
        <a
            href={url}
            target="_blank"
            className="footer__social"
            rel="noreferrer"
        >
            <FontAwesomeIcon icon={icon} />
        </a>
    );
}

function ScrollUpBtn() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    function toggleVisibility() {
        if (window.scrollY >= 560) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {isVisible && (
                <div
                    role="button"
                    className="scrollUp"
                    id="scroll-up"
                    onClick={scrollToTop}
                >
                    <FontAwesomeIcon
                        icon={solid("arrow-up")}
                        className="scrollUp__icon"
                    />
                </div>
            )}
        </div>
    );
}

export {
    QualificationBtn,
    MainBtn,
    SocialsBtn,
    ScrollDownBtn,
    ServiceBtn,
    PortfolioBtn,
    SocialsFooterBtn,
    ScrollUpBtn,
};
