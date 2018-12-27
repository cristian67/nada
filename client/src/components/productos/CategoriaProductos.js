import React, {Component} from 'react';
import axios from 'axios';

import Navegacion from '../navegation/Navegacion';
import Footer from '../footer/Footer';
import '../../css/cargando.css';

import CategoriaProductoListar from './CategoriaProductoListar';

class CategoriaProductos extends Component {

state = {
    Cate_Productos: {},
    cargando: false
}

componentDidMount() {
        this.obtenerCategoriaProducto();
   }


obtenerCategoriaProducto = async() => {

    const urlId = this.props.idCategoria;
    console.log(urlId);
    
    await axios.get(`/api/${urlId}`)
             .then(res => {
                 this.setState({
                    Cate_Productos: res.data.productos,
                    cargando:true
                 })

                 setTimeout(() => {
                    this.setState({
                    cargando: false
                    });
               }, 3000); 
             })
   }


render(){

 /*cargando pagina animacion*/
 const cargando = this.state.cargando;
 let resultado;
 if(cargando){
      resultado = <div className="sk-circle animated fadeIn delay-0.5s">
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
 }  else {

      resultado =  <CategoriaProductoListar productos_categoria = {this.state.Cate_Productos} /> 

 }
    return( 
        <React.Fragment>
            <Navegacion />
            <div className="container">
                <div className="row">
                    {resultado}
                </div>
            </div>
            <Footer />
        </React.Fragment>        

    );
  }
}
export default CategoriaProductos;
