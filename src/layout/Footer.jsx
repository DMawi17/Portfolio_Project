import { useData } from "../contexts/data-hooks";
import { SocialsFooterBtn } from "../components/Buttons";
import { v4 } from "uuid";

function Footer() {
    const { buttons, footer } = useData();
    const { socialBtn } = buttons;

    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Mawi</h1>
                        <span className="footer__subtitle">Web Developer</span>
                    </div>

                    <ul className="footer__links">
                        {footer.map((li) => {
                            const UpperCaseLink =
                                li.charAt(0).toUpperCase() + li.slice(1);
                            return (
                                <li key={v4()}>
                                    <a href={`#${li}`} className="footer__link">
                                        {UpperCaseLink}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="footer__socials">
                        {socialBtn.map((social) => (
                            <SocialsFooterBtn key={v4()} {...social} />
                        ))}
                    </div>
                </div>

                <p className="footer__copy">
                    &#169; Dagmawi Asegid All Right Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;
