import {Route, Routes} from "react-router-dom"

import Home from "../containers/home"
import Movies from "../containers/movies"
import Series from "../containers/series"
import DefaultLayout from "../layout/DefaultLayout"
import Detail from "../containers/detail"

function Router () {
    return (
        <Routes>
            <Route element={<DefaultLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/filmes" element={<Movies/>}/>
            <Route path="/series" element={<Series/>}/>
            <Route path="/detalhe/:id" element={<Detail/>}/>
            </Route>   
        </Routes>
    )
}

export default Router