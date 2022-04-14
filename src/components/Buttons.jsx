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

function PortfolioBtn({ props }) {
    const { icons, content, link } = props;

    return (
        <a
            href={link}
            target="_blank"
            className="button button-flex button-small portfolio__button" rel="noreferrer"
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
                    aria-label="scroll up"
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

function WhoopsBtn({ name, icon }) {
    return (
        <>
            <FontAwesomeIcon
                icon={icon}
                className="button__icon whoops__icon"
            />
            {name}
        </>
    );
}

function ThanksBtn({ name, icon }) {
    return (
        <>
            <FontAwesomeIcon
                icon={icon}
                className="button__icon thanks__icon"
            />
            {name}
        </>
    );
}

export {
    QualificationBtn,
    MainBtn,
    SocialsBtn,
    ScrollDownBtn,
    PortfolioBtn,
    SocialsFooterBtn,
    ScrollUpBtn,
    WhoopsBtn,
    ThanksBtn,
};
