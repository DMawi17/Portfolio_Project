import Qualification from "../components/qualification/Qualification";
import Skills from "../components/skills/Skills";
import About from "../pages/About";
import Contact from "../pages/Contact";
import LandingPage from "../pages/LandingPage";
import Portfolio from "../pages/Portfolio";

function Main() {
    return (
        <main className="main">
            <LandingPage />
            <About />
            <Skills />
            <Qualification />
            <Portfolio />
            <Contact />
        </main>
    );
}

export default Main;
