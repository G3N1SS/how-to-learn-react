import { useState } from 'react'
import Header from './Header'
import Description from './Description'
import Techniques from './Techniques.jsx'

function App() {

  return (
    <div className='page'>
      <Header/>
      <main className='content'>
        <Description/>
        <Techniques/>
      </main>
    </div>
  )
}

export default App
