import { useLocation } from "react-router-dom";

const Whoops404 = () => {
    const location = useLocation();

    return (
        <div className="whoops">
            <h2>Resource not found at {location.pathname}</h2>
        </div>
    );
};

export default Whoops404;
