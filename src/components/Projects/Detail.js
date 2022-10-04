import { motion, useIsPresent } from "framer-motion";
import { useParams } from "react-router-dom";

export default function Detail () {
    const { projectId } = useParams();
    const isPresent = useIsPresent();

    return(
        <>
            <h1>{ projectId }</h1>
            <motion.div
                initial={{ scaleX:1 }}
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 }}
                className="top-0 bottom-0 left-0 right-0 z-20 fixed bg-purple-500"
            >
            </motion.div>
        </>
    )
}