import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import Die from './Die';
import Header from './Header';

function App() {
  const [diceArray, setDiceArray] = useState(allNewDice);
  const [tenzies, setTenzies] = useState(false);

  /**
   * Challenge: Tie off loose ends!
   * 1. If tenzies is true, Change the button text to "New Game"
   * 2. If tenzies is true, use the "react-confetti" package to
   *    render the <Confetti /> component 🎉
   *
   *    Hint: don't worry about the `height` and `width` props
   *    it mentions in the documentation.
   */

  useEffect(() => {
    const allHeld = (die) => die.isHeld === true;
    const allNums = (die) => die.value === die.value;

    if (diceArray.every(allHeld) && diceArray.every(allNums)) {
      console.log('you won');
      setTenzies(true);
    }
  }, [diceArray]);

  function handleRollDice() {
    setDiceArray((prevDiceArray) =>
      prevDiceArray.map((die) => {
        return die.isHeld === true
          ? die
          : {
              value: Math.floor(Math.random() * 6 + 1),
              isHeld: false,
              id: nanoid(),
            };
      })
    );
  }

  function holdDice(id) {
    setDiceArray((prevDiceArray) =>
      prevDiceArray.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
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
    return (
      <Die
        key={dice.id}
        value={dice.value}
        bg={dice.isHeld ? 'isHeld' : ''}
        holdDice={() => holdDice(dice.id)}
      />
    );
  });

  return (
    <div className="main-el">
      {tenzies && <Confetti />}
      <Header />
      <div className="die-el">{singleDie}</div>
      <button className="die-btn" onClick={handleRollDice}>
        {tenzies ? 'Reset Game' : 'Roll'}
      </button>
    </div>
  );
}

export default App;
