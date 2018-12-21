import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from '../history';

//Componentes propios (Publico)
import Footer from './public/Footer/Footer';
import Categories from './public/categories/Categories';
import Products from './public/products/Products';
import Home from './Home/Home';



//Componentes propios (Privados)
import Users from './admin/users/Users';
import CategoriesLogin from './admin/categories/Categories';
import ProductsLogin from './admin/products/Products';
import VerificaLogin from './admin/verificaLogin';


export const makeMainRoutes = () => {
    return (
      <Router history = { history } >

      <React.Fragment >

      { /* Rutas Publica */ }
      <Route exact path = "/" component = { Home }/>

      <Route exact path = "/categorias" component = { Categories }/>

      <Route exact path = "/productos" component = { Products }/>



      { /* Rutas Privadas (Login) */ }
      <Route exact path = "/login" component = { VerificaLogin }/>
      <Route exact path = "/login/usuarios" component = { Users }/>
      <Route exact path = "/login/categorias" component = { CategoriesLogin }/>
      <Route exact path = "/login/productos" component = { ProductsLogin } />



      { /*Footer*/ }
      <Footer / >
      </React.Fragment>

      </Router>
    );
}
