import { useData } from "../../contexts/data-hooks";
import MainTitle from "../titles/MainTitle";
import SkillContent from "./SkillContent";
import { v4 } from "uuid";

function Skills() {
    const { skills } = useData();
    const { skill_title, skill_content } = skills;

    return (
        <section className="skills section" id="skills">
            <MainTitle {...skill_title} />

            <div className="skills__container container grid">
                <div>
                    {skill_content.map((skill) => (
                        <SkillContent key={v4()} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
