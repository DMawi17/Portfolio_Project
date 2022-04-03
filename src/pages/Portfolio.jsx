import { useData } from "../contexts/data-hooks";
import MainTitle from "../components/titles/MainTitle";
import PortfolioContent from "../components/projects/PortfolioContent";
import { v4 } from "uuid";

function Portfolio() {
    const { portfolio, icons } = useData();

    const { portfolio_title, portfolio_content } = portfolio;

    return (
        <section className="portfolio section" id="portfolio">
            <MainTitle {...portfolio_title} />

            <div className="portfolio__container container">
                <div>
                    {portfolio_content.map((content) => (
                        <PortfolioContent
                            key={v4()}
                            props={{ content, icons }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
