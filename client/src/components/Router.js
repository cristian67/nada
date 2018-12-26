import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

/*Shared*/
import Error from './Error';

/*Componentes*/
import Home from './home/Home';

import Productos from './productos/Productos';
import Categorias from './productos/Categorias';
import CategoriaProductos from './productos/CategoriaProductos';

import Footer from './footer/Footer';
import Contacto from './contacto/contacto';
 

class Router extends Component {
     

     constructor(){
          super();
          this.state = {
               categorias: {},
               productos:{},
               productos_Categoria: {}
           }
    

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



     render() {
          return (
               <BrowserRouter>

                              <Switch>

                                       {/* HOME - Categorias */}
                                      <Route exact path="/" render={ () => {
                                            return(
                                                  <React.Fragment>
                                                            <Home />
                                                  </React.Fragment>     
                                            );
                                       }} />
                                   
                                       
                                        {/* Por Categoria */}
                                      <Route exact  path="/categoria" render={ (props) => {
                                           return(
                                                <Categorias 
                                                  categorias = {this.state.categorias}
                                                />                                                 
                                           )
                                       }} />


                                        {/* Por Categoria ID Producto */}
                                      <Route exact  path="/categoria/:idCategoria/productos" render={ (props) => {
                                           let idCategoria = props.location.pathname.replace('/categoria/','');  
                                           return(
                                              <React.Fragment>
                                                   <CategoriaProductos 
                                                       idCategoria = {idCategoria}
                                                   />
                                              </React.Fragment>
                                           )
                                       }} />
                                        
                                       {/*Todos los productos */}
                                        <Route exact  path="/producto" render={ (props) => {
                                           return(
                                             <React.Fragment>
                                                  <Productos 
                                                        productos = {this.state.productos}
                                                  />
                                             </React.Fragment>
                                           )
                                       }} />

                                        {/*Todos los productos */}
                                        <Route exact  path="/contacto" component={Contacto} />

                                        {/* Por Producto ID (En algun futuro)
                                      <Route exact  path="/producto/:idProducto" render={ (props) => {
                                           let idProducto = props.location.pathname.replace('/producto/','');                                           
                                           return(
                                                <SingleProducto 
                                                       producto = {this.state.productos[idProducto]}
                                                />
                                           )
                                       }} /> */}



                                       <Route component={Error} />
                                       
                                   
                              </Switch>

               </BrowserRouter>
           );
     }
}

export default Router;
