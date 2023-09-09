import React from 'react'
import "../styles/float.css"


const SerchBar = () => {
  return (
    <div className='busqueda'>

<div className="group">      
      <input type="text" className='text1' name='desde' required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label className='labeltext1'>Punto Desde</label>
    </div>
    <div className="group">      
      <input type="text" className='text1' name='hasta' required/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label className='labeltext1'>Punto Hasta</label>
    </div>


    </div>
  )
}

export default SerchBar
