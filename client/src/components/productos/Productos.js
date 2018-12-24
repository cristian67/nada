import React, { Component } from 'react';
import MostrarProductos from './mostrarProductos';
import axios from 'axios';


class Productos extends Component {

  state = {
    productos_id: {}
}

componentDidMount() {
  this.obtenerProducto_id();
}

obtenerProducto_id = () => {
  
}


  mostrarProductos = () => {
    const productos = this.props.productos;
    const categorias = this.props.categorias;
    if(productos.length === 0) {return null; }
    
    console.log(productos._id);
    
    return(
      <React.Fragment>
              {Object.keys(productos).map(producto => (
                  <MostrarProductos
                        key={producto}
                        info={this.props.productos[producto]}
                  />
              ))}
      </React.Fragment>
    );
  }
    render(){

        return(

          <React.Fragment>
            <div className="row">
                <div className="col s2">
                      {this.mostrarProductos() }
                </div>
            </div>    
          </React.Fragment>
        )
    }
}

export default Productos;
