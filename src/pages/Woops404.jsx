import { useLocation } from "react-router-dom";

const Whoops404 = () => {
    const location = useLocation();

    return (
        <div id="Whoops">
            <h2>
                <span>Whoops!</span> <br />
                Resource not found at {location.pathname}
            </h2>
        </div>
    );
};

export default Whoops404;
