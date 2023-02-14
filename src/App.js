import './App.css';
import  Router  from './app/Router';

function App() {
  return (
    <div className="App">
        <Router basename={process.env.PUBLIC_URL}/>
    </div>
  );
}

export default App;
