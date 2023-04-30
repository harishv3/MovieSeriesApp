import SampleData from "../../constants/sample.json";
import { useEffect, useState } from "react";
import { CardComponent } from "../card";
import { map } from "lodash";

export function SeriesComponent(){
    const [ seriesList, setSeriesList ] = useState(null);
    const [ showErrorState, setShowErrorState ] = useState(false);

    useEffect(()=>{
        try {
            let seriesData = SampleData.entries;
            seriesData = seriesData.filter(data=>data.releaseYear>=2010);
            seriesData.sort((val1, val2) => (val1.title.toLowerCase() > val2.title.toLowerCase()) ? 1 : -1);
            seriesData = seriesData.filter(data=>data.programType==="series");
            seriesData = seriesData.splice(0,21);
            setSeriesList(seriesData);
        } catch(error){
            setShowErrorState(true);
        }
    },[])

    return (
        <div>
            <header className="pageheader">Popular Series</header>
            <div className="main">
                { !showErrorState && seriesList?.length>0 && map(seriesList, (seriesData, index)=>
                    <CardComponent label={seriesData?.title} imgSrc={seriesData?.images?.["Poster Art"]?.url} key={index}/>
                )}
                { !showErrorState && !seriesList?.length && <span>Loading...</span> }
                { showErrorState && <span>Oops, something went wrong...</span> }
            </div>
        </div>
    )
}