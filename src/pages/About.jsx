import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { v4 } from "uuid";
import { useData } from "../contexts/data-hooks";
import AboutSvg from "../assets/img/about.svg";
import MainTitle from "../components/titles/MainTitle";
import { MainBtn } from "../components/Buttons";

function About() {
    const { buttons, about } = useData();

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const animation = useAnimation();

    const { about_title, about_description, about_content } = about;
    const { aboutBtn } = buttons;
    const arrContent = Object.values(about_content);

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
            });
        }
        if (!inView) {
            animation.start({ opacity: 0 });
        }
    }, [animation, inView]);

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
        <section ref={ref} className="about section" id="about">
            <MainTitle {...about_title} />

            <div className="about__container container grid">
                <div className="about__img">
                    <img src={AboutSvg} alt="3D character using computer" className="about__blob" />
                </div>

                <div className="about__data">
                    <motion.p
                        animate={animation}
                        transition={{
                            duration: 1,
                        }}
                        className="about__description"
                    >
                        {about_description}
                    </motion.p>

                    <motion.div
                        animate={animation}
                        transition={{
                            duration: 2,
                        }}
                        className="about__info"
                    >
                        {arrContent.map((elem) => renderAboutList(elem))}
                    </motion.div>

                    <motion.div
                        animate={animation}
                        transition={{
                            duration: 3,
                        }}
                    >
                        <a
                            href="/"
                            className="button about__button button-flex"
                        >
                            <MainBtn {...aboutBtn} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;
