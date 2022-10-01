import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../Errors/NotFoundPage";
import Home from '../Home'
import Test from '../Test'

export default function AppRouter() {
    return(
        <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/test" element={ <Test /> }></Route>
            <Route path="*" element={ <NotFoundPage /> }></Route>
        </Routes>
    )
}