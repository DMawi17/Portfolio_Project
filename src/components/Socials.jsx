import { SocialsBtn } from "./Buttons";
import { useData } from "../contexts/data-hooks";
import { v4 } from "uuid";

function Socials() {
    const { buttons } = useData();
    const { socialBtn } = buttons;

    return (
        <div className="home__social">
            <div>
                <span className="home__social__line"></span>
                <span className="home__social__line"></span>
                <span className="home__social__rounder"></span>
            </div>
            {socialBtn.map((social) => (
                <SocialsBtn key={v4()} {...social} />
            ))}
            <div>
                <span className="home__social__line"></span>
                <span className="home__social__rounder"></span>
            </div>
        </div>
    );
}

export default Socials;
