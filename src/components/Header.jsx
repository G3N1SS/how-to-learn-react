import header from '../images/two_again.png'

export default function Header({}){
  return(
    <header className="header">
      <div className="logo logo_place_header"></div>
      <h1 className="header__title">Научиться учиться</h1>
      <h2 className="header__subtitle">Какие современные и эффективные подходы к обучению вы можете использовать в своей жизни? <a href='#techniques' className="header__subtitle-link link">Узнать</a></h2>
      <img className="header__main-illustration" src={header} alt="Снова два"/>
      <div className="header__square-pic rotation"></div>
    </header>
  )
}