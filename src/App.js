import './App.css';
import NameLogin from './Components/NameLogin';

function App() {
  return (
    <div className="App">
      <header className="App-header container d-flex flex-column align-items-center justify-content-center" style={{ maxWidth: "600px" }}>
        <NameLogin />
      </header>
    </div>
  );
}

export default App;
