import React from "react";

const Nav = (props) => {
     return (
          <nav className="navbar navbar-dark bg-dark ">
               <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1" style={{ color:"yellow",alignItems:'center'}}>
                          <h2>Star Wars Memory Game</h2>
                          <div style={{display:'flex' ,alignItems:'center'}}>Score: {props.score} <h4 style={{ display:`${props.win}` ,marginLeft:'1rem'}}>WIN</h4></div>
                          <div>Best Score: {props.bestScore}</div>
                          
                          
                    </span>
               </div>
          </nav>
     );
};
export default Nav;
