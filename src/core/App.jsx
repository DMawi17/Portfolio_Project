import Header from "../components/Header";
import About from "../pages/About";
import Qualification from "../components/qualification/Qualification";

import Skills from "../components/skills/Skills";
import LandingPage from "../pages/LandingPage";

function App() {
    return (
        <div className="app">
            <Header />
            <LandingPage />
            <About />
            <Skills />
            <Qualification />
        </div>
    );
}

export default App;
