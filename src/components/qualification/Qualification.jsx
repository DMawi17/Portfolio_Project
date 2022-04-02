import MainTitle from "../titles/MainTitle";
import { QualificationBtn } from "../Buttons";
import QualificationContent from "./QualificationContent";
import { v4 } from "uuid";
import { useData } from "../../contexts/data-hooks";

function Qualification() {
    const { buttons, qualification } = useData();
    const { qualificationBtn } = buttons;

    return (
        <section className="qualification section">
            <MainTitle {...qualification} />

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    {qualificationBtn.map((el) => (
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
