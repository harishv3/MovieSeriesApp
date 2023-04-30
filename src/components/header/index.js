import "./style.scss";

export function HeaderComponent(){
    return (
        <header className="header">
            <h1>DEMO Streaming</h1>
            <div className="header__actions">
                <span className="header__login">Login</span>
                <span className="header__freetrial">Start your free trial</span>
            </div>
        </header>
    )
}