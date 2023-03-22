import React, { useEffect, useState} from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";
import "./App.css"

function App() {

  const [score, setScore] = useState({current: 0, best: 0});
  const [cards, setCards] = useState([0,1,2,3,4,5,6,7,8,9,10,11])
  const [clickedCards, setClickedCards] = useState([]);

  // Generate a new set of cards
  const generateNewCards = () => {
    const newArr = [...cards];
    for (let i = newArr.length-1; i>0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    setCards(newArr);
  }

  // Show score
  useEffect(() => {
    setScore(prevState => ({
      current: clickedCards.length,
      best: prevState.best
    }))}, [cards])

  // Perform checks when card is clicked
  const handleCardClick = (number) => {
    if (!clickedCards.includes(number)) {
      setClickedCards(prevState => [...prevState, number]);
      generateNewCards();
    } else {
      setScore(prevState => ({
        current: 0,
        best: prevState.current > prevState.best ? prevState.current : prevState.best
      }))
      generateNewCards();
      setClickedCards([]);
    }
  }

  return (
    <div className="app">
      <Header />
      <Scoreboard score={score}/>
      <div className="main">
        {cards.map(card => <Card number={card} handleCardClick={handleCardClick} key={card} />)}
      </div>
    </div>
  );
}

export default App;
