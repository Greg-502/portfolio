import Skill from "./Skill"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Errors from '../Errors/Errors'
import axios from 'axios'

export default function Skills() {
    const [ tech, setTech ] = useState([])
    const [ errors, setErrors ] = useState()

    const getTechs = () => {
        axios
        .get("json/skills.json")
        .then((res) => setTech(res.data))
        .catch((err) => {
            setErrors(err.message)
            console.log('Axios error:', err)
        })
    }

    useEffect(() => {
        getTechs()
    }, [])
    
    return(
        <motion.section 
            initial={{ opacity:0, scale:0.5 }}
            animate={{ opacity:1, scale:1 }}
            transition={{
                duration:0.8,
                delay:1,
                ease:[0, 0.71, 0.2, 1.01]
            }}
            id="skills" className='md:bg-transparent bg-yellow-300 text-gray-800 items-center flex justify-center min-h-full lg:min-h-screen px-6 md:px-0 flex-col py-6 md:py-0'>
            <div className="bg-transparent md:bg-yellow-300 w-full md:px-28 md:py-10 grid md:grid-cols-3 gap-10 md:justify-evenly">
                <div>
                    <p className="text-purple-500 font-bold md:font-normal text-md md:text-lg">Habilidades</p>
                    <h2 className="tracking-tight text-5xl md:text-7xl font-extrabold truncate">
                        Techs
                    </h2>
                </div>
                
                <div className={`col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-10 justify-evenly ${ errors && 'items-center' } `}>
                    {
                        errors
                        ? 
                        <Errors 
                            message={ errors }
                        />
                        :
                        tech && tech.length > 0 && tech.map((element) => (
                            <Skill
                                key={ element.id }
                                title = { element.id +'/ '+ element.name }
                                list = { element.list }
                            />
                        ))
                    }
                </div>
            </div>
        </motion.section>
    )
}
