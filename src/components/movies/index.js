import SampleData from "../../constants/sample.json";
import { useEffect, useState } from "react";
import { CardComponent } from "../card";
import { map } from "lodash";

export function MoviesComponent(){
    const [ moviesList, setMoviesList ] = useState([]);
    const [ showErrorState, setShowErrorState ] = useState(false);

    useEffect(()=>{
        try {
            let moviesData = SampleData.entries;
            moviesData = moviesData.filter(data=>data.releaseYear>=2010).splice(0,21);
            moviesData.sort((val1, val2) => (val1.title.toLowerCase() > val2.title.toLowerCase()) ? 1 : -1);
            moviesData = moviesData.filter(data=>data.programType==="movies");
            setMoviesList(moviesData);
        } catch(error){
            setShowErrorState(true);
        }
    },[])

    return (
        <div>
            <header className="pageheader">Popular Movies</header>
            <div className="main">
                { !showErrorState && moviesList.length>0 && map(moviesList, (moviesData, index)=>
                    <CardComponent label={moviesData?.title} imgSrc={moviesData?.images?.["Poster Art"]?.url} key={index}/>
                )}
                { !showErrorState && !moviesList.length && <span>Loading...</span> }
                { showErrorState && <span>Loading...</span> }
            </div>
        </div>
    )
}