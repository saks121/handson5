import './App.css';
import HOC from './HOC';
import Comp1 from './Comp1';

function App() {
  return (
    <div className="App">
      <h1>High Order Components and Pure Components</h1>
      <HOC propdata={Comp1} />
    
    </div>
  );
}

export default App;
