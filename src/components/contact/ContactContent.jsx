import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactContent({ title, address, icon }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                x: 0,
                transition: { duration: 1, bounce: 0.3 },
            });
        }
        if (!inView) {
            animation.start({});
        }
    }, [animation, inView]);

    return (
        <div ref={ref} className="contact__information">
            <FontAwesomeIcon icon={icon} className="contact__icon" />

            <motion.div
                animate={animation}
                initial={{
                    x: "-25px",
                    opacity: 0,
                }}
            >
                <h3 className="contact__title">{title}</h3>
                <span className="contact__subtitle">{address}</span>
            </motion.div>
        </div>
    );
}

export default ContactContent;
