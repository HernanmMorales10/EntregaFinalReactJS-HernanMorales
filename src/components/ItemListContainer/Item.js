import React from 'react'
import{Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Item = ({id, name, price, img, description, category}) => {

    return (

<Card style={{ width: '20rem' }} className="m-5">
  <Card.Img variant="top" src={img} height= "380"/>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>{description}</Card.Text>
    <Card.Text>Precio: ${price}</Card.Text>
    <Card.Text>Marca: {category}</Card.Text>

     <Link to={`/detail/${id}`}> 
    <Button variant="outline-secondary">+ info</Button>
    </Link>
  </Card.Body>
</Card>
    )
}
