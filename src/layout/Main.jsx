import Qualification from "../components/qualification/Qualification";
import Skills from "../components/skills/Skills";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";

function Main() {
    return (
        <div className="main">
            <Home />
            <About />
            <Skills />
            <Qualification />
            <Portfolio />
            <Contact />
        </div>
    );
}

export default Main;
