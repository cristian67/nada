import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';


import Home from './home/Home';
import Error from './Error';
import Productos from './productos/Productos';
import SingleProducto from './productos/SingleProducto';


class Router extends Component {
     

     constructor(){
          super();
          this.state = {
               categorias: {},
               productos:{},
               productos_Categoria: {}
           }
    
          this.obtenerCategoriaProducto = this.obtenerCategoriaProducto.bind(this);

    }

      componentDidMount() {
           this.obtenerCategoria();
           this.obtenerProducto();
      }

      //============================
     //  Obtener todos los productos
     //============================
     obtenerProducto = () => {
          axios.get(`/api/producto`)
               .then(res => {                    
                    this.setState({
                         productos: res.data.productos
                    })
               })
     }
     

     //================================
     //  Obtener todas las categoria
     //================================
     obtenerCategoria = () => {
          axios.get(`/api/categoria`)
               .then(res => {
                    this.setState({
                         categorias: res.data.categoria
                    })
               })
     }

      //================================================
     //  Obtener todas los productos por categoria
     //=================================================
     obtenerCategoriaProducto = (idCategoria) => {

          console.log(idCategoria);
          
          /*
          axios.get(`/api/${idCategoria}/productos`)
               .then(res => {
                    this.setState({
                         productos_Categoria: res.data.categoria
                    })
               })
          */
     }


     render() {
          return (
               <BrowserRouter>

                              <Switch>


                                       {/* HOME - Categorias */}
                                      <Route exact path="/" render={ () => {
                                            return(
                                                  <React.Fragment>
                                                            <Home />
                                                            <Productos
                                                                      categorias = {this.state.categorias}
                                                                 />
                                                  </React.Fragment>     
                                            );
                                       }} />
                                   


                                        {/* Por PRODUCTO ID */}
                                      <Route exact  path="/producto/:idProducto" render={ (props) => {
                                           let idProducto = props.location.pathname.replace('/producto/','');                                           
                                           return(
                                                <SingleProducto 
                                                       producto = {this.state.productos[idProducto]}
                                                />
                                           )
                                       }} />

                                       <Route component={Error} />

                              </Switch>

               </BrowserRouter>
           );
     }
}

export default Router;
