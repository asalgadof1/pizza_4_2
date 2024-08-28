// Home.jsx

import React, { useEffect, useState } from 'react';
import CardPizza from "./CardPizza";

const Home = () =>  {
const [pizzas, setPizzas] = useState([]);

useEffect(() => {
  fetch('http://localhost:5000/api/pizzas')
    .then(response => response.json())
    .then(data => setPizzas(data))
    .catch(error => console.error('Error fetching pizzas:', error));
}, []);

return (
  <div className="pizza-list">
    {pizzas.map(pizza => (
      <div className="pizza-card" key={pizza.id}>
        <img src={pizza.image} alt={pizza.name} />
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>Precio: ${pizza.price}</p>
        <button>Añadir al Carrito</button>
      </div>
    ))}
  </div>
);
};

export default Home;
