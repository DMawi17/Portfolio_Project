import { MainBtn } from "./Buttons";
import { useData } from "../contexts/data-hooks";

function Intro() {
    const { intro, buttons } = useData();

    const { intro_title, intro_description } = intro;
    const { introBtn } = buttons;

    return (
        <div className="home__data">
            <h1 className="home__title">{intro_title.title}</h1>
            <h3 className="home__subtitle">{intro_title.subtitle}</h3>
            <p className="home_description">{intro_description}</p>

            <a href="/contact" className="button button--flex">
                <MainBtn {...introBtn} />
            </a>
        </div>
    );
}

export default Intro;
