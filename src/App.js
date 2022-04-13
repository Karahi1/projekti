import './App.css';
import Products from './components/Products';
import { useEffect, useState } from 'react';
import axios from 'axios';




function App() {

  
const [products, setProducts] = useState([]);

useEffect(() => {
  const getData = async () => {
    const results = await axios.get('http://localhost:8080/restaurant')

    setProducts(results.data);
  }

  getData();
});


  return (
    <div className="productContainer">

            { products.map(p => <Products key={p.idrestaurant} image={p.image} name={p.name} type={p.type} pricelevel={p.pricelevel} />)}  

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


