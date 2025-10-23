import { useState } from 'react'
import Page from './components/Page'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Main from './components/Products/Main.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
 <>

    <Routes>
      <Route path="/shoeweb" element={<Page />} />
      <Route path="/shoeweb/Products" element={<Main/>} />
    </Routes>
  
 </>
  )
}

export default App
