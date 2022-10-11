import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import FormPizza from './components/FormPizza'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className='container'>
        <FormPizza />
      </div>
    </div>
  )
}

export default App
