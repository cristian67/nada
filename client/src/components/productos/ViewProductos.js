import React, {Component} from 'react';

class ViewProductos extends Component {



render(){
    const {nombre, precioUni} = this.props.producto;
    return(
        <React.Fragment>
            <h1>{nombre}</h1>
            <h1>{precioUni}</h1>
        </React.Fragment>    
    );
  }
}
export default ViewProductos;
