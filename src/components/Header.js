import Memoji from '../images/Imagen.png'
import Scroll from '../images/down.gif'
import { Link } from 'react-scroll';

export default function Header() {
    return(
        <section id='header' className='bg-white py-8 lg:mt-14 min-h-full flex justify-center items-center px-6 md:px-12 flex-col'>
            <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-4 md:justify-evenly">
                <div className='md:text-left tracking-tight flex justify-center flex-col lg:max-w-md'>
                    <h1 className='font-Playfair text-5xl font-bold text-gray-900 md:text-7xl lg:text-8xl'>Web</h1>
                    <h1 className='font-Playfair text-5xl font-bold text-gray-900 md:text-7xl lg:text-8xl'>Developer</h1>
                    
                    <div className='tracking-wide mt-2 text-gray-500 text-md md:text-md font-light leading-6 md:leading-7'>
                        <p>
                            Transeunte en este punto azul pálido, pero nunca expectante; 
                            como dijo Galeano:
                        </p>
                        <p className='tracking-normal font-bold italic uppercase'>"Si me caí, es porque estaba caminando."</p>
                    </div>
                    
                    <div className='my-4 tracking-wide font-normal'>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} type="button" >
                            <button className="focus:ring-4 rounded-2xl text-lg md:text-md px-5 focus:outline-none text-center cursor-pointer py-4 text-white bg-purple-500 hover:bg-purple-600 shadow-lg">
                                Contáctame
                            </button>
                        </Link>
                        <Link to="projects" spy={true} smooth={true} offset={50} duration={500} type="button">
                            <button className="hover:bg-gray-100 focus:ring-4 rounded-2xl text-lg md:text-md px-5 focus:outline-none text-center cursor-pointer py-4 text-gray-500 ml-3">
                                Proyectos
                            </button>
                        </Link>
                    </div>
                </div>
                
                <div className='flex justify-center items-center my-1 md:mt-0'>
                    <img className='shadow-lg object-cover rounded-full bg-yellow-300 lg:max-w-sm' src={ Memoji } alt="Greg Puac memoji"></img>
                </div>
            </div>
            
            <div className='mt-3'>
                <img className='mx-auto w-10 md:w-12' src={ Scroll } alt="Scroll"></img>
            </div>
        </section>
    )
}

