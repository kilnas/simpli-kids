import React from 'react';
 
const Menu = (props) => {

    
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
 
      <div className="navbar-nav">
       
          <a className="nav-item nav-link"  href="#">Level: {props.level} </a>

          <a className="nav-item nav-link" href="#">Savings:{props.savings}</a>
          <span className="nav-item nav-link text-right" >Credit Score:{props.creditScore}</span>
           
       
      </div>
    </nav>
)}
  

export default Menu;