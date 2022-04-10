import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import QualificationList from "./QualificationList";
import { v4 } from "uuid";

function QualificationContent({ props }) {
    const { qualification_contents, cal } = props;

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
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

    const divider = () => {
        return (
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
            </div>
        );
    };

    return (
        <div ref={ref} className="qualification_contents ">
            {qualification_contents.map((list, i) => {
                if (i % 2 === 0) {
                    return (
                        <motion.div
                            animate={animation}
                            initial={{
                                x: "-20vw",
                                opacity: 0,
                            }}
                            key={v4()}
                            className="qualification__data"
                        >
                            <QualificationList props={{ list, cal }} />
                            {divider()} {/* after */}
                        </motion.div>
                    );
                } else {
                    return (
                        <motion.div
                            animate={animation}
                            initial={{
                                x: "+20vw",
                                opacity: 0,
                            }}
                            key={v4()}
                            className="qualification__data"
                        >
                            <div>
                                {/* this empty div is a placeholder FIXME:*/}
                            </div>
                            {divider()} {/* before */}
                            <QualificationList props={{ list, cal }} />
                        </motion.div>
                    );
                }
            })}
        </div>
    );
}

export default QualificationContent;
