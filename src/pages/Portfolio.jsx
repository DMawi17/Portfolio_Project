import Skills from "../components/skills/Skills";
import data from "../db.json";
import { v4 } from "uuid";

function Portfolio() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
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
