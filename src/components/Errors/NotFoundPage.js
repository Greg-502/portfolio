import { Link } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";

export default function NotFoundPage(){
    const isPresent = useIsPresent();

    return(
        <section className='text-gray-800 items-center flex justify-center h-screen px-6 md:px-12 flex-col py-10 md:py-0'>
            <div className="w-full md:max-w-7xl md:p-10 items-center flex justify-center flex-col">
                <img 
                    className="bg-yellow-300 rounded-full shadow-lg object-cover w-72"
                    src={`${ process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL_IMAGES+'general/NotFoundPage.png' : "/images/NotFoundPage.png" }`}
                    alt="Página no encontrada"
                />
                <h2 className="mt-6 text-5xl md:text-4xl mb-0 font-extrabold">Oops...</h2>
                <h2 className="tracking-wide py-4 text-md text-gray-500">¡Esta página no existe! Vuelve al inicio.</h2>

                <motion.div 
                    whileHover={{ scale:1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className='mt-4'
                >
                    <Link to='/' 
                        className="tracking-wide rounded-2xl text-lg md:text-md px-5 cursor-pointer py-4 text-white bg-purple-500 hover:bg-purple-600 shadow-lg">
                        Volver al inicio
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ scaleX:1 }}
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 }}
                className="top-0 bottom-0 left-0 right-0 z-20 fixed bg-purple-500"
            >
            </motion.div>
        </section>
    )
}