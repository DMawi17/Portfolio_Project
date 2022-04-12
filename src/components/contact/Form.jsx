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
        <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="contact__form grid"
        >
            <input type="hidden" name="form-name" value="contact" />
            <div className="contact_inputs grid">
                <div className="contact__content">
                    <label htmlFor="" className="contact__label">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="contact__input"
                        required
                    />
                </div>

                <div className="contact__content">
                    <label htmlFor="" className="contact__label">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="contact__input"
                        required
                    />
                </div>
            </div>

            <div ref={ref} className="contact__content">
                <label htmlFor="" className="contact__label">
                    Message
                </label>
                <textarea
                    name="message"
                    cols="0"
                    rows="6"
                    className="contact__input"
                    required
                ></textarea>
            </div>
            <motion.div
                animate={animation}
                initial={{
                    y: "+100px",
                    opacity: 0,
                }}
            >
                <button
                    type="submit"
                    className="button button-flex form__button"
                >
                    Send Message
                    <FontAwesomeIcon
                        icon={paperPlane}
                        className="button__icon"
                    />
                </button>
            </motion.div>
        </form>
    );
}

export default Form;
