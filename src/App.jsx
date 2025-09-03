import { useState } from 'react'
import Frontpage from './components/Frontpage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
  <Frontpage />
 </>
  )
}

export default App
