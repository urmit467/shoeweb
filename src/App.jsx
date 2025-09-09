import { useState } from 'react'
import Page from './components/Page'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
 <>

    <Routes>
      <Route path="/" element={<Page />} />
    </Routes>
  
 </>
  )
}

export default App
