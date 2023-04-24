import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import {  useEffect  } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { exportDataWithBatch } from './service/dataBase';
import { CartProvider } from './storage/cartContex';


function App() {
  

  useEffect(() => {
    exportDataWithBatch();
  }, []);


  return (
    <CartProvider>
      <BrowserRouter>
          <NavBar />
        
          <Routes>
            <Route path='/Content' element={<ItemListContainer title= "Bienvenido"/> }/>
            <Route path='/Category/:categoryId' element={<ItemListContainer title= "Bienvenido"/> }/>
            <Route path='/Detail/:id' element={<ItemDetailContainer title="DETALLE PRODUCTO"/>} />
            {/* <div className="App">
              <ItemListContainer title= "Bienvenido "/>
            </div> */}
            <Route path='*' element={"Error 404: Page Not Found"} />
          </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
