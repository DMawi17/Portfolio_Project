import Header from "../components/Header";
import Main from "../components/Main";
import About from "../pages/About";
import Qualification from "../components/qualification/Qualification";

import Skills from "../components/skills/Skills";

function App() {
    return (
        <div className="app">
            <Header />
            <Main />
            <About />
            <Skills />
            {/* <Portfolio /> */}
            <Qualification />
        </div>
    );
}

export default App;
