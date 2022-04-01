import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubMainTitle from "../titles/SubMainTitle";
import { useData } from "../../contexts/data-hooks";

function SkillHeader({ props }) {
    const [skill_header, handleToggle, toggleOpen] = props;

    const { icons } = useData();
    const { angle_down, code } = icons;

    return (
        <div className="skills__header">
            <FontAwesomeIcon icon={code} className="skills__icon" />

            <SubMainTitle {...skill_header} />

            <FontAwesomeIcon
                icon={angle_down}
                className="skills__arrow"
                style={toggleOpen ? { transform: "rotate(-180deg)" } : {}}
                onClick={() => handleToggle()}
            />
        </div>
    );
}

export default SkillHeader;
