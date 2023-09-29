//import logo from './logo.svg';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
 } from 'react-router-dom'       
import { CartProvider } from './context/CartContext';               
import { CartScreen } from './components/CartScreen/CartScreen';
import { UIProvider } from './context/UIContext';
import { Checkout } from './components/Checkout/Checkout';


function App() {
 
  return (
      <>

<UIProvider>

<CartProvider>

      <BrowserRouter>

      <NavBar logo=""/>

      <Switch>
        <Route exact path="/">
          <div className="fotos"></div>
        </Route>

        <Route exact path="/nosotros"> 
          <h1>Nosotros</h1>
        </Route>        
        
        <Route exact path="/nuestro café">      
          <h1>Nuestro Café</h1>
        </Route>

        <Route exact path="/patisserie">
          <h1>Patisserie</h1>
        </Route>
        
        <Route exact path="/e-Shop">
        <ItemListContainer/>       
        </Route>

        <Route exact path="/e-Shop/:categoryId">
        <ItemListContainer/>       
        </Route>

        <Route exact path="/detail/:itemId">
        <ItemDetailContainer/>       
        </Route>

        <Route exact path="/contacto"> 
          <h1>Contacto</h1>
        </Route>
        
        <Route exact path="/cart">
        <CartScreen/>
        </Route>

        <Route exact path="/checkout">
        <Checkout/>
        </Route>

        <Route path="*">
        <Redirect to= "/"></Redirect>
        </Route>
      </Switch>

      <Footer/> 

      </BrowserRouter>
      
      </CartProvider>

      </UIProvider>

      </>
  );
}

export default App;

