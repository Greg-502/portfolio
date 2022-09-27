import Skill from "./Skill"
import Data from "../../json/Data.js";

export default function Skills() {
    return(
        <section id="skills" className='text-left text-gray-900 bg-yellow-300 md:bg-transparent relative flex justify-center min-h-full lg:min-h-screen px-6 md:px-12 flex-col py-10 md:py-0'>
            <div className="relative max-w-7xl md:bg-yellow-300 md:rounded-xl rounded-xl md:p-10 grid md:grid-cols-3 gap-10 md:justify-evenly">
                <div>
                    <p className="text-purple-500 font-normal text-sm md:text-lg">Habilidades</p>
                    <h2 className="text-4xl md:text-6xl font-semibold truncate">
                        Techno
                    </h2>
                </div>
                
                <div className="col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-10 justify-evenly">
                    {
                        Data.skills.map((element) => {
                            return(
                                <Skill
                                    title = { element.name }
                                    list = { element.list }
                                />
                            ) 
                        })
                    }
                </div>
            </div>
        </section>
    )
}
