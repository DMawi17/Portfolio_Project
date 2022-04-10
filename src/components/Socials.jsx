import { SocialsBtn } from "./Buttons";
import { useData } from "../contexts/data-hooks";
import { v4 } from "uuid";

function Socials() {
    const { buttons } = useData();
    const { socialBtn } = buttons;
    const { classN } = socialBtn;
    console.log(classN);

    return (
        <div className="home__social">
            {socialBtn.map((social) => (
                <SocialsBtn key={v4()} {...social} />
            ))}
        </div>
    );
}

export default Socials;
