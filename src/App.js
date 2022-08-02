import './App.css';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Home></Home>
    </div>
  );
}

export default App;
