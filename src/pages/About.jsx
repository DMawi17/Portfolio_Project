import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import AboutImg from "../svgComponents/AboutImg";
import colors from "../sass/utils/_colors.scss";
import Title from "../components/Title";
import { MainBtn } from "../components/Buttons";

function About() {
    const titleValues = {
        title: "About Me",
        subtitle: "My introduction",
    };

    const fas = { element: "Download CV", icon: solid("download") };

    return (
        <section className="about section" id="about">
            <Title {...titleValues} />

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
                            <MainBtn {...fas} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
