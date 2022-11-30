import React, { useEffect } from 'react';
import { BiBriefcaseAlt } from "react-icons/bi";
import { FaMale } from "react-icons/fa";
import { transferIda } from '../data/transferData';


const ListTransfer = ({transfer,setTransfer,setListado}) => {

  useEffect(() => {
    setTransfer(transferIda);
    setListado(transferIda);
    console.log("Transfer cargados");
    //setVuelta(transferVuelta);
    console.log("Transfer Vuelta cargados")
  }, [])


  return (
    <div className='listado'>
      <div className='titulo borderTopLeftRight10'><center><b>Transfer</b></center></div>
      <div className='contenedor'>

        {transfer.map(({id, name, min_pax, max_pax, max_bag, mon, valor, modo }) => (

          <div className='card' key={id}>
            <span className='flexCenter'>{name} </span>
            <div className='imagen flexCenter'>
              {max_pax >= 5 ? (
                <img src='http://127.0.0.1:3000/images/suv.jpg' />
              ) : (
                <img src='http://127.0.0.1:3000/images/sedan.png' />
              )}

            </div>
            <div className='descVe flexCenter'>
              <div className='rect' >
                <span className='left'><FaMale /></span>
                <span className='right'>{max_pax}</span>
              </div>
              <div className='rect' >
                <span ><BiBriefcaseAlt /> </span>
                <span>{max_bag}</span>
              </div>

            </div>
            <div className='precioRes'>
              <h3>{mon} $ {valor}</h3>
              <button className='btnAgregar'>Reservar {modo}</button>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default ListTransfer
