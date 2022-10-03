import { useState } from 'react';
import Die from './Die';
import Header from './Header';

function App() {
  const [diceArray, setDiceArray] = useState(allNewDice);

  const singleDie = diceArray.map((dice) => {
    return <Die value={dice} />;
  });

  //  array of 10 random numbers between 1-6
  function allNewDice() {
    const array = [];
    for (let i = 0; i < 10; i++) {
      let randomNum = Math.floor(Math.random() * 6 + 1);
      array.push(randomNum);
    }
    return array;
  }

  return (
    <div className="main-el">
      <Header />
      <div className="die-el">{singleDie}</div>
    </div>
  );
}

export default App;
