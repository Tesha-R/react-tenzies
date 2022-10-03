import { useState } from 'react';
import { nanoid } from 'nanoid';
import Die from './Die';
import Header from './Header';

function App() {
  const [diceArray, setDiceArray] = useState(allNewDice);

  function handleRollDice() {
    setDiceArray(allNewDice);
  }

  //  array of 10 random numbers between 1-6
  function allNewDice() {
    const array = [];
    for (let i = 0; i < 10; i++) {
      let randomNum = Math.floor(Math.random() * 6 + 1);
      array.push({
        value: randomNum,
        isHeld: false,
        id: nanoid(),
      });
    }
    return array;
  }

  const singleDie = diceArray.map((dice) => {
    return <Die key={Die.id} value={dice.value} />;
  });

  return (
    <div className="main-el">
      <Header />
      <div className="die-el">{singleDie}</div>
      <button className="die-btn" onClick={handleRollDice}>
        Roll
      </button>
    </div>
  );
}

export default App;
