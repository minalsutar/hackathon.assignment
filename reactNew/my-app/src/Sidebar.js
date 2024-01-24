// import React from 'react';
// import { Link } from 'react-router-dom';
// import './index.css';



// const Sidebar = () => {
//   return (
//     <>
//     <div className="sidebar">
//       <ul>
//         <li><Link to="/Home">Home</Link></li>
//         <li><Link to="/category">Category</Link></li>
        
//         <li><Link to="/product">Product</Link></li>
//       </ul>
//     </div>
//     <div>
      
//     </div>
//     </>
//   );
// };

// export default Sidebar;

import React, { useState } from 'react';
import {
    //FaTh,
    FaBars,
    FaUserAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Header from './Header';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        // {
        //     path:"/",
        //     name:"Dashboard",
        //     icon:<FaTh/>
        // },
        {
            path:"/Home",
            name:"Home",
            icon:<FaUserAlt/>
        },

        {
          path:"/Category",
          name:"Category",
          icon:<FaThList/>
        },
        {
            path:"/Product",
            name:"Product",
            icon:<FaShoppingBag/>
        }  
        
    ]
    return (
      <>
      <Header/>
        <div className="main_container">
          
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
        </>
    );
};

export default Sidebar;
