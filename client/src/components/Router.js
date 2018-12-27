import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

/*Shared*/
import Error from './Error';
import '../css/cargando.css';

/*Componentes*/

import Productos from './productos/Productos';
import Categorias from './productos/Categorias';
import CategoriaProductos from './productos/CategoriaProductos';
import Home from './home/Home';

import Contacto from './contacto/contacto';
 

class Router extends Component {
     

     constructor(){
          super();
          this.state = {
               categorias: {},
               productos:{},
               cargando: false
           }
    

     }

      componentDidMount() {
           this.obtenerCategoria();
           this.obtenerProducto();
      }

      //============================
     //  Obtener todos los productos
     //============================
     obtenerProducto = async () => {
          await axios.get(`/api/producto`)
               .then(res => {                    
                    this.setState({
                         productos: res.data.productos,
                         cargando: true
                    })

                    setTimeout(() => {
                         this.setState({
                         cargando: false
                         });
                    }, 3000); 
               });
               
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

                    setTimeout(() => {
                         this.setState({
                         cargando: false
                         });
                    }, 2000); 
               })
     }



     render() {
          /*cargando pagina animacion*/
          const cargando = this.state.cargando;
          let resultado;
          let resultado_categoria;
          let resultado_producto;
          if(cargando){
               resultado_categoria = <div className="sk-circle animated fadeIn delay-0.5s">
                                        <div className="sk-circle1 sk-child"></div>
                                        <div className="sk-circle2 sk-child"></div>
                                        <div className="sk-circle3 sk-child"></div>
                                        <div className="sk-circle4 sk-child"></div>
                                        <div className="sk-circle5 sk-child"></div>
                                        <div className="sk-circle6 sk-child"></div>
                                        <div className="sk-circle7 sk-child"></div>
                                        <div className="sk-circle8 sk-child"></div>
                                        <div className="sk-circle9 sk-child"></div>
                                        <div className="sk-circle10 sk-child"></div>
                                        <div className="sk-circle11 sk-child"></div>
                                        <div className="sk-circle12 sk-child"></div>
                                      </div>
               resultado_producto =  <div className="sk-circle animated fadeIn delay-0.5s">
                                        <div className="sk-circle1 sk-child"></div>
                                        <div className="sk-circle2 sk-child"></div>
                                        <div className="sk-circle3 sk-child"></div>
                                        <div className="sk-circle4 sk-child"></div>
                                        <div className="sk-circle5 sk-child"></div>
                                        <div className="sk-circle6 sk-child"></div>
                                        <div className="sk-circle7 sk-child"></div>
                                        <div className="sk-circle8 sk-child"></div>
                                        <div className="sk-circle9 sk-child"></div>
                                        <div className="sk-circle10 sk-child"></div>
                                        <div className="sk-circle11 sk-child"></div>
                                        <div className="sk-circle12 sk-child"></div>
                                     </div> 
               resultado =         <div className="sk-circle animated fadeIn delay-0.5s">
                                      <div className="sk-circle1 sk-child"></div>
                                      <div className="sk-circle2 sk-child"></div>
                                      <div className="sk-circle3 sk-child"></div>
                                      <div className="sk-circle4 sk-child"></div>
                                      <div className="sk-circle5 sk-child"></div>
                                      <div className="sk-circle6 sk-child"></div>
                                      <div className="sk-circle7 sk-child"></div>
                                      <div className="sk-circle8 sk-child"></div>
                                      <div className="sk-circle9 sk-child"></div>
                                      <div className="sk-circle10 sk-child"></div>
                                      <div className="sk-circle11 sk-child"></div>
                                      <div className="sk-circle12 sk-child"></div>
                                   </div>                      
          } else{

               resultado =  <div className="animated fadeIn delay-0.5s"><Home /> </div>
               resultado_categoria =  <Categorias categorias = {this.state.categorias} />   
               resultado_producto =  <Productos productos = {this.state.productos} />
          } 

          return (
               <BrowserRouter>

                              <Switch>

                                       {/* HOME - Categorias */}
                                      <Route exact path="/" render={ () => {
                                            return(
                                                  <React.Fragment>
                                                       {resultado}
                                                  </React.Fragment>     
                                            );
                                       }} />
                                   
                                   <div className="animated fadeIn delay-0.8s">
 
                                        {/* Por Categoria */}
                                      <Route exact  path="/categoria" render={ (props) => {
                                           return(
                                             <React.Fragment>
                                                  <div className="animated fadeIn delay-0.3s">
                                                       {resultado_categoria} 
                                                  </div>
                                              </React.Fragment>
                                          
                                           )
                                       }} />


                                        {/* Por Categoria ID Producto */}
                                      <Route exact  path="/categoria/:idCategoria/productos" render={ (props) => {
                                           let idCategoria = props.location.pathname.replace('/categoria/','');  
                                           return(
                                              <React.Fragment>
                                                  <div className="animated fadeIn delay-0.3s">
                                                   <CategoriaProductos 
                                                       idCategoria = {idCategoria}
                                                   />
                                                   </div>
                                              </React.Fragment>
                                           )
                                       }} />
                                        
                                       {/*Todos los productos */}
                                        <Route exact  path="/producto" render={ (props) => {
                                           return(
                                             <React.Fragment>
                                                  <div className="animated fadeIn delay-0.3s">
                                                       {resultado_producto}
                                                  </div>
                                             </React.Fragment>
                                           )
                                       }} />

                                        {/*Todos los productos */}
                                        <Route exact  path="/contacto" render={()=>{
                                             return(
                                                  <React.Fragment>
                                                       <div className="animated fadeIn delay-0.4s">
                                                            <Contacto />
                                                       </div>
                                                  </React.Fragment>
                                             );
                                        }} />

                                        {/* Por Producto ID (En algun futuro)
                                      <Route exact  path="/producto/:idProducto" render={ (props) => {
                                           let idProducto = props.location.pathname.replace('/producto/','');                                           
                                           return(
                                                <SingleProducto 
                                                       producto = {this.state.productos[idProducto]}
                                                />
                                           )
                                       }} /> */}

                                        </div>


                                       <Route component={Error} />

    
                                   
                              </Switch>

               </BrowserRouter>
           );
     }
}

export default Router;
