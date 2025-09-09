import { useState } from 'react'
import Frontpage from './components/Frontpage'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
 <>

    <Routes>
      <Route path="/" element={<Frontpage />} />
    </Routes>
  
 </>
  )
}

export default App
