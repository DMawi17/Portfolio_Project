function Blob({ fill }) {
    return (
        <div className="home__img">
            <svg
                className="home__blob"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill={fill || "currentColor"}
                    d="M48.7,-59C63.8,-45.4,77.2,-30.7,80.3,-14C83.4,2.7,76.3,21.3,66.5,38.5C56.7,55.7,44.3,71.6,27.9,78.1C11.6,84.6,-8.6,81.8,-26.1,74.3C-43.6,66.7,-58.4,54.5,-67.7,38.9C-77,23.2,-80.8,4.1,-75.2,-10.7C-69.6,-25.6,-54.5,-36.3,-40.4,-50.1C-26.3,-63.9,-13.1,-80.9,1.8,-83.1C16.8,-85.2,33.6,-72.6,48.7,-59Z"
                    transform="translate(100 100)"
                />
            </svg>
        </div>
    );
}

export default Blob;
