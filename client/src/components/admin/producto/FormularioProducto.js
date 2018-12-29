import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {postCrearProducto} from '../services/postData';
import NavegationAdmin from '../navegation/NavegationAdmin';
import OptionSelect from '../producto/OptionSelect';

import axios from 'axios';


class FormularioProducto extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedFile: null,
            producto:''
        };

        // crear los refs
        this.nombreRef    = React.createRef();
        this.precioRef    = React.createRef();
        this.categoriaRef = React.createRef();

    }

    
    //===============================
    //  Crear Producto
    //===============================
     crearProducto = (e) => {
        e.preventDefault();
        //Token headers
        const config = {headers: { 
                        'Content-Type': 'application/json',
                        'token': localStorage.token 
                    }}
        
        //Construir FormData
        const fd = new FormData();
        fd.append('nombre', this.nombreRef.current.value);
        fd.append('precioUni', this.precioRef.current.value);
        fd.append('categoria', this.categoriaRef.current.value);
        fd.append('image', this.state.selectedFile);

        
        
        /*
        //crear objecto
        const producto = {
               nombre : this.nombreRef.current.value,
               precioUni: this.precioRef.current.value,
               categoria: this.categoriaRef.current.value,
               
        }*/

          
        if(this.state.selectedFile && this.state.selectedFile.name)    
          {  
            const url = '/api/producto';

            axios.post(url, fd, config)
                    .then(  res => {
                        console.log(res);
                        this.setState({
                            producto: res.data.producto
                        });
                    })
                    .catch( err => {console.log('No tienes permisos');
                    })   
        
            } else {
                console.log("No hay imagen cargada");
          }
          
     }

     //===============================
     //  Subir archivo de imagen
     //===============================
     fileSelectedHandler = event => {
         this.setState({
            selectedFile: event.target.files[0]
         });
         
     }

     fileUploaderHandler = () => {

        const fd = new FormData();
        fd.append('image', this.state.selectedFile);

        /*
        const url =`/api/upload/producto/${this.state.producto._id}`;
        
        axios.put(url,fd)
              .then(  res => { console.log(res) })
              .catch( err => { console.log("Extension no permitida") })*/
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
                            <span htmlFor="precio">Seleccionar una categoria</span>
                                    <select ref={this.categoriaRef} className="browser-default">
                                        <option value="" disabled>Choose your option</option>
                                                {Object.keys(this.props.categorias).map(key => (
                                                    <OptionSelect       
                                                        key = {key}  
                                                        categorias = {this.props.categorias[key]}
                                                    />
                                                ))}
                                    </select>
                            </div>
                            

                            <div className="col s12">
                                <input onChange = {this.fileSelectedHandler} required="" aria-required="true" type="file" id="avatar" name="avatar"/>
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