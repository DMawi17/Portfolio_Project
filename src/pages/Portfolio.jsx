import { useData } from "../contexts/data-hooks";
import MainTitle from "../components/titles/MainTitle";
import PortfolioSlider from "../components/projects/PortfolioSlider";

function Portfolio() {
    const { portfolio, icons } = useData();
    const { portfolio_title } = portfolio;

    return (
        <section className="portfolio section" id="portfolio">
            <MainTitle {...portfolio_title} />

            <div className="portfolio__container container">
                <div>
                    <PortfolioSlider props={{ portfolio, icons }} />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
