function SkillList({ title, data }) {
    return (
        <div className="skills__data">
            <div className="skills__title">
                <h3 className="skills__name">{title}</h3>
                <span className="skills__number">{data}</span>
            </div>
            <div className="skills__bar">
                <span
                    className={`skills__percentage skills__${title.toLowerCase()}`}
                ></span>
            </div>
        </div>
    );
}

export default SkillList;
