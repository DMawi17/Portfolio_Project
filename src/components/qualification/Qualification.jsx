import QualificationContent from "./QualificationContent";
import MainTitle from "../titles/MainTitle";
import { QualificationBtn } from "../Buttons";
import { useData } from "../../contexts/data-hooks";
import { v4 } from "uuid";

function Qualification() {
    const { buttons, qualification, icons } = useData();

    const { qualificationBtn } = buttons;
    const { qualification_title, qualification_contents } = qualification;
    const { cal } = icons;

    return (
        <section className="qualification section">
            <div className="qualification__container container">
                <div className="qualification__mainTitle">
                    <MainTitle {...qualification_title} />
                </div>
                <div className="qualification__tabs">
                    {qualificationBtn.map((el) => (
                        <QualificationBtn key={v4()} {...el} /> // FIXME:
                    ))}
                </div>

                <div className="qualification__section">
                    <QualificationContent
                        props={{ qualification_contents, cal }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Qualification;
