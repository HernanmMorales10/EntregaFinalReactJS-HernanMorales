import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "./NavBar.css"

export const CartWidget =  () => {
    
    const {calculateQuantity} = useContext(CartContext)
    
    return (
        <div style= {{visibility: calculateQuantity()=== 0 ? " hidden" :  "visible"}}>
            <img src= "../ShopIcon.png" alt="ShopIcon"/>
            <span> {calculateQuantity()}</span>
        </div>
    )
}