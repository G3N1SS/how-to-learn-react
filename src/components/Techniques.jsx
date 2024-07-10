import {techniques} from '../utils/constants'
import Card from './Card'

export default function Techniques({isTechniquesAppear}){

  return(
    <section className="techniques" id='techniques'>
      <h2 className="section-title">Техники обучения</h2>
      <p className="section-subtitle">Пять практик от Барбары Оакли</p>
      <ul className="cards">
        {techniques.map(data => {
          return(
            <Card card={data} key={data.name} appearing={isTechniquesAppear} name={'techniques'}/>
          )
        })}
      </ul>
    </section>
  )
}