import Card from "./Card";
import {facts} from "../utils/constants"

export default function Digits({}){
  return(
    <section className="digits">
    <h2 className="section-title">Цифры и факты</h2>
    <p className="section-subtitle">Про учёбу и мозг</p>
      <ul className="table">
        {facts.map(data => {
          return(
          <Card card={data} key={data.name} name={'digits'}/>
          )
        })}
      </ul>
    </section>
  )
}