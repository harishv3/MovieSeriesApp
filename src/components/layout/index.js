import { FooterComponent } from "../footer";
import { HeaderComponent } from "../header";
import "./style.scss";

export function LayoutComponent(props){
    return (
        <div className="layout">
            <HeaderComponent/>
            <div className="layout__body">
                {props.children}
            </div>
            <FooterComponent/>
        </div>
    )
}