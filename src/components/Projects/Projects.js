import 'boxicons'
import ProjectList from "../../json/ProjectList.js"
import Preview from './Preview.js'

function Projects() {
    return(
        <div id="projects" className='text-left text-gray-800 bg-white flex justify-center items-center min-h-full lg:min-h-screen px-6 md:px-2 flex-col py-10 md:py-0'>
            <div className="w-full md:p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:justify-evenly md:max-w-7xl">
                <div>
                    <p className="text-purple-500 font-bold text-md md:text-lg md:font-normal">Proyectos</p>
                    <h2 className="text-5xl md:text-7xl font-extrabold truncate mb-10">
                        Websites
                    </h2>

                    {
                        ProjectList.list.slice(0,1).map((element) => {
                            return(
                                <Preview 
                                    key={ element.id }
                                    id={ element.id }
                                    name={ element.id + '/ '+element.name }
                                    description={ element.description }
                                    thumbnail={ element.thumbnail }
                                />
                            )
                        })
                    }
                </div>

                {
                    ProjectList.list.slice(1,3).map((element) => {
                        return(
                            <Preview 
                                key={ element.id }
                                id={ element.id }
                                name={ element.id + '/ '+element.name }
                                description={ element.description }
                                thumbnail={ element.thumbnail }
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects