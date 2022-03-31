import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function SkillHeader(props) {
    const { skills, handleToggle, toggleOpen } = props;

    return (
        <div className="skills__header">
            <FontAwesomeIcon icon={solid("code")} className="skills__icon" />
            <div>
                <h1 className="skills__title">{skills.title}</h1>
                <span className="skills__subtitle">{skills.subtitle}</span>
            </div>
            <FontAwesomeIcon
                icon={solid("angle-down")}
                className="skills__arrow"
                style={toggleOpen ? { transform: "rotate(-180deg)" } : {}}
                onClick={() => handleToggle()}
            />
        </div>
    );
}

export default SkillHeader;
