import { ThemeProvider } from "./contexts/theme";
import { DataProvider } from "./contexts/data-hooks";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./core/App";
import "./sass/styles.scss";

const rootElement = document.getElementById("root");

render(
    <ThemeProvider>
        <DataProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </DataProvider>
    </ThemeProvider>,
    rootElement
);
