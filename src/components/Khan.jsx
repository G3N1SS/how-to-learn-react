import book from '../images/khan-book.jpg'

export default function Khan({}){
  return(
    <section className="khan">
      <div className="khan__container">
        <p className="khan__author">Салман Хан</p>
        <h2 className="khan__title">Весь мир - школа</h2>
        <p className="khan__quote">Страсть и новаторство Сала Хана меняют процесс обучения миллионов студентов по всему миру. Книгу «Весь мир — школа» нужно прочитать всем, кто занимается образованием — так учащиеся повсюду смогут получить навыки и знания, которые приносят успех в школе, карьере и жизни.</p>
        <p className="khan__quote-author">Джордж Лукас</p>
        <p className="khan__quote-author-subline">Кинорежиссер, продюсер</p>
        <div className="khan__book-container">
          <img className="khan__book-pic" src={book} alt="Книга Хана"/>
          <a className="khan__buy-link link" href="https://www.ozon.ru/product/ves-mir-shkola-preobrazovannoe-obrazovanie-162999126/">Купить книгу</a>
        </div>
      </div>
    </section>
  )
}