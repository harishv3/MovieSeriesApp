import "./style.scss";

export function CardComponent({ label, imgLabel, imgSrc, handleClick, enableCursor }){
    return (
        <div className="card" onClick={handleClick}>
            <div className="card__container" style={{backgroundImage: `url(${imgSrc})`, cursor: enableCursor?"pointer":""}}>{imgLabel}</div>
            <span className="card__name" style={{cursor: enableCursor?"pointer":""}}>{label}</span>
        </div>
    )
}