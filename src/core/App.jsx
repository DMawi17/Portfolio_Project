import Header from "../components/Header";
import About from "../pages/About";
import Qualification from "../components/qualification/Qualification";
import Skills from "../components/skills/Skills";
import LandingPage from "../pages/LandingPage";
import Service from "../components/service/Service";

function App() {
    return (
        <div className="app">
            <Header />
            <LandingPage />
            <About />
            <Skills />
            <Qualification />
            <Service />
        </div>
    );
}

export default App;
