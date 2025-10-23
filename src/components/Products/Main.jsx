import React from 'react'
import Nav from './Nav.jsx'
import Slide from './Slide.jsx'
const Main = () => {
  return (
    <div className='bg-[#CFFFDC] h-350'>

        <div ><Nav /></div>
        <div className='flex mt-10 '>
            <Slide />

        </div>
        
    </div>
  )
}

export default Main