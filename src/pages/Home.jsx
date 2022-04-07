import Socials from "../components/Socials";
import Intro from "../components/Intro";
import Blob from "../svgComponents/Blob";
import { ScrollDownBtn } from "../components/Buttons";
import colors from "../sass/utils/_colors.scss";

import { useData } from "../contexts/data-hooks";

function Home() {
    const { buttons } = useData();
    const { scrollDwnBtn } = buttons;

    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Socials />
                    <Blob fill={colors.clrPrimary} />
                    <Intro />
                </div>
                <ScrollDownBtn {...scrollDwnBtn} />
            </div>
        </section>
    );
}

export default Home;
