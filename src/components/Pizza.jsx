//pizza.jsx
import React, { useEffect, useState } from 'react';
import CardPizza from "./CardPizza"; 

const Pizza = () => {
const [pizza, setPizza] = useState(null);

useEffect(() => {
    fetch('http://localhost:5000/api/pizzas/p003')
      .then(response => response.json())
      .then(data => setPizza(data))
      .catch(error => console.error('Error fetching pizza:', error));
  }, []);

  return (
    <div className="pizza-details">
      {pizza ? (
        <>
          <img src={pizza.img} className="card-img-top" alt={pizza.name} />
          <div className="card-body">
          <h2 className="card-title">{pizza.name}</h2>
          <p className="card-text">{pizza.description}</p>
          <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
          <p className="card-text">Precio: ${pizza.price}</p>
          <div class="d-grid col-4 mx-auto">
          <button type="button" class="btn btn-success w-100">Añadir al Carrito</button>
          </div>
          </div>
        </>
      ) : (
        <p>Cargando pizza...</p>
      )}
    </div>
  );
};
  export default Pizza
