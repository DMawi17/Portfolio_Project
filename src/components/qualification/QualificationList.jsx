import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function QualificationList({ props }) {
    const { cal, list } = props;
    const { subject, company, place, time } = list;

    return (
        <div>
            <h3 className="qualification__title">{subject}</h3>
            <span className="qualification__subtitle">
                {place} - {company}
            </span>
            <div className="qualification__calendar">
                <FontAwesomeIcon icon={cal} className="cal__icon" />
                {time}
            </div>
        </div>
    );
}

export default QualificationList;
