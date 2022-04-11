import { Routes, Route } from "react-router-dom";
import Whoops404 from "../pages/Whoops404";
import Home from "./Home";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route  path="*" element={<Whoops404 />} />
            </Routes>

            {/* <Home /> */}
        </div>
    );
}

export default App;
