import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import HelloC from './components/HelloC'

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
      <Hello/>
      <HelloC/>
    </div>
  );
}

export default App;
