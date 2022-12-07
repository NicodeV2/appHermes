import React, { useState } from 'react';
import LeftBar from '../reserve/LeftBar';
import ListTransfer from '../reserve/ListTransfer';
import Mapa from '../reserve/Mapa';
import PreConfirmList from '../reserve/PreConfirmList';
import SerchBar from '../reserve/SerchBar';
import '../styles/mainSection.css'


const MainSection = () => {
    

    const [pax , setPax] = useState(1);
    const [bag , setBag] = useState(1);
    const [transfer, setTransfer] = useState([]);
    const [listado,setListado] = useState([]);
  //  console.log("main:"+pax);
    

    //setTransfer(listado.filter(item => item.max_pax >= pax));
    //console.log(pax);
    return (
        <>
            <section className="home-section">
                <div className="home-content">
                    <i className='bx bx-menu' ></i>
                    <span className="text">asd</span>
                </div>
                <div className='grid_layout'>
                    <LeftBar/>  
                    <SerchBar/>
                    <Mapa/>
                    <PreConfirmList
                     pax={pax}
                     setPax={setPax}
                     bag={bag}
                     setBag={setBag}
                     listado={listado}
                     setTransfer = {setTransfer}
                    
                    />
                    <ListTransfer
                    transfer = {transfer}
                    setTransfer = {setTransfer}
                    setListado = {setListado}
                 
                    />
                </div>
            </section>
        </>
    )
}

export default MainSection
