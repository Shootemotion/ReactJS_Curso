import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar />
      <ItemListContainer texto="BIENVENIDO!" />
      </div>
    </BrowserRouter>
  );
}

export default App;
