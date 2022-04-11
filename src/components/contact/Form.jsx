import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Form({ paperPlane }) {
    const initialValues = { name: "", email: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);

    console.log(formValues);

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormValues(initialValues);
    };

    return (
        <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="contact__form grid"
            onSubmit={handleSubmit}
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
                        value={formValues.name}
                        className="contact__input"
                        onChange={handleChange}
                    />
                </div>

                <div className="contact__content">
                    <label htmlFor="" className="contact__label">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        className="contact__input"
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div ref={ref} className="contact__content">
                <label htmlFor="" className="contact__label">
                    Message
                </label>
                <textarea
                    name="message"
                    value={formValues.message}
                    cols="0"
                    rows="6"
                    className="contact__input"
                    onChange={handleChange}
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
