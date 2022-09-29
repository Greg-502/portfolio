import Memoji from '../images/Imagen.png'
import Scroll from '../images/down.gif'
import { Link } from 'react-scroll';

export default function Header() {
    return(
        <section id='header' className='bg-white py-8 lg:mt-14 min-h-full flex justify-center items-center px-4 md:px-12 flex-col'>
            <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-4 md:justify-evenly">
                <div className='text-center md:text-left tracking-tight flex justify-center flex-col lg:max-w-md'>
                    <h1 className='font-Playfair text-6xl font-bold text-gray-800 md:text-7xl lg:text-8xl'>Web</h1>
                    <h1 className='font-Playfair text-6xl font-bold text-gray-800 md:text-7xl lg:text-8xl'>Developer</h1>
                    
                    <div className='md:max-w-full tracking-wide mt-2 py-2 text-gray-500 text-md md:text-md font-light leading-6 md:leading-7'>
                        <p className=''>
                            Transeunte en este pequeño punto azul pálido, pero nunca expectante; 
                            como dijo Galeano:
                        </p>
                        <p className='tracking-normal font-bold italic uppercase'>"Si me caí, es porque estaba caminando."</p>
                    </div>
                    
                    <div>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} type="button" >
                            <button className="my-3 rounded-2xl text-lg md:text-md px-5 text-center cursor-pointer py-4 text-white bg-purple-500 hover:bg-purple-600 shadow-lg">
                                Contáctame
                            </button>
                        </Link>
                        <Link to="projects" spy={true} smooth={true} offset={50} duration={500} type="button">
                            <button className="bg-gray-100 md:bg-white my-3 hover:bg-gray-100 rounded-2xl text-lg md:text-md px-5 text-center cursor-pointer py-4 text-gray-500 ml-3">
                                Proyectos
                            </button>
                        </Link>
                    </div>
                </div>
                
                <div className='flex justify-center items-center my-3 md:mt-0 md:px-0 px-2'>
                    <img 
                        className='shadow-lg object-cover rounded-full bg-yellow-300 lg:max-w-sm' 
                        src={`${ process.env.REACT_APP_URL_IMAGES ? process.env.REACT_APP_URL_IMAGES+'general/Imagen.png' : require("../images/Imagen.png") }`} 
                        alt="Greg Puac memoji">
                    </img>
                </div>
            </div>
            
            <div className='mt-3'>
                <img 
                    className='mx-auto w-10 md:w-12'
                    src={`${ process.env.REACT_APP_URL_IMAGES ? process.env.REACT_APP_URL_IMAGES+'general/down.gif' : require("../images/down.gif") }`}
                    alt="Scroll">
                </img>
            </div>
        </section>
    )
}

