import React, { Component } from 'react';
import ListarProductos from './ListarProductos';


class Productos extends Component {

  mostrarProductos = () => {
    const products = this.props.productos;
    if(products.length === 0) {return null; }
    console.log(products);

    return(
      <React.Fragment>

      </React.Fragment>
    );
  }
    render(){

        return(

          <React.Fragment>
                {this.mostrarProductos() }
          </React.Fragment>
        )
    }
}

export default Productos;
