import { list } from "../utils/constants"
import Card from "./Card"

export default function Kaufman({}){
  return(
    <section className="kaufman">
      <h2 className="section-title section-title_theme_dark">Принципы обучения</h2>
      <p className="section-subtitle section-subtitle_theme_dark">от Джоша Кауфмана</p>
      <ul className="table table_theme_dark">
        {list.map(data => {
          return <Card card={data} key={data.name} name={'list'}/>
        })}
      </ul>
      <div className="kaufman__triangle rotation"></div>
    </section>
  )
}