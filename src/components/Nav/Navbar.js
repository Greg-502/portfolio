import { useState } from "react";
import { Link as Scroll } from 'react-scroll';
import { Link } from "react-router-dom";

function Navbar() {
    const [ show, setShow ] = useState(false)

    return(
        <div>
            <nav className="px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0 shadow-sm">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to='/'>
                        <span className="block md:hidden visible md:invisible font-extrabold text-xl uppercase text-gray-800">
                            inicio
                        </span>
                    </Link>

                    <div className="flex md:order-2">
                        <button onClick={ () => setShow(!show) } data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-md text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={`${ show ? 'block' : 'hidden' } justify-between items-center w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 bg-gray-50 text-center rounded-lg shadow-lg md:shadow-none md:flex-row md:space-x-8 md:mt-0 md:text-md tracking-wide md:border-0 md:bg-transparent">
                            <Link 
                                to='/' 
                                className="hidden md:block invisible md:visible nav-link py-2 pr-4 pl-3 text-gray-500 md:hover:text-gray-800 md:p-0 cursor-pointer">
                                Inicio
                            </Link>
                            <li>
                                <Scroll to="skills" spy={true} smooth={true} offset={0} duration={500} className="nav-link block py-2 pr-4 pl-3 text-gray-500 hover:text-gray-800  md:p-0 cursor-pointer">Habilidades</Scroll>
                            </li>
                            <li>
                                <Scroll to="projects" spy={true} smooth={true} offset={0} duration={500} className="border-b-2 border-gray-200 md:border-0 nav-link block py-2 pr-4 pl-3 text-gray-500 hover:text-gray-800  md:p-0 cursor-pointer">Proyectos</Scroll>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar