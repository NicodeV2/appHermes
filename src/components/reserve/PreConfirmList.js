import React  from 'react'
import { BiBriefcaseAlt } from "react-icons/bi";
import { FaMale } from "react-icons/fa";
const PreConfirmList = ({ pax, setPax, bag, setBag, listado, setTransfer }) => {


  //let bagAux = 1;
  const modPax = (e, change) => {
    if (change === 1) {
      if (pax > 1) {
        setPax(pax - 1);
       // setpaxAux(pax - 1);
        filtra((pax - 1), bag);
      }
    } else {
      if (pax < 9) {
        setPax(pax + 1)
     //   setpaxAux(pax + 1);
        filtra((pax + 1), bag);
      }
    }
  }

  const modBag = (e, change) => {
    if (change === 1) {
      if (bag > 1) {
        setBag(bag - 1);
     //   setbagAux(bag - 1);
        filtra(pax, (bag - 1));
      }
    } else {
      if (bag < 10) {
        setBag(bag + 1);
     //   setbagAux(bag + 1);
        filtra(pax, (bag + 1));
      }
    }
  }

  const filtra = (pax2, bag2) => {
   console.log("filtro bag: pax=>" + pax2 + " -- bag=>" + bag2)
    setTransfer(
      listado
        .filter(item => item.max_pax >= pax2)
        .filter(item => item.max_bag >= bag2)
    );
  }

  return (
    <div className='compras'>
      <div className='titulo borderTopLeftRight10'> <center>Filtros</center></div>

      <div className='alinea row2 centra'>
        <span className='left col1 centra' ><FaMale /></span>
        <div className='countainer col2 centra' >
          <button className='counterbtn' onClick={e => modPax(e, 1)}>{`<`}</button>
          <input
            type="text"
            readOnly
            className='counter'
            value={pax}
          />

          <button className='counterbtn' onClick={e => modPax(e, 2)}>{`>`}</button>
        </div>
      </div>


      <div className='alinea row3 centra'>
        <span className='left col1 centra' ><BiBriefcaseAlt /></span>
        <div className='countainer col2 centra'>
          <button className='counterbtn' onClick={e => modBag(e, 1)}>{`<`}</button>
          <input
            type="text"
            className='counter'
            readOnly
            value={bag} />

          <button className='counterbtn' onClick={e => modBag(e, 2)}>{`>`}</button>
        </div>
      </div>




    </div>
  )
}

export default PreConfirmList
