import axios from 'axios';
import { useEffect, useState } from 'react';
import Preview from './Preview.js';
import Errors from '../Errors/Errors';
import { motion, useIsPresent } from 'framer-motion';

function Projects() {
    const [ project, setProjects ] = useState([])
    const [ errors, setErrors ] = useState()

    const getProjects = () => {
        axios
        .get("json/projects.json")
        .then((res) => setProjects(res.data))
        .catch((err) => {
            setErrors(err.message)
            console.log('Axios error:', err)
        })
    }

    useEffect(() => {
        getProjects()
        console.log('first')
    }, [])

    const isPresent = useIsPresent();
    
    return(
        <div id="projects" className='text-left text-gray-800 flex justify-center items-center min-h-full lg:min-h-screen px-6 md:px-2 flex-col py-10 md:py-0'>
            <div className={`w-full md:p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:justify-evenly md:max-w-7xl ${ errors && 'items-center' }`}>
                <div>
                    <p className="text-purple-500 font-bold text-md md:text-lg md:font-normal">Proyectos</p>
                    <h2 className="tracking-tight text-5xl md:text-7xl font-extrabold truncate mb-10">
                        Websites
                    </h2>

                    {
                        project && project.length > 0 && project.slice(0,1).map((element) => {
                            return(
                                <Preview 
                                    key={ element.id }
                                    id={ element.id }
                                    name={ element.id + '/ '+element.name }
                                    description={ element.description }
                                    thumbnail={ 
                                        process.env.NODE_ENV === 'production'
                                        ? element.aws_thumbnail
                                        : element.thumbnail 
                                    }
                                />
                            )
                        })
                    }
                </div>

                {
                    errors
                    ? 
                    <Errors 
                        message={ errors }
                    />
                    :
                    project && project.length > 0 && project.slice(1,3).map((element) => {
                        return(
                            <Preview 
                                key={ element.id }
                                id={ element.id }
                                name={ element.id + '/ '+element.name }
                                description={ element.description }
                                thumbnail={ 
                                    process.env.NODE_ENV === 'production'
                                    ? element.aws_thumbnail
                                    : element.thumbnail 
                                }
                            />
                        )
                    })
                }
            </div>

            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 }}
                className="top-0 bottom-0 right-0 left-0 fixed z-20 bg-purple-500"
            >
            </motion.div>
        </div>
    )
}

export default Projects