import React, { Component } from 'react';
import Navegacion from '../navegation/Navegacion';
import Footer from '../footer/Footer';

import ViewProductos from  './ViewProductos';

class Productos extends Component {
  mostrarProductos = () => {
    const productos = this.props.productos;
    
    if(productos.length === 0) {return null; }
        
    return(
      <React.Fragment>
            {Object.keys(productos).map(producto => (
                <ViewProductos

                          key = {producto}
                          producto = {this.props.productos[producto]}
                />
            ))}
      </React.Fragment>
    );
  }
  
  render(){
        return(
            <React.Fragment>
                <Navegacion />
                <div className="container">
                    <div className="row">
                        {this.mostrarProductos()}
                    </div>
                </div>   
                <Footer />
            </React.Fragment>        
       
        );
    }
}

export default Productos;
