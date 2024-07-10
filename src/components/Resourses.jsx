import { resources } from "../utils/constants"
import Card from "./Card"

export default function Resourses(){
  return(
  <section className="resources">
    <h2 className="section-title">Полезные ресурсы</h2>
    <p className="section-subtitle">Больше материалов о техниках и лайфхаках обучения</p>
    <ul className="resources__logo-zone">
      {resources.map(data =>{
        return <Card card={data} key={data.name} name='resourses'/>
      })}
    </ul>
  </section>
)
}