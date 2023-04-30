import "./style.scss";
import { APP_CONSTANTS } from "../../constants";
import { map } from "lodash";
import { Images } from "../../assets/Images";

export function FooterComponent(){
    return (
        <footer className="footer">
            <ul>
                {map(APP_CONSTANTS.pageList,(pageName, index)=>
                    <li key={index}>
                        <span>{pageName}</span>
                        { !(index === APP_CONSTANTS.pageList.length-1) && <span className="footer__seperator">|</span> }
                    </li>
                )}
            </ul>
            <span>Copyright&#169;2016 DEMO Streaming.All Rights Reserved</span>
            <div className="footer__actions">
                <div className="footer__media">
                    <span><img src={Images.fbIcon} alt="fb" className="footer__media--social"/></span>
                    <span><img src={Images.twitterIcon} alt="twitter" className="footer__media--social"/></span>
                    <span><img src={Images.instagramIcon} alt="instagram" className="footer__media--social"/></span>
                </div>
                <div className="footer__media">
                    <span><img src={Images.appstoreIcon} alt="appstore" className="footer__media--store"/></span>
                    <span><img src={Images.playstoreIcon} alt="playstore" className="footer__media--store"/></span>
                    <span><img src={Images.windowsIcon} alt="windowsstore" className="footer__media--store"/></span>
                </div>
            </div>
        </footer>
    )
}