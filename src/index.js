import { DataProvider } from "./contexts/data-hooks";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./core/App";
import "./sass/styles.scss";

const rootElement = document.getElementById("root");

render(
    <DataProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </DataProvider>,
    rootElement
);
