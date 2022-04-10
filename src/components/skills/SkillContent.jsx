import { useState } from "react";
import { v4 } from "uuid";

import SkillList from "./SkillList";
import SkillHeader from "./SkillHeader";

function SkillContent({ skill_header, skill_list }) {
    const [toggleOpen, setToggleOpen] = useState(false);

    const handleToggle = (e) => {
        setToggleOpen(!toggleOpen);
    };

    return (
        <div className="skills__content ">
            <SkillHeader props={[skill_header, handleToggle, toggleOpen]} />

            {toggleOpen && (
                <div className="skills__list grid">
                    {skill_list.map((skill) => (
                        <SkillList key={v4()} {...skill} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default SkillContent;
