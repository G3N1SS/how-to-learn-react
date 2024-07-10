import { useState, useEffect } from 'react'
import Header from './Header'
import Description from './Description'
import Video from './Video.jsx'
import Oakley from './Oakley.jsx'
import Feyman from './Feynman.jsx'
import Techniques from './Techniques.jsx'
import Digits from './Digits.jsx'
import Khan from './Khan.jsx'
import Kaufman from './Kaufman.jsx'
import Resourses from './Resourses.jsx'
import Footer from './Footer.jsx'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTechniquesAppear, setIsTechniquesAppear]=useState(false);
  const [isVideoAppear, setIsVideoAppear]=useState(false)

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
};

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  useEffect(() => {
    if(scrollPosition >= 1000){
      setIsTechniquesAppear(true)
    }if(scrollPosition >= 1650){
      setIsVideoAppear(true)
      console.log(isVideoAppear)
    }
  }, [scrollPosition])

  return (
    <div className='page'>
      <Header/>
      <main className='content'>
        <Description/>
        <Techniques isTechniquesAppear={isTechniquesAppear}/>
        <Video appearing={isVideoAppear}/>
        <Oakley/>
        <Feyman/>
        <Digits/>
        <Khan/>
        <Kaufman/>
        <Resourses/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
