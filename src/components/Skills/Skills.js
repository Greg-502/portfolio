import Skill from "./Skill"
import Data from "../../json/Data.js";
import { motion } from "framer-motion";

export default function Skills() {
    return(
        <motion.section 
            initial={{ opacity:0, scale:0.5 }}
            animate={{ opacity:1, scale:1 }}
            transition={{
                duration:0.8,
                delay:1.1,
                ease:[0, 0.71, 0.2, 1.01]
            }}
            id="skills" className='text-left text-gray-800 bg-yellow-300 items-center md:bg-transparent flex justify-center min-h-full lg:min-h-screen px-6 md:px-12 flex-col py-10 md:py-0'>
            <div className="w-full md:bg-yellow-300 md:rounded-xl md:max-w-7xl md:p-10 grid md:grid-cols-3 gap-10 md:justify-evenly">
                <div>
                    <p className="text-purple-500 font-bold md:font-normal text-md md:text-lg">Habilidades</p>
                    <h2 className="text-5xl md:text-7xl font-extrabold truncate">
                        Techs
                    </h2>
                </div>
                
                <div className="col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-10 justify-evenly">
                    {
                        Data.skills.map((element) => {
                            return(
                                <Skill
                                    key={ element.id }
                                    title = { element.id +'/ '+ element.name }
                                    list = { element.list }
                                />
                            ) 
                        })
                    }
                </div>
            </div>
        </motion.section>
    )
}
