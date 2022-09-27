import React from "react";
import { useState, useEffect } from "react";

import Nav from "./components/Nav";
import Card from "./components/Card";
import yoda from "./img/yoda.png";
import vader from "./img/vader.png";
import trooper from "./img/trooper.png";
import solo from "./img/solo.png";
import R2 from "./img/R2.jpeg";
import obiWan from "./img/obiWan.png";
import luke from "./img/luke.png";
import leia from "./img/leia.jpeg";
import kylo from "./img/kylo.jpeg";
import chube from "./img/chube.png";
import C3PO from "./img/C3PO.jpeg";
import BobaFet from "./img/BobaFet.png";
import Poe from "./img/Poe.png";
import Palpatine from "./img/palpatine.png";
import Finn from "./img/finn.png";
import BBO from "./img/BBO.jpeg";




function App() {
  const [cards,setCard] = useState([
  {id:0,name:'Yoda',pic:yoda},
  {id:1,name:'Vader',pic:vader},
  {id:2,name:'Trooper',pic:trooper},
  {id:3,name:'Solo',pic:solo},
  {id:4,name:'R2',pic:R2},
  {id:5,name:'ObiWan',pic:obiWan},
  {id:6,name:'Luke',pic:luke},
  {id:7,name:'Leia',pic:leia},
  {id:8,name:'Kylo',pic:kylo},
  {id:9,name:'Chube',pic:chube},
  {id:10,name:'C3-PO',pic:C3PO},
  {id:11,name:'BobaFet',pic:BobaFet},
  {id:12,name:'Poe',pic:Poe},
  {id:13,name:'Palpatine',pic:Palpatine},
  {id:14,name:'Finn',pic:Finn},
  {id:15,name:'BBO',pic:BBO}],
)
const [score,setScore] = useState(0)
const [bestScore,setBestScore] = useState(0)

 const handleClick = (e) =>{
  setScore(score+10)
  setBestScore(score)
  let move = e.target.id
  let newMove = e.target.id;
  // console.log( move)  
}

function shuffle(array) {
  let shuffledArray = [];
  let usedIndexes = [];
 
  let i = 0;
  while (i < array.length) {
    let randomNumber = Math.floor(Math.random() * array.length);
      if (!usedIndexes.includes(randomNumber)) {
        shuffledArray.push(array[randomNumber]);
        usedIndexes.push(randomNumber);
        i++;
        }
    }
    return shuffledArray;
}

useEffect(()=>{
  
    console.log(shuffle(cards))
},[handleClick])



// const isMatch = (e)=>{

// }
     return (
          <>
               <Nav 
               score={score}
               bestScore={bestScore}/>

                 <div className="container" style={{backgroundColor:'black'}}>
                <div className="row">
                  {shuffle( cards.map(card =>(
                    <Card
                    id={card.id}
                    key={card.id}
                    img={card.pic}
                    name={card.name}
                    Click={handleClick} />
                  )))}
                </div>    
                </div>
          </>
     );
}

export default App;
