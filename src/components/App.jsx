import { useState } from 'react'
import Header from './Header'
import Description from './Description'
import Techniques from './Techniques.jsx'
import Video from './Video.jsx'
import Oakley from './Oakley.jsx'
import Feyman from './Feynman.jsx'

function App() {

  return (
    <div className='page'>
      <Header/>
      <main className='content'>
        <Description/>
        <Techniques/>
        <Video/>
        <Oakley/>
        <Feyman/>
      </main>
    </div>
  )
}

export default App
