import logo from './logo.svg';
import './App.css';
import Texto from './Texto.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Curso Danki Code</h1>
        <Texto></Texto>
      </header>
    </div>
  );
}

export default App;
