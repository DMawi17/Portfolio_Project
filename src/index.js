import { render } from "react-dom";
import App from "./core/App";
import "./sass/styles.scss";

const rootElement = document.getElementById("root");

render(<App />, rootElement);
