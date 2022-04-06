import Header from "../components/Header";
import About from "../pages/About";
import Qualification from "../components/qualification/Qualification";
import Skills from "../components/skills/Skills";
import LandingPage from "../pages/LandingPage";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
import { ScrollUpBtn } from "../components/Buttons";
// import Service from "../components/service/Service";

function App() {
    return (
        <div className="app">
            <Header />
            <LandingPage />
            <About />
            <Skills />
            {/* <Service /> */}
            <Qualification />
            <Portfolio />
            <Contact />
            <Footer />
            <ScrollUpBtn />
        </div>
    );
}

export default App;
