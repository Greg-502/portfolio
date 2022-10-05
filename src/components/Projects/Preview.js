import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Preview({id, name, description, thumbnail}) {
    return(
        <div className={`flex ${ parseInt(id) === 2 ? 'items-center' : '' } mb-5 md:mb-0`}>
            <div className={ 'w-full border-black border-t' }>
                <a href='/'>
                    <h3 className="capitalize text-xl md:text-md font-bold mt-5 text-gray-800">{ name }</h3>
                </a>
                <p className='tracking-wide text-gray-500 text-normal pb-5 mt-1'>{ description }</p>
                <Link to='/detail'>
                    <motion.img
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        loading='lazy' 
                        className='shadow-lg object-cover max-w-full md:hover:shadow-xl' 
                        src={ thumbnail } alt={ name }>
                    </motion.img>
                </Link>
            </div>
        </div>
    )
}