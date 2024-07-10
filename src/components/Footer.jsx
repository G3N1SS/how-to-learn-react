import youtube from "../images/youtube_color_white.svg"
import vk from "../images/vk_color_white.svg"
import tiktok from "../images/tiktok_color_white.svg"

export default function Footer({}){
  return(
    <footer className="footer">
      <div className="footer__columns">
        <div className="footer__column footer__column_content_copyright">
          <div className="logo logo_place_footer"></div>
          <p className="footer__author">Ⓒ Арег Саркисян</p>
        </div>
        <nav className="footer__column footer__column_content_info">
          <h4 className="footer__column-heading">О Практикуме</h4>
          <ul className="footer__column-links">
            <li><a href="#" className="footer__column-link">Главная</a></li>
            <li><a href="#" className="footer__column-link">Концепция</a></li>
            <li><a href="#" className="footer__column-link">Наставники</a></li>
          </ul>
        </nav>  
        <nav className="footer__column footer__column_content_social">
        <h4 className="footer__column-heading">Соцсети</h4>
          <ul className="footer__column-links ">
            <li><a className="footer__column-link" href="https://www.youtube.com/channel/UCtmSUuA-slIc4Jw7ZMymotA" target="_blank"><img className="footer__social-icon"  src={youtube} alt="Ютуб"/>YouTube</a></li>
            <li><a className="footer__column-link" href="https://vk.com/seikatssu" target="_blank"><img  className="footer__social-icon" src={vk} alt="ВК"/>ВКонтакте</a></li>
            <li><a className="footer__column-link"><img  className="footer__social-icon" src={tiktok} alt="ТикТок"/>TikTok</a></li>
          </ul>
        </nav>
      </div>    
    </footer>
  )
}