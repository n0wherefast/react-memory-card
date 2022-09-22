import React from "react";
import { useState } from "react";
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
  {id:2,name:'Vader',pic:vader},
  {id:3,name:'Trooper',pic:trooper},
  {id:4,name:'Solo',pic:solo},
  {id:5,name:'R2',pic:R2},
  {id:6,name:'ObiWan',pic:obiWan},
  {id:7,name:'Luke',pic:luke},
  {id:8,name:'Leia',pic:leia},
  {id:9,name:'Kylo',pic:kylo},
  {id:10,name:'Chube',pic:chube},
  {id:11,name:'C3-PO',pic:C3PO},
  {id:12,name:'BobaFet',pic:BobaFet},
  {id:13,name:'Poe',pic:Poe},
  {id:14,name:'Palpatine',pic:Palpatine},
  {id:15,name:'Finn',pic:Finn},
  {id:16,name:'BBO',pic:BBO}],
)
const [score,setScore] = useState(0)
const [bestScore,setBestScore] = useState(0)
     return (
          <>
               <Nav 
               score={score}
               bestScore={bestScore}/>

                 <div className="container" style={{backgroundColor:'black'}}>
                <div className="row">
                  {cards.map(card =>(
                    <Card
                    key={card.id}
                    img={card.pic}
                    name={card.name} />
                  ))}
                </div>    
                </div>
          </>
     );
}

export default App;
