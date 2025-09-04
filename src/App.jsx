import { useState } from 'react'
import Frontpage from './components/Frontpage'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
  <nav className="p-4 bg-green-900 flex gap-4 text-white justify-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
  
    <Routes>
      <Route path="/" element={<Frontpage />} />
    </Routes>
  
 </>
  )
}

export default App
