import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import HelloC from './components/HelloC'

function App() {
  return (
    <div className="App">
      <Greet name="Anoop"><button>Action</button></Greet>
      <Greet name="Chinnu"/>
      <Welcome name="Shiny"/>
      <Welcome name="Ayyappan" job="amul"/>
      <Hello/>
      <HelloC/>
    </div>
  );
}

export default App;
