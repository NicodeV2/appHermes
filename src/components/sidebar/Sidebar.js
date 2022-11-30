import React from 'react'

import '../styles/sidebar.css'
import SubMenu from './SubMenu'

const Sidebar = () => {
   
    
    return (
        <>
            <div className='sidebar close'>
                <div className="logo-details">
                    <i className='bx bxl-c-plus-plus'></i>
                    <span className="logo_name">Hermes</span>
                </div>
                <SubMenu />


            </div>
          
        </>
    )
}

export default Sidebar
