import { PortfolioBtn } from "../Buttons";

function PortfolioContent({ props }) {
    const { content, icons } = props;
    const { title, description, img_url, link } = content;

    return (
        <div className="portfolio__content grid">
            <img src={img_url} alt="" className="portfolio__img" />
            <div className="portfolio__data">
                <h3 className="portfolio__title">{title}</h3>
                <p>{description}</p>
                <PortfolioBtn props={{ icons, content, link }} />
            </div>
        </div>
    );
}

export default PortfolioContent;
