
import './App.css';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton'
import TextRepeaterButton from './components/TextRepeaterButton'

function App() {
  return (
    <div className="App">
      <h1>Fany Buttons!</h1>
      <section>
      <AngryButton />
      <CounterButton />
      <LightSwitchButton />
      <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
