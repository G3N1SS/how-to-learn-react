import { useEffect, useState } from 'react'
import techniques from '../utils/constants'
import Card from './Card'

export default function Techniques(){
  const [appear, setIsAppear]=useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
};

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true});

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  useEffect(() => {
    if(scrollPosition === 1260){
      setIsAppear(true)
      console.log('здарова')
    }
  }, [scrollPosition, window.scrollY])
  return(
    <section className="techniques" id='techniques'>
    
      <h2 className="section-title" onClick={() => console.log(window.scrollY)}>Техники обучения</h2>
      <p className="section-subtitle">Пять практик от Барбары Оакли</p>
      <ul className="cards">
        {techniques.map(data => {
          return(
            <Card card={data} key={data.name}/>
          )
        })}
      </ul>
      <h2 className="section-title" onClick={() => console.log(window.scrollY)}>Техники обучения</h2>
      <p className="section-subtitle">Пять практик от Барбары Оакли</p>
      <h2 className="section-title" onClick={() => console.log(window.scrollY)}>Техники обучения</h2>
      <p className="section-subtitle">Пять практик от Барбары Оакли</p>
      <h2 className="section-title" onClick={() => console.log(window.scrollY)}>Техники обучения</h2>
      <p className="section-subtitle">Пять практик от Барбары Оакли</p>
      <h2 className="section-title" onClick={() => console.log(window.scrollY)}>Техники обучения</h2>
      <p className="section-subtitle">Пять практик от Барбары Оакли</p>

    </section>
  )
}