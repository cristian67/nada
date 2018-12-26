import React, { Component } from 'react';
import ViewCategoriaP from './ViewCategoriaP';


class CategoriaProductoListar extends Component {
  
  mostrarCategoriaProducto = () => {
  //const productos = this.props.productos;
  const productos_categoria = this.props.productos_categoria;
  
  if(productos_categoria.length === 0) {return null; }
    
  
  return(
    <React.Fragment>
            {Object.keys(productos_categoria).map(categoriaP => (
                <ViewCategoriaP
                          key = {categoriaP}
                          producto = {this.props.productos_categoria[categoriaP]}
                />
            ))}
    </React.Fragment>
  );
}

  
  render(){
        return(
         <React.Fragment>
            {this.mostrarCategoriaProducto()}
         </React.Fragment>       
        );
    }
}

export default CategoriaProductoListar;