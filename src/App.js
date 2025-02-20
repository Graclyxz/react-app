import logo from './logo.svg';
import './App.css';
import Component from './components/Component';
import View from './views/View';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Hola React, soy un nuevo texto.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <Component />
        <View />
      </div>
    </div>
  );
}

export default App;
