export default function Card({card, appearing, name}){
  return(
    <>
    {name === 'techniques' ?
    <li className={`cards__item ${appearing && 'cards__item_visible'}`}>
      <img src={card.link} alt={card.name} className="cards__image" />
      <h3 className="cards__title">{card.name}</h3>
      <p className="cards__description">{card.description}</p>
    </li>
    : 
    name === 'digits' ?
    <li className="table__cell">
      <h3 className="table__heading">{card.name}</h3>
      <p className="table__text">{card.description}</p>
      {card.author ? <p className="table__text">{card.author}</p> : ''}
    </li>
    :
    name === 'list' ?
    <li className="table__cell table__cell_theme_dark">
      <h3 className="table__heading table__heading_theme_dark">{card.name}</h3>
      <p className="table__text table__text_theme_dark">{card.description}</p>
    </li>
    :
    name === 'resourses' ? 
    <li>
      <a className="resources__link" href={card.link} target='_blank'>
        <img className="resources__logo" src={card.src} alt={card.name}/>
      </a>
    </li>
    : ''
    }
    </>
  )
}