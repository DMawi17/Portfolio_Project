import React, { useState } from "react";
import SkillList from "./SkillList";
import { v4 } from "uuid";
import SkillHeader from "./SkillHeader";

function Skills(skill) {
    const [toggleOpen, setToggleOpen] = useState(false);

    const { skills } = skill;
    const { skill_list } = skills;

    const handleToggle = (e) => {
        setToggleOpen(!toggleOpen);
    };

    return (
        <div className="skills__content ">
            <SkillHeader
                skills={skills}
                handleToggle={handleToggle}
                toggleOpen={toggleOpen}
            />
            {toggleOpen && (
                <div className="skills__list grid">
                    {skill_list.map((skillEl) => (
                        <SkillList key={v4()} {...skillEl} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Skills;
