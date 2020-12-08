import logo from './logo.svg';
import './App.css';


function App() {
  return (
     
    <div className="App">
      <header className="App-header">
      <dialog open>
      <h1>Hello World!</h1>
          
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </p>
        </dialog>
      </header>
    </div>  
    
  );
}

export default App;
