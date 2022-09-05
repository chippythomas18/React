import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import News from './components/News'
function App() {
  return (
    <div className="App">
      
      <Welcome/>
     <Greet/>
     <News/>
    </div>
  );
}

export default App;
