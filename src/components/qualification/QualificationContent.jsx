import QualificationList from "./QualificationList";
import { v4 } from "uuid";

function QualificationContent({ props }) {
    const { qualification_contents, cal } = props;

    const divider = () => {
        return (
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
            </div>
        );
    };

    return (
        <>
            {qualification_contents.map((list, i) => {
                if (i % 2 === 0) {
                    return (
                        <div key={v4()} className="qualification__data">
                            <QualificationList props={{ list, cal }} />
                            {divider()}
                        </div>
                    );
                } else {
                    return (
                        <div key={v4()} className="qualification__data">
                            <div></div>
                            {divider()}
                            <QualificationList props={{ list, cal }} />
                        </div>
                    );
                }
            })}
        </>
    );
}

export default QualificationContent;
