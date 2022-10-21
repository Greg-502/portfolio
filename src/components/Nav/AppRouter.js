import React from 'react'
import GenericResponse from "../GenericResponse";
import Home from '../Home'

import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";

export default function AppRouter() {
    const element = useRoutes([
        {
            path:'/',
            element: <Home />
        },
        {
            path:'/detail',
            element: <GenericResponse message={ '¡Pronto podrás verlo desplegado!' } />
        },
        {
            path:'*',
            element: <GenericResponse message={ 'Esta página no existe.' } />
        },
    ])

    const location = useLocation();

    if(!element) return null;

    return(
        <AnimatePresence mode="wait" initial={false}>
            {
                React.cloneElement(element, { key: location.pathname })
            }
        </AnimatePresence>
    )
}