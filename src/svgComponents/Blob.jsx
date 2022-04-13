import { motion } from "framer-motion";

function Blob({ fill }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="home__img"
        >
            <img src="" alt="" />
        </motion.div>
    );
}

export default Blob;
