import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { LayoutComponent } from "../components/layout";
import { HomeComponent } from "../components/home";
import { SeriesComponent } from "../components/series";
import { MoviesComponent } from "../components/movies";

function Routers(){
    return (
        <Router>
            <LayoutComponent>
                <Routes>
                    <Route element={<HomeComponent/>} path="/"/>
                    <Route element={<SeriesComponent/>} path="/series"/>
                    <Route element={<MoviesComponent/>} path="/movies"/>
                </Routes>
            </LayoutComponent>
        </Router>
    )
}

export default Routers;