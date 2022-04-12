import { Routes, Route } from "react-router-dom";
import Whoops404 from "../components/contact/Whoops404";
import ThankYou from "../components/contact/ThankYou";
import Home from "./Home";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/ThankYou" element={<ThankYou />} />
                <Route path="*" element={<Whoops404 />} />
            </Routes>
        </div>
    );
}

export default App;
