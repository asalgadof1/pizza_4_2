// Cart.jsx

import { useState } from 'react'
/*import { pizzaCart } from '../assets/Data/pizzas'*/

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart)

    const increaseQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, count: item.count + 1 } : item
        )
        setCart(updatedCart)
    }

    const decreaseQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, count: item.count > 0 ? item.count - 1 : 0 } : item
        ).filter(item => item.count > 0)
        setCart(updatedCart)
    }

    const total = cart.reduce((acc, item) => acc + item.price * item.count, 0)

    return (
        <div className="container">
            <h2>Carrito de Compras</h2>
            <ul className="list-group">
                {cart.map((pizza) => (
                    <li key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <img src={pizza.img} alt={pizza.name} width="50" />
                        <span>{pizza.name}</span>
                        <span>${pizza.price}</span>
                        <div>
                            <button onClick={() => decreaseQuantity(pizza.id)} className="btn btn-danger">-</button>
                            <span className="mx-2">{pizza.count}</span>
                            <button onClick={() => increaseQuantity(pizza.id)} className="btn btn-success">+</button>
                        </div>
                    </li>
                ))}
            </ul>
            <h3>Total: ${total}</h3>
            <button className="btn btn-primary">Pagar</button>
        </div>
    )
}

export default Cart
