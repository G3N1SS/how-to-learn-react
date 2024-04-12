export default function Card({card, appearing}){
  return(
    <li className={`cards__item ${appearing && 'cards__item_visible'}`}>
      <img src={card.link} alt={card.name} className="cards__image" />
      <h3 className="cards__title">{card.name}</h3>
      <p className="cards__description">{card.description}</p>
    </li>
  )
}