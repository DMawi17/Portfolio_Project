import Socials from "../components/Socials";
import Intro from "../components/Intro";
import { ScrollDownBtn } from "../components/Buttons";
import IntroSvg from '../assets/img/intro.svg'
import { useData } from "../contexts/data-hooks";

function LandingPage() {
    const { buttons } = useData();
    const { scrollDwnBtn } = buttons;

    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Socials />
                    <div className="home__img">
                        <img src={IntroSvg} alt="A 3D character waving hand" className="home__blob" />
                    </div>
                    <Intro />
                </div>
                <ScrollDownBtn {...scrollDwnBtn} />
            </div>
        </section>
    );
}

export default LandingPage;
