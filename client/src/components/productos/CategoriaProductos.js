import React, {Component} from 'react';
import axios from 'axios';

import Navegacion from '../navegation/Navegacion';
import Footer from '../footer/Footer';

import CategoriaProductoListar from './CategoriaProductoListar';

class CategoriaProductos extends Component {

state = {
    Cate_Productos: {}
}

componentDidMount() {
        this.obtenerCategoriaProducto();
   }


obtenerCategoriaProducto = () => {

    const urlId = this.props.idCategoria;
    console.log(urlId);
    
    axios.get(`/api/${urlId}`)
             .then(res => {
                 this.setState({
                    Cate_Productos: res.data.productos
                 })
                  console.log(res.data.productos);
             })
   }


render(){
    return( 
        <React.Fragment>
            <Navegacion />
            <div className="container">
                <div className="row">
                    <CategoriaProductoListar
                        productos_categoria = {this.state.Cate_Productos}
                    />
                </div>
            </div>
            <Footer />
        </React.Fragment>        

    );
  }
}
export default CategoriaProductos;
