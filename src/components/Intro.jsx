import { MainBtn } from "./Buttons";
import { useData } from "../contexts/data-hooks";
import { motion } from "framer-motion";

function Intro() {
    const { intro, buttons } = useData();

    const { intro_title, intro_description } = intro;
    const { introBtn } = buttons;

    return (
        <div className="intro">
            <motion.h1
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
                className="intro__title"
            >
                {intro_title.title}
            </motion.h1>

            <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="intro__subtitle"
            >
                {intro_title.subtitle}
            </motion.h3>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="intro__description"
            >
                {intro_description}
            </motion.p>

            <a href="#contact" className="button button-flex intro__button">
                <MainBtn {...introBtn} />
            </a>
        </div>
    );
}

export default Intro;
