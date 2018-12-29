import React, { Component } from 'react';
import Producto from './Producto';

class ListadoProducto extends Component {
     mostrarProductos = () => {
          const productos = this.props.productos;

          if(productos.length === 0) return null;

          return (
               <React.Fragment>
                    {Object.keys(productos).map(producto => (
                         <Producto
                              key={producto}
                              info={this.props.productos[producto]}
                              //borrarPost={this.props.borrarPost}
                         />
                    ))}
               </React.Fragment>
          )
     }


     render() { 
          return (
               <table className="table">
                    <thead>
                         <tr> 
                              <th scope="col">Nombre</th>
                              <th scope="col">Precio</th>
                              <th scope="col">Imagen</th>
                              <th scope="col">Acciones</th>
                         </tr> 
                    </thead>
                    <tbody>
                           {this.mostrarProductos() }
                    </tbody>
               </table>
           )
     }
}
 
export default ListadoProducto;