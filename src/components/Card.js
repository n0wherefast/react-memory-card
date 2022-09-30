import React from "react";

const Card = (props) => {
     return (

          <button className="card"  onClick={props.click} style={{display:'flex',justifyContent:'center',alignItems:"center", width: "35rem",margin:"3rem",marginTop:'1rem',backgroundColor:"darkslategray"}}>
               <img src={props.img}  name={props.name} id={props.id} className="card-img-top"style={{padding:'1rem'}}/>
               <div className="card-body" >
                   
                        <h3 className="card-text" style={{color:"yellow"}}> {props.name}</h3>
                    
               </div>
          </button>
     );
};

export default Card;
