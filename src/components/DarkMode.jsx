import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useTheme } from "../contexts/theme";

function DarkMode() {
    const { toggleTheme } = useTheme();

    return (
        <>
            <FontAwesomeIcon
                icon={solid("moon")}
                className="change-theme"
                id="theme-button"
                onClick={toggleTheme}
            />
        </>
    );
}

export default DarkMode;
