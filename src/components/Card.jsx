export default function Card({card}){
  return(
    <li className="cards__item">
      <img src={card.link} alt={card.name} className="cards__image" />
      <h3 className="cards__title">{card.name}</h3>
      <p className="cards__description">{card.description}</p>
    </li>
  )
}