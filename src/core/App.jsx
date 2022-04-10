import Header from "../layout/Header";
import Main from "../layout/Main";
import Footer from "../layout/Footer";
import { ScrollUpBtn } from "../components/Buttons";

function App() {
    return (
        <div className="dark">
            <Header />
            <Main />
            <Footer />
            <ScrollUpBtn />
        </div>
    );
}

export default App;
