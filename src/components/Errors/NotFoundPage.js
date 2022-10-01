import { Link } from "react-router-dom";
import 'boxicons'

export default function NotFoundPage(){
    return(
        <section className='text-gray-800 bg-gray-100 items-center flex justify-center lg:min-h-screen px-6 md:px-12 flex-col py-10 md:py-0'>
            <div className="w-full md:max-w-7xl md:p-10 items-center flex justify-center flex-col">
                <img 
                    className="bg-yellow-300 rounded-full shadow-lg object-cover md:w-80"
                    src="/images/NotFoundPage.png" 
                    alt="Página no encontrada"
                />
                <h2 className="mt-6 text-5xl md:text-4xl mb-0 font-extrabold truncate">Oops...</h2>
                <h2 className="text-5xl md:text-base font-normal truncate text-gray-500">¡Esta página no existe!</h2>

                <div className="items-center flex justify-center my-4 gap-1">
                <box-icon name='arrow-back' size='sm' color='#8B5CF6'></box-icon>
                <Link to='/' className="text-purple-500 font-semibold">
                    Volver al inicio
                </Link>
                </div>
            </div>
        </section>
    )
}