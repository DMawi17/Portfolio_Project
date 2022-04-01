import MainTitle from "../titles/MainTitle";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { QualificationBtn } from "../Buttons";
import QualificationContent from "./QualificationContent";
import { v4 } from "uuid";

function Qualification({ qualification }) {
    const fas = [
        { element: "Work", icon: solid("graduation-cap") },
        { element: "Education", icon: solid("briefcase") },
    ];

    return (
        <section className="qualification section">
            <MainTitle {...qualification} />

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    {fas.map((el) => (
                        <QualificationBtn key={v4()} {...el} />
                    ))}
                </div>

                <div className="qualification__section">
                    <QualificationContent />
                </div>
            </div>
        </section>
    );
}

export default Qualification;
