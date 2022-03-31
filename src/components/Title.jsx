function Title({ title, subtitle }) {
    return (
        <>
            <h2 className="section__title">{`${title}`}</h2>
            <span className="section__subtitle">{`${subtitle}`}</span>
        </>
    );
}

export default Title;
