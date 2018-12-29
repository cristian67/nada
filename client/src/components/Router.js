import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

/*Shared*/
import '../css/cargando.css';


/*Componentes publicos*/
import Productos from './productos/Productos';
import Categorias from './productos/Categorias';
import CategoriaProductos from './productos/CategoriaProductos';
import Home from './Home';
import Contacto from './contacto/contacto';


/*Componentes privados*/
import TestLogin from './admin/login/TestLogin'; 
import AdminCategoria from './admin/categoria/AdminCategoria';
import AdminProducto from  './admin/producto/AdminProducto';
import FormularioProducto from './admin/producto/FormularioProducto';





class Router extends Component {
     
     constructor(){
          super();
          this.state = {
               authenticated: false,
               categorias: {},
               productos:{},
               cargando: false,
               currentUser: '',
               estadoUser: false,
               usuario: '',
               token: '', 
               error:''
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
          const token    = this.state.token;
          const err      = this.state.error;
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
          } else {

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


                                        
                                         {/* Login */}
                                         <Route exact  path="/login" render={()=>{
                                             return(
                                                  <React.Fragment>
                                                       <div className="animated fadeIn delay-0.4s">
                                                            <TestLogin />
                                                       </div>
                                                  </React.Fragment>
                                             );
                                        }} />
               
                                           
                                         {/* Producto ADMIN acceso al home de productos */}
                                         <Route exact  path="/admin/producto" render={()=>{
                                             return(
                                                  <React.Fragment>
                                                       <div className="animated fadeIn delay-0.4s">
                                                            <AdminProducto 
                                                                 productos = {this.state.productos}
                                                            />
                                                       </div>
                                                  </React.Fragment>
                                             );
                                        }} />

                                         {/* Producto ADMIN Crear */}
                                        <Route exact path="/admin/producto/crear" render={ () => {
                                            return(
                                                <FormularioProducto 
                                                    categorias = {this.state.categorias}
                                                />
                                            )
                                        }} />

                                        <Route exact  path="/admin/categoria" render={()=>{
                                             return(
                                                  <React.Fragment>
                                                       <div className="animated fadeIn delay-0.4s">
                                                            <AdminCategoria  
                                                                 productos = {this.state.productos}
                                                            />
                                                       </div>
                                                  </React.Fragment>
                                             );
                                        }} />




                              </Switch>

               </BrowserRouter>
           );
     }
}

export default Router;
