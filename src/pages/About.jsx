import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import AboutImg from "../svgComponents/AboutImg";
import colors from "../sass/utils/_colors.scss";

function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <AboutImg fill={colors.clrTertiary} />

                <div className="about__data">
                    <p className="about__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae modi aliquam cupiditate ad delectus animi.
                        Molestiae, aliquid. Sint quam corrupti quis doloribus,
                        molestiae, reiciendis illo ex, itaque fugiat praesentium
                        animi.
                    </p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">03+</span>
                            <span className="about__info-name">
                                Months <br /> experience{" "}
                            </span>
                        </div>
                        <div>
                            <span className="about__info-title">03</span>
                            <span className="about__info-name">
                                Completed <br /> projects{" "}
                            </span>
                        </div>
                        <div>
                            <span className="about__info-title">01</span>
                            <span className="about__info-name">
                                Company <br /> worked{" "}
                            </span>
                        </div>
                    </div>
                    <div className="about__button">
                        <a href="/" className="button button--flex">
                            Download CV{" "}
                            <FontAwesomeIcon
                                icon={solid("download")}
                                className="button__icon"
                                d
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
