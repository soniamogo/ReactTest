import logo from './logo.svg';
import './App.css';
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoList name="Sonia"/>
        
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sonia
        </a> */}
      </header>
    </div>
  );
}

export default App;
