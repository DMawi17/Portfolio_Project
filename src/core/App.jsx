import Header from "../layout/Header";
import Main from "../layout/Main";
import Footer from "../layout/Footer";
import { ScrollUpBtn } from "../components/Buttons";
// import Service from "../components/service/Service";
// import { useTheme } from "../contexts/theme";

function App() {
    // const { theme, isDark } = useTheme();
    // console.log(isDark);

    return (
        <div className="app">
            <Header />
            <Main />
            <Footer />
            <ScrollUpBtn />
            {/* <Service /> */}
        </div>
    );
}

export default App;
