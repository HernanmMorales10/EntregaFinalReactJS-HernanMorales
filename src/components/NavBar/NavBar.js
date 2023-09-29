import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartWidget } from './CartWidget'
import "./NavBar.css"
import{Navbar, Container,NavDropdown} from 'react-bootstrap'

export const NavBar = ({logo}) =>{
return (
<header>

<h1 className= "logo"><img src= "../../Logo.png" alt="logo" width="150px" height="130px"/>RAMBLA</h1>

<Navbar className="Nav">
<Container>
<NavLink exact to= "/">Home</NavLink>
<NavLink exact to= "/nosotros">Nosotros</NavLink>
<NavLink exact to= "/nuestro Café">Nuestro Café</NavLink>
<NavLink exact to= "/patisserie">Patisserie</NavLink>
<NavDropdown title="E-Shop" id="basic-nav-dropdown">
<NavLink exact to= "/e-Shop">Todas las categorías</NavLink > <br/>
<NavLink exact to= "/e-Shop/Rambla">Rambla</NavLink > <br/>
<NavLink  exact to= "/e-Shop/Puerto Blest">Puerto Blest</NavLink >
</NavDropdown>
<NavLink exact to= "/contacto">Contacto</NavLink>

<Link to= "/Cart"><CartWidget/></Link>

</Container>
</Navbar>

</header>
)
}
