import { MainBtn } from "./Buttons";
import { useData } from "../contexts/data-hooks";

function Intro() {
    const { intro, buttons } = useData();

    const { intro_title, intro_description } = intro;
    const { introBtn } = buttons;

    return (
        <div className="intro">
            <h1 className="intro__title">{intro_title.title}</h1>
            <h3 className="intro__subtitle">{intro_title.subtitle}</h3>
            <p className="intro__description">{intro_description}</p>

            <a href="/contact" className="button button--flex">
                <MainBtn {...introBtn} />
            </a>
        </div>
    );
}

export default Intro;
