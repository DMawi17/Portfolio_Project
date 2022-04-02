import Header from "../components/Header";
import About from "../pages/About";
import Qualification from "../components/qualification/Qualification";

import Skills from "../components/skills/Skills";
import Home from "../pages/Home";

function App() {
    return (
        <div className="app">
            <Header />
            <Home />
            <About />
            <Skills />
            <Qualification />
        </div>
    );
}

export default App;
