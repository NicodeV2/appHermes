import React, { useEffect } from 'react'
import { SidebarData } from './SidebarData'
const SubMenu = () => {
    
    useEffect(()=>{
        let arrow = document.querySelectorAll(".arrow");
        for (var i = 0; i < arrow.length; i++) {
          arrow[i].addEventListener("click", (e)=>{
         let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
         arrowParent.classList.toggle("showMenu");
          });
        }
        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".bx-menu");
        console.log(sidebarBtn);
        sidebarBtn.addEventListener("click", ()=>{
          sidebar.classList.toggle("close");
        });
    },[])
    return (

        <ul className="nav-links">
            {SidebarData.map(({ id, mainClass, icon, title, path, submenu }) => (
                <li key={id}>
                    {submenu.length <= 1 && (
                        <>
                            <a href={path}>
                                <i className={icon} ></i>
                                <span className="link_name">{title}</span>
                            </a>
                            <ul className="sub-menu blank">
                                {submenu.map(({id, title, path}) => (
                                    <li key={id}><a className="link_name" href={path}>{title}</a></li>
                                ))}
                            </ul>


                        </>
                    )}


                    {submenu.length > 1 && (
                        <>
                            <div className={mainClass}>
                                <a href={path}>
                                    <i className={icon} ></i>
                                    <span className="link_name">{title}</span>
                                </a>
                                <i className='bx bxs-chevron-down arrow' ></i>

                            </div>
                            <ul className="sub-menu">
                                {submenu.map(({id, title, path}) => (
                                    <li key={id}><a  href={path}>{title}</a></li>
                                ))}
                            </ul>
                        </>
                    )}
                </li>
            ))
            }

            <li>
                <div className="profile-details">
                    
                    <i className='bx bx-log-out' ></i>
                </div>
            </li>
        </ul>


    )
}

export default SubMenu
