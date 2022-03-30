import Socials from "./Socials";
import Intro from "./Intro";
import Blob from "../svgComponents/Blob";
import ScrollDown from "./ScrollDown";
import colors from "../sass/utils/_colors.scss";

function Main() {
    console.log();
    return (
        <div className="main">
            <section className="section home" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <Socials />
                        <Blob fill={colors.clrPrimary} />
                        <Intro />
                        <ScrollDown />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;
