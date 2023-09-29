import React, {useContext, useState} from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import "./ItemDetail.css"
import{Button, Container, Row, Col} from 'react-bootstrap'

export const ItemDetail = ({id, name, price, img, description, category, stock}) => {
    
    const {goBack, push} = useHistory ()

    const {addToCart, isInCart} = useContext (CartContext)

    const [quantity, setQuantity] = useState(0)

    const handleAgregar = () => {
        const newItem ={
            id,
            name,
            price,
            category,
            quantity,
    }

    if (quantity >0) {    
        addToCart(newItem)
    }
    }

    return (
        <div className= "container detail">
<Container>
    <Row>
        <Col> <br/>
    <img src= {img} height= "600px" alt={name}/>
        </Col>
        <Col className= "col2"> <br/><br/>  
    <h2>{name}</h2> <br/>
    <h3>{description}</h3>
    <br/><h4>Precio: ${price}</h4>
    <br/><br/>  
            
            {isInCart(id)
            ? <Link to = "/cart" className="btn btn-secondary my-2 "> Finalizar Compra </Link>
            :
             <>
            <ItemCount quantity = {quantity} modifyQuantity ={setQuantity} max={stock}/>
            <br/>
            <button disabled =  {quantity === 0 } className="btn btn-dark " onClick= {handleAgregar}>
            Agregar a Carrito
            </button>
             </>
            }
            <br/>
        </Col>
    </Row>
</Container>  

            <hr/>       
            <button className= "btn btn-secondary"
                onClick={() => goBack ()}>
            Volver
            </button>
            <br/>
            <br/>
            <Button variant="outline-dark" onClick = {() => push("/")}>
            Volver a Home
            </Button>
        </div>
    )
}
