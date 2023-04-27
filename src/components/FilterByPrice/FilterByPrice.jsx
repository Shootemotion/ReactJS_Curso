import { useState } from 'react';

function FilterByPrice({ productos, onFilterChange }) {
    const [order, setOrder] = useState('');
    const [minPrice, setMinPrice] = useState(Math.min(...productos.map((p) => p.price)));
    const [maxPrice, setMaxPrice] = useState(Math.max(...productos.map((p) => p.price)));
  
    const handleOrderChange = (e) => {
      setOrder(e.target.value);
      let sortedProductos = productos.slice(); // crea una copia de la lista de productos
      if (e.target.value === 'highest') {
        sortedProductos.sort((a, b) => b.price - a.price); // ordena de mayor a menor precio
      } else if (e.target.value === 'lowest') {
        sortedProductos.sort((a, b) => a.price - b.price); // ordena de menor a mayor precio
      }
      onFilterChange({ order: e.target.value, minPrice, maxPrice, productos: sortedProductos }); // actualiza la lista de productos ordenados
    };
  
    const handleMinPriceChange = (e) => {
      setMinPrice(e.target.valueAsNumber);
      onFilterChange({ order, minPrice: e.target.valueAsNumber, maxPrice, productos });
      console.log(maxPrice)
      console.log(minPrice)
    };
  
    const handleMaxPriceChange = (e) => {
      setMaxPrice(e.target.valueAsNumber);
      onFilterChange({ order, minPrice, maxPrice: e.target.valueAsNumber, productos });
    };
  
    return (
      <div>
        <div>
          <label htmlFor="minPrice">Precio mínimo:</label>
          <input type="range" id="minPrice" name="minPrice" min={Math.min(...productos.map((p) => p.price))} max={maxPrice} value={minPrice} onChange={handleMinPriceChange} />
        </div>
        <div>
          <label htmlFor="maxPrice">Precio máximo:</label>
          <input type="range" id="maxPrice" name="maxPrice" min={minPrice} max={Math.max(...productos.map((p) => p.price))} value={maxPrice} onChange={handleMaxPriceChange} />
        </div>
        <div>
          <select onChange={handleOrderChange}>
            <option value="">Ordenar por precio</option>
            <option value="highest">Mayor a menor</option>
            <option value="lowest">Menor a mayor</option>
          </select>
        </div>
      </div>
    );
  }
  
  export default FilterByPrice;
  