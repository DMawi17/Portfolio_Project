import AboutImg from "../svgComponents/AboutImg";
import colors from "../sass/utils/_colors.scss";
import MainTitle from "../components/titles/MainTitle";
import { MainBtn } from "../components/Buttons";
import { useData } from "../contexts/data-hooks";
import { v4 } from "uuid";

function About() {
    const { buttons, about } = useData();

    const { about_title, about_description, about_content } = about;
    const { aboutBtn } = buttons;
    const arrContent = Object.values(about_content);

    const renderAboutList = ([num, time, keyword]) => {
        return (
            <div key={v4()}>
                <span className="about__info-title">{num}+</span>
                <span className="about__info-name">
                    {time} <br /> {keyword}{" "}
                </span>
            </div>
        );
    };

    return (
        <section className="about section" id="about">
            <MainTitle {...about_title} />

            <div className="about__container container grid">
                <AboutImg fill={colors.clrTertiary} />

                <div className="about__data">
                    <p className="about__description">{about_description}</p>

                    <div className="about__info">
                        {arrContent.map((elem) => renderAboutList(elem))}
                    </div>

                    <div className="">
                        <a
                            href="/"
                            className="button about__button button-flex"
                        >
                            <MainBtn {...aboutBtn} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
