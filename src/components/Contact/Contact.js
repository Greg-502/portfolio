import 'boxicons'
import Social from './Social'
import Address from "../../json/Address";

function Contact() {
    const current = new Date();
    const year = `${ current.getFullYear() }`

    return(
        <section id="contact" className='text-left text-gray-900 bg-yellow-300 md:bg-transparent relative flex justify-center min-h-auto px-6 md:px-12 flex-col md:py-10 pt-5'>
            <div className="relative w-full grid lg:grid-cols-3 md:grid-cols-2 gap-10 md:justify-evenly md:bg-yellow-300 md:rounded-xl md:p-10">
                <div>
                    <p className="text-purple-500 font-normal text-sm md:text-lg">Contacto</p>
                    <h2 className="text-4xl md:text-6xl font-semibold">
                        Más sobre mí
                    </h2>
                </div>
                
                <div className="md:col-span-2 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-10 md:justify-evenly">
                    {
                        Address.network.map((element) => {
                            return(
                                <Social
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
                
                <footer className='mt-10 border-t border-black md:col-span-3 md:grid md:grid-cols-3 md:gap-10 md:justify-evenly text-sm'>
                    <p className='pt-4 text-left'>© { year } Todos los derechos reservados</p>
                    <a href='#' className='invisible md:visible pt-4 text-center'>Inspirado en Tanim Khan</a>
                    <a href='#' className='invisible md:visible pt-4 text-right'>gp.israel@icloud.com</a>
                </footer>

            </div>
        </section>
    )
}

export default Contact