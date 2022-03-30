import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./core/App";
import "./sass/styles.scss";

const rootElement = document.getElementById("root");

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootElement
);
