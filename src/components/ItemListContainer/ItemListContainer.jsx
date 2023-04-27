import './ItemListContainer.css';
import Item from '../Item/Item';
import { useEffect, useState, useRef } from 'react';
import { getProducts_, getProducts_Category } from '../../service/dataBase';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import FilterByPrice from '../FilterByPrice/FilterByPrice';

function ItemListContainer(props) {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  const [categoria, setCategoria] = useState('');
  const observer = useRef()
  const [filter, setFilter] = useState({ order: '', minPrice: '', maxPrice: '' }); // Estado para almacenar los valores seleccionados en FilterByPrice

  useEffect(() => {
    if (!categoryId) {
      getProducts_().then((respuesta) => {
        setProductos(respuesta);
        setCategoria(props.title);
      });
    } else {
      getProducts_Category(categoryId).then((respuesta) => setProductos(respuesta));
      setCategoria(categoryId);
    }
  }, [categoryId]);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll('.card-container > div');

    elements.forEach((el) => {
      observer.current.observe(el);
    });

    return () => {
      observer.current.disconnect();
    };
  }, [productos]);


  const handleFilterChange = (data) => {
    setFilter({ ...filter, ...data }); // Actualiza el estado filter con los datos seleccionados
  };


 

  if (productos.length === 0) {
    return <Loader />;
    
  }

  return (
    <div className="item-list-container">
      {/* <div className='list-z'>
      <FilterByPrice productos={productos} onFilterChange={handleFilterChange} />
      </div> */}
      <div className='list-products'>
      <h1>{categoria}</h1>
     
      <div className="card-container">
        {productos.map((product) => (
          <div key={product.id}>
            <Item
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              stock={product.stock}
            />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
