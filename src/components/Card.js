import React from "react";

const Card = (props) => {
     return (

          <div className="card" style={{width: "20rem",margin:"3rem",backgroundColor:"black"}}>
               <img src={props.img} className="card-img-top" alt="..." style={{padding:'1rem'}}/>
               <div className="card-body">
                    <p className="card-text" style={{display:'flex',justifyContent:'center',alignItems:"center",color:"yellow"}}>
                        <h3>  {props.name}</h3>
                    </p>
               </div>
          </div>
     );
};

export default Card;
