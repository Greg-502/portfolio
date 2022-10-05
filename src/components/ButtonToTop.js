import { motion } from "framer-motion"

export default function ButtonToTop(props) {

    return(
        <>
            <motion.button
                whileHover={{ scale:1.1 }}
                className="fixed bottom-3 shadow-lg 
                    md:bottom-10 right-2 bg-purple-500 hover:bg-purple-600 
                    rounded-full w-12 h-12 opacity-50 hover:opacity-100
                    "
                onClick={ () => props.action() }
            >
                <box-icon name='up-arrow-alt' size='lg' color='#fff'></box-icon>
            </motion.button>
        </>
    )
}