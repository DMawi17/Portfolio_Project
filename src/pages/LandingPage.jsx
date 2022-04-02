import Socials from "../components/Socials";
import Intro from "../components/Intro";
import Blob from "../svgComponents/Blob";
import { ScrollDownBtn } from "../components/Buttons";
import colors from "../sass/utils/_colors.scss";

import { useData } from "../contexts/data-hooks";

function LandingPage() {
    const { buttons } = useData();
    const { scrollDwnBtn } = buttons;

    return (
        <section className="section home" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Socials />
                    <Blob fill={colors.clrPrimary} />
                    <Intro />
                    <div className="home__scroll">
                        <ScrollDownBtn {...scrollDwnBtn} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LandingPage;
