import './App.css';
import Products from './components/Products';
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {

  
const [products, setProducts] = useState([]);
useEffect(() => {
  const getData = async () => {
    const results = await axios.get('https://dummyjson.com/products')

    setProducts(results.data.products);
  }

  getData();
});


  return (
    <div className="productContainer">

            { products.map(p => <Products image={p.thumbnail} name={p.title} category={p.brand} pricelevel={p.price} />)}  

    </div>   
  );
  

/*

  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const results = await axios.get('http://localhost:8080/restaurant') // http://localhost:8080/restaurant

    setRestaurants(results.data.restaurants);
  }

  getData();
});
*/



}

export default App;


