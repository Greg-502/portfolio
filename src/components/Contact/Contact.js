import Links from './Links';
import { useState, useEffect } from 'react';
import Errors from '../Errors/Errors';
import axios from 'axios';

export default function Contact() {
    const [ link, setLink ] = useState([])
    const [ errors, setErrors ] = useState()

    const getYear = () => {
        const current = new Date();
        return `${ current.getFullYear() }`
    }

    useEffect(() => {
        axios
        .get("json/links.json")
        .then((res) => setLink(res.data))
        .catch((err) => {
            setErrors(err.message)
            console.log('Axios error:', err)
        })
    }, [])
    
    return(
        <section id="contact" className='items-center text-gray-800 bg-yellow-300 flex justify-center min-h-auto px-6 md:px-12 flex-col py-6 md:py-0'>
            <div className="md:max-w-7xl w-full grid lg:grid-cols-3 md:grid-cols-2 gap-10 md:justify-evenly md:p-10">
                <div>
                    <p className="text-purple-500 font-bold text-sm md:text-lg md:font-normal">Contacto</p>
                    <h2 className="tracking-tight text-5xl md:text-7xl font-extrabold">
                        Sobre mí
                    </h2>
                </div>
                
                <div className={` md:col-span-2 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-10 md:justify-evenly ${ errors && 'items-center' } `}>
                    {
                        errors
                        ? 
                        <Errors 
                            message={ errors }
                        />
                        :
                        link && link.length > 0 && link.map((element) => {
                            return(
                                <Links
                                    key = { element.id }
                                    name = { element.name }
                                    icon = { element.icon }
                                    address = { element.address }
                                    text = { element.text }
                                />
                            ) 
                        })
                    }
                </div>
                
                <footer className='mt-5 border-t border-black md:col-span-3 md:grid md:grid-cols-3 md:gap-10 md:justify-evenly text-sm'>
                    <p className='pt-4 text-left'>© { getYear() } Todos los derechos reservados</p>
                    <a href='https://dribbble.com/tanim_ui' className='invisible md:visible pt-4 text-center'>Inspirado en Tanim Khan</a>
                    <p className='invisible md:visible pt-4 text-right'>gp.zisrael@gmail.com</p>
                </footer>
            </div>
        </section>
    )
}
