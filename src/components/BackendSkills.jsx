import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function Skills() {
    return (
        <section className="skills section">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container grid">
                <div>
                    <div className="skills__content">
                        {/* SKILL 1 */}
                        <div className="skills__header">
                            <FontAwesomeIcon
                                icon={solid("code")}
                                className="skills__icon"
                            />
                            <div>
                                <h1 className="skills__title">
                                    Frontend developer
                                </h1>
                                <span className="skills__subtitle">
                                    More than 3 month
                                </span>
                            </div>
                            <FontAwesomeIcon
                                icon={solid("chevron-down")}
                                className="skills__arrow"
                            />
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__title">
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__html"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__title">
                                    <h3 className="skills__name">CSS / SCSS</h3>
                                    <span className="skills__number">75%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__css"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__title">
                                    <h3 className="skills__name">JavaScript</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__js"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__title">
                                    <h3 className="skills__name">React</h3>
                                    <span className="skills__number">75%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__react"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
