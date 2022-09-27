import React from "react";

const Card = (props) => {
     return (

          <button className="card"  onClick={props.Click} style={{width: "20rem",margin:"3rem",backgroundColor:"black"}}>
               <img src={props.img} id={props.id} className="card-img-top" alt="..." style={{padding:'1rem'}}/>
               <div className="card-body">
                   
                        <h3 className="card-text" style={{display:'flex',justifyContent:'center',alignItems:"center",color:"yellow"}}> {props.name}</h3>
                    
               </div>
          </button>
     );
};

export default Card;
