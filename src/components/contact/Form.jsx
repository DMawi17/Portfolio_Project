import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Form({ paperPlane }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
                transition: { duration: 1.5, bounce: 0.3 },
            });
        }
        if (!inView) {
            animation.start({});
        }
    }, [animation, inView]);

    return (
        <form action="" className="contact__form grid">
            <div className="contact_inputs grid">
                <div className="contact__content">
                    <label htmlFor="" className="contact__label">
                        Name
                    </label>
                    <input type="text" className="contact__input" />
                </div>

                <div className="contact__content">
                    <label htmlFor="" className="contact__label">
                        Email
                    </label>
                    <input type="email" className="contact__input" />
                </div>
            </div>

            <div className="contact__content">
                <label htmlFor="" className="contact__label">
                    Project
                </label>
                <input type="text" className="contact__input" />
            </div>

            <div ref={ref} className="contact__content">
                <label htmlFor="" className="contact__label">
                    Message
                </label>
                <textarea
                    name=""
                    id=""
                    cols="0"
                    rows="7"
                    className="contact__input"
                ></textarea>
            </div>
            <motion.div
                animate={animation}
                initial={{
                    y: "+100px",
                    opacity: 0,
                }}
            >
                <a href="#contact" className="button button-flex form__button">
                    Send Message
                    <FontAwesomeIcon
                        icon={paperPlane}
                        className="button__icon"
                    />
                </a>
            </motion.div>
        </form>
    );
}

export default Form;
