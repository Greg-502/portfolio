import { Link } from 'react-scroll';
import { motion } from "framer-motion"

export default function Header() {
    return(
        <section id='header' className='bg-white py-8 lg:mt-14 min-h-full flex justify-center items-center px-4 md:px-12 flex-col'>
            <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-4 md:justify-evenly">
                <motion.div 
                    initial={{ opacity:0, scale:0.5 }}
                    animate={{ opacity:1, scale:1 }}
                    transition={{
                        duration:0.8,
                        delay:0.2,
                        ease:[0, 0.71, 0.2, 1.01]
                    }}

                    className='text-center md:text-left flex justify-center flex-col lg:max-w-md'>
                    <h1 className='font-Playfair text-6xl font-bold text-gray-800 md:text-7xl lg:text-8xl'>Web</h1>
                    <h1 className='font-Playfair text-6xl font-bold text-gray-800 md:text-7xl lg:text-8xl'>Developer</h1>
                    
                    <div className='md:max-w-full tracking-wide mt-2 py-2 text-gray-500 text-md md:text-md font-light leading-6 md:leading-7'>
                        <p className=''>
                            Transeunte en este pequeño punto azul pálido, pero nunca expectante; 
                            como dijo Galeano:
                        </p>
                        <p className='tracking-normal font-bold italic uppercase'>"Si me caí, es porque estaba caminando."</p>
                    </div>
                    
                    <div className='tracking-wide flex flex-row justify-center md:justify-start gap-3'>
                        <motion.a 
                            whileHover={{ scale:1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            href='https://portfolio-greg.s3.amazonaws.com/pdf/Gregorio+Puac.pdf'
                            target="_blank"
                            rel="noreferrer"
                            download
                            className="my-3 rounded-2xl text-lg md:text-md px-5 text-center cursor-pointer py-4 text-white bg-purple-500 hover:bg-purple-600 shadow-lg"
                        >
                            Currículum
                        </motion.a>
                        
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                            <button
                                className="bg-gray-100 md:bg-white my-3 hover:bg-gray-100 rounded-2xl text-lg md:text-md px-5 text-center cursor-pointer py-4 text-gray-500">
                                Contáctame
                            </button>
                        </Link>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity:0, scale:0.5 }}
                    animate={{ opacity:1, scale:1 }}
                    transition={{
                        duration:0.8,
                        delay:0.3,
                        ease:[0, 0.71, 0.2, 1.01]
                    }}

                    className='flex justify-center items-center my-3 md:mt-0 md:px-0 px-2'>
                    <img 
                        className='shadow-lg object-cover rounded-full bg-yellow-300 lg:max-w-sm' 
                        src={`${ process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL_IMAGES+'general/Imagen.png' : "/images/Imagen.png" }`} 
                        alt="Greg Puac memoji">
                    </img>
                </motion.div>
            </div>
            
            <motion.div 
                initial={{ opacity:0, scale:0.5 }}
                animate={{ opacity:1, scale:1 }}
                transition={{
                    duration:0.8,
                    delay:1.1,
                    ease:[0, 0.71, 0.2, 1.01]
                }}
                className='mt-3'>
                <img 
                    className='mx-auto w-10 md:w-12'
                    src={`${ process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL_IMAGES+'general/down.gif' : "/images/down.gif" }`}
                    alt="Scroll">
                </img>
            </motion.div>
        </section>
    )
}

