import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Discover(props){

    
const [restaurants, setRestaurants] = useState([]);

    useEffect(async() => {
       const results = await fetch('https://dummyjson.com/products').then((res)=>
       res.json()
       )

       console.log(results)
       setRestaurants(results.data.restaurants) //setRestaurants( results )
  },[]);


  return(

    <div className="productContainer">
        { props.restaurant.map(p => <Discover image={p.image} name={p.name} category={p.type} pricelevel={p.pricelevel} />)} 
    </div>);
  
}

