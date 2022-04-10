import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubMainTitleSkills } from "../titles/SubMainTitle";
import { useData } from "../../contexts/data-hooks";

function SkillHeader({ props }) {
    const [skill_header, handleToggle, toggleOpen] = props;

    const { icons } = useData();
    const { angles_down, code } = icons;

    return (
        <div className="skills__header">
            <FontAwesomeIcon icon={code} className="skills__icon" />

            <SubMainTitleSkills {...skill_header} />

            <FontAwesomeIcon
                icon={angles_down}
                className="skills__arrow"
                style={toggleOpen ? { transform: "rotate(-180deg)" } : {}}
                onClick={() => handleToggle()}
            />
        </div>
    );
}

export default SkillHeader;
