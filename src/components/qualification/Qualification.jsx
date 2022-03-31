import Title from "../Title";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { QualificationBtn } from "../Buttons";

function Qualification({ qualification }) {
    const fas = [
        { element: "Education", icon: solid("briefcase") },
        { element: "Work", icon: solid("graduation-cap") },
    ];

    return (
        <section className="qualification section">
            <Title {...qualification} />

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    {fas.map((el) => (
                        <QualificationBtn {...el} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Qualification;
