import feyman from '../images/feynman.png'

export default function Feynman({}){
  return(
    <section className="feynman">
      <h2 className="feynman__title">Метод Фейнмана</h2>
      <p className="feynman__subtitle">Выучить и не забыть.</p>
      <a href="#" className="link feynman__link">Подробнее</a>
      <img src={feyman} alt="Фейман" className="feynman__picture"/>
    </section>
  )
}