// import { Route, Routes } from "react-router-dom";
import React from 'react'
import NotFoundPage from "../Errors/NotFoundPage";
import Home from '../Home'
import Detail from "../Projects/Detail";

import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";

export default function AppRouter() {
    const element = useRoutes([
        {
            path:'/',
            element: <Home />
        },
        {
            path:'/detail/:projectId',
            element: <Detail />
        },
        {
            path:'*',
            element: <NotFoundPage />
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
        // <Routes>
        //     <Route path="/" element={ <Home /> }></Route>
        //     <Route path="/detail/:projectId" element={ <Detail /> }></Route>
        //     <Route path="*" element={ <NotFoundPage /> }></Route>
        // </Routes>
    )
}