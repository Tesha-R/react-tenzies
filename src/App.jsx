import Die from './Die';
import Header from './Header';

function App() {
  return (
    <div className="main-el">
      <Header />
      <div className="die-el">
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
        <Die value={5} />
        <Die value={6} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
      </div>
    </div>
  );
}

export default App;
