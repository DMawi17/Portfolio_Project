import Skills from "../components/skills/Skills";
import data from "../db.json";
import { v4 } from "uuid";
import Title from "../components/Title";

function Portfolio() {
    const titleValues = {
        title: "Skills",
        subtitle: "My technical level",
    };
    return (
        <section className="skills section" id="skills">
            <Title {...titleValues} />

            <div className="skills__container container grid">
                <div>
                    {data.skills.map((skill) => (
                        <Skills key={v4()} skills={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
