import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { IconContext } from "react-icons";


const LeftBar = () => {
  return (
    <div className='menu_izquierdo'>
      <div className='row1'>
        <div className='titulo borderTopLeftRight10'> <center>Resumen</center></div>
        
      </div>
      <div className='row2'>
        <div className='titulo borderTopLeftRight10'> <center>Transfer Ida</center></div>
        <div className='card2'>
          <div className='rowSpan1-2 operadoPor'>
            <img alt='asd' src='http://127.0.0.1:3000/logos/logo-vmove.png' />

          </div>
          <div className='destinos autoHeight row1 col2'>
            La reforma 90, maipu
          </div>
          <div className='destinos autoHeight row2 col2'>
            Apoquindo 3000,las condes
          </div>
          <div className='col3 centra rowSpan1-2'>
            $27.000
          </div>
          <div className='col4 eliminar rowSpan1-2'>
            <IconContext.Provider
              value={{ color: 'red', size: '40' }}
            >
              <TiDeleteOutline />
            </IconContext.Provider>
          </div>
        </div>
        <div className='card2'>
          <div className='rowSpan1-2 operadoPor'>
            <img alt='asd' src='http://127.0.0.1:3000/logos/logo-vmove.png' />

          </div>
          <div className='destinos autoHeight row1 col2'>
            La reforma 90, maipu
          </div>
          <div className='destinos autoHeight row2 col2'>
            Apoquindo 3000,las condes
          </div>
          <div className='col3 centra rowSpan1-2'>
            $27.000
          </div>
          <div className='col4 eliminar rowSpan1-2'>
            <IconContext.Provider
              value={{ color: 'red', size: '40' }}
            >
              <TiDeleteOutline />
            </IconContext.Provider>
          </div>
        </div>

      </div>

      <div className='row3'>
        <div className='titulo borderTopLeftRight10'> <center>Transfer Vuelta</center></div>
        <div className='card2'>
          <div className='rowSpan1-2 operadoPor'>
            <img alt='asd' src='http://127.0.0.1:3000/logos/logo-vmove.png' />

          </div>
          <div className='destinos autoHeight row1 col2'>
            La reforma 90, maipu
          </div>
          <div className='destinos autoHeight row2 col2'>
            Apoquindo 3000,las condes
          </div>
          <div className='col3 centra rowSpan1-2'>
            $27.000
          </div>
          <div className='col4 eliminar rowSpan1-2'>
            <IconContext.Provider
              value={{ color: 'red', size: '40' }}
            >
              <TiDeleteOutline />
            </IconContext.Provider>
          </div>
        </div>
        <div className='card2'>
          <div className='rowSpan1-2 operadoPor'>
            <img alt='asd' src='http://127.0.0.1:3000/logos/logo-vmove.png' />

          </div>
          <div className='destinos autoHeight row1 col2'>
            La reforma 90, maipu
          </div>
          <div className='destinos autoHeight row2 col2'>
            Apoquindo 3000,las condes
          </div>
          <div className='col3 centra rowSpan1-2'>
            $27.000
          </div>
          <div className='col4 eliminar rowSpan1-2'>
            <IconContext.Provider
              value={{ color: 'red', size: '40' }}
            >
              <TiDeleteOutline />
            </IconContext.Provider>
          </div>
        </div>


      </div>






    </div>
  )
}

export default LeftBar
