import { Images } from "../../assets/Images";
import { useNavigate } from "react-router-dom";
import { CardComponent } from "../card";

export function HomeComponent(){

    const navigate = useNavigate();

    return (
        <div>
            <header className="pageheader">Popular Titles</header>
            <div className="main">
                <CardComponent handleClick={()=>{navigate('/series')}} label="Popular Series" imgLabel="SERIES" imgSrc={Images.placeholder} enableCursor={true}/>
                <CardComponent handleClick={()=>{navigate('/movies')}} label="Popular Movies" imgLabel="MOVIES" imgSrc={Images.placeholder} enableCursor={true}/>
            </div>
        </div>
    )
}