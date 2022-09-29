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
     const [cards, setCard] = useState([
          { id: 0, name: "Yoda", pic: yoda, wasClicked: false },
          { id: 1, name: "Vader", pic: vader, wasClicked: false },
          { id: 2, name: "Trooper", pic: trooper, wasClicked: false },
          { id: 3, name: "Solo", pic: solo, wasClicked: false },
          { id: 4, name: "R2", pic: R2, wasClicked: false },
          { id: 5, name: "ObiWan", pic: obiWan, wasClicked: false },
          { id: 6, name: "Luke", pic: luke, wasClicked: false },
          { id: 7, name: "Leia", pic: leia, wasClicked: false },
          { id: 8, name: "Kylo", pic: kylo, wasClicked: false },
          { id: 9, name: "Chube", pic: chube, wasClicked: false },
          { id: 10, name: "C3-PO", pic: C3PO, wasClicked: false },
          { id: 11, name: "BobaFet", pic: BobaFet, wasClicked: false },
          { id: 12, name: "Poe", pic: Poe, wasClicked: false },
          { id: 13, name: "Palpatine", pic: Palpatine, wasClicked: false },
          { id: 14, name: "Finn", pic: Finn, wasClicked: false },
          { id: 15, name: "BBO", pic: BBO, wasClicked: false },
     ]);
     const [score, setScore] = useState(0);
     const [bestScore, setBestScore] = useState(0);
     const [newCards, setnewCards] = useState([...cards]);

     const handleClick = (e) => {
          let i = e.target.id;
          if (newCards[i].wasClicked === false) {
               newCards[i].wasClicked = true;
               setScore(score + 10);
          } else {
               setScore(0);
               newCards.map((item) => (item.wasClicked = false));
               console.log(newCards);
          }
     };

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

     useEffect(() => {
          setCard(shuffle(cards));
          setBestScore(score);
     }, [score]);

     // const isMatch = (e)=>{

     // }
     return (
          <>
               <Nav score={score} bestScore={bestScore} />

               <div className="container" style={{ backgroundColor: "black" }}>
                    <div className="row">
                         {cards.map((card) => (
                              <Card
                                   wasclicked={card.wasClicked}
                                   id={card.id}
                                   key={card.id}
                                   img={card.pic}
                                   name={card.name}
                                   click={handleClick}
                              />
                         ))}
                    </div>
               </div>
          </>
     );
}

export default App;
