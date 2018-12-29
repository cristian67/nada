import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {postCrearProducto} from '../services/postData';
import NavegationAdmin from '../navegation/NavegationAdmin';


class FormularioProducto extends Component {

     // crear los refs
     nombreRef = React.createRef();
     precioRef = React.createRef();
     imgRef = React.createRef();
     categoriaRef = React.createRef();

     crearProducto = (e) => {
          e.preventDefault();

          // leer los refs
          const producto = {
               nombre : this.nombreRef.current.value,
               precioUni: this.precioRef.current.value,
               categoria: this.categoriaRef.current.value,
               img: this.imgRef.current.value
          }

          postCrearProducto(producto);
          // enviar por props o petición de axios
          //this.props.crearPost(post);
     }

     render() { 
          return ( 
           <React.Fragment>
            <NavegationAdmin />
               <p></p>
               <div className="container">
               <div className="row">
               <div className="card-panel">
                   <h4 className="center-align">Crear Productos</h4>
               </div>
                   <div className="card-panel">
                       <form onSubmit={this.crearProducto}>

                            <div className="input-field col s12">
                               <input ref={this.nombreRef} id="nombre" type="text" className="validate" />
                               <label htmlFor="nombre">Nombre del producto</label>
                            </div>  

                            <div className="input-field col s12">
                               <input ref={this.precioRef} id="precio" type="text" className="validate" />
                               <label htmlFor="precio">Precio del producto en $</label>
                            </div>  

                            <div className="input-field col s12">
                                  <select ref={this.categoriaRef}>
                                    <option defaultValue="" disabled selected>Choose your option</option>
                                  </select>
                            </div>

                            <div className="col s12">
                            <input ref={this.imgRef} type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
                               </div>

                           <div className="center-align">
                               <button type="submit" className="btn light-blue darken-5">Crear</button>
                           </div>

                       </form>
                   </div>
               </div>
           </div>
          </React.Fragment>
           );
     }
}
 
export default FormularioProducto;