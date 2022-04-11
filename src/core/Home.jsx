import Header from "../layout/Header";
import Main from "../layout/Main";
import Footer from "../layout/Footer";
import { ScrollUpBtn } from "../components/Buttons";

function Home() {
    return (
        <div className="home">
            <Header />
            <Main />
            <Footer />
            <ScrollUpBtn />
        </div>
    );
}

export default Home;
