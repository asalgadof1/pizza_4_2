// CardPizza.jsx

const CardPizza = ({ pizza }) => {
    return (
        <div className="card">
            <img src={pizza.img} className="card-img-top" alt={pizza.name} />
            <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">{pizza.desc}</p>
                <ul>
                    {pizza.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <p className="card-text"><strong>Precio: </strong>${pizza.price}</p>
            </div>
        </div>
    )
  }
  
  export default CardPizza
  