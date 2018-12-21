import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from '../history';

//Componentes propios (Publico)
import Footer from './public/Footer/Footer';
import Home from './Home/Home';
import Products from './public/products/Products';


export const makeMainRoutes = () => {
    return ( <Router history = { history } >

        <React.Fragment>

          { /* Rutas Publica */ }
          <Route exact path = "/" component = { Home }/>


          <Route exact path = "/productos" component = { Products } />

          { /*Footer*/ }
          <Footer />

        </React.Fragment>

        </Router>
    );
}
