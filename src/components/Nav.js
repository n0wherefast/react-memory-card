import React from "react";

const Nav = (props) => {
     return (
          <nav className="navbar navbar-dark bg-dark">
               <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1" style={{color:"yellow",display:"flex",flexDirection:"row",alignItems:'center'}}>
                          <h1 style={{marginRight:'70rem'}}>Star Wars Memory Game</h1>
                          <div style={{marginRight:'2rem'}}>Score: {props.score}</div>
                          <div>Best Score: {props.bestScore}</div>
                    </span>
               </div>
          </nav>
     );
};
export default Nav;
