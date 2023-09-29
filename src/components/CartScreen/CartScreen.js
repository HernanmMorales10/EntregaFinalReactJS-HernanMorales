import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import {FaTrashAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const CartScreen = () => {

    const {carrito, emptyCart, removeItem, calculateTotal} = useContext (CartContext)

    return (
        <div className= "container my-3">

            {carrito.length ===0
            ?<>
            <h2>Tu carrito de compras se encuentra vacío</h2>
            <Link to ="/" className="btn btn-secondary">Ir a comprar</Link>
            </>
            :

            <>
            <h2>Detalle de tu compra</h2>
            <hr/> 

            {
            carrito.map ((prod) => (
                <div>
                <h4>{prod.name}</h4>
                <p>Cantidad: {prod.quantity}</p>
                <p>Subtotal: ${prod.price * prod.quantity}</p>
                <button className="btn btn-danger" onClick={() => removeItem (prod.id)}>
                <FaTrashAlt/>
                </button>
                </div>
            ))
            } 

        <hr/> 
        <h3> Total: ${calculateTotal()}</h3>
        <button className= "btn btn-danger" onClick ={emptyCart}>Vaciar Carrito</button>
        <br/>  <br/>   
        <Link to="/checkout" className="btn btn-secondary"> Finalizar compra</Link> 
        </>
            }
        </div>
    )
}
