import Header from "../components/Header";
import Main from "../components/Main";
import Qualification from "../components/qualification/Qualification";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";

import data from "../db.json";

function App() {
    return (
        <div className="app">
            <Header />
            <Main />
            <About />
            <Portfolio />
            <Qualification {...data} />
        </div>
    );
}

export default App;
