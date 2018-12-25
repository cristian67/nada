import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';


import Home from './home/Home';


class Router extends Component {
     state = {
          categorias: {}
      }
      componentDidMount() {
           this.obtenerProducto();
           this.obtenerCategoria();
      }

     obtenerProducto = () => {
          axios.get(`/api/producto`)
               .then(res => {
                    
                    this.setState({
                         productos: res.data.productos
                    })
               })
     }

     obtenerCategoria = () => {
          axios.get(`/api/categoria`)
               .then(res => {
                    this.setState({
                         categorias: res.data.categoria
                    })
               })
     }

     render() {
          return (
               <BrowserRouter>

                              <Switch>
                                      <Route exact path="/" render={ () => {
                                            return(
                                                 <Home
                                                      categorias = {this.state.categorias}
                                                 />
                                            )
                                       }} />

                              </Switch>

               </BrowserRouter>
           );
     }
}

export default Router;
