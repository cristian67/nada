import React, {Component} from 'react';

class ViewCategoriaP extends Component {

render(){
    const {nombre,img, precioUni} = this.props.producto
    return(
        <React.Fragment>
          <div className="col s3">
            <h1>{nombre}</h1>
          </div>
        </React.Fragment>    
    );
  }
}
export default ViewCategoriaP;