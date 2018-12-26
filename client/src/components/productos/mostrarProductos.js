import React, {Component} from 'react';
import axios from 'axios';

import Router from '../Router';

class MostrarProductos extends Component {

state = {
  CategoriaProductos: {}
}

confirmarID = () =>{
  const {_id} = this.props.info;
  //console.log(_id);
  
  if(!_id) {return null;}

  axios.get(`/api/${_id}/productos`)
  .then(res => {
       console.log(res.data.productos);
       this.setState({
          CategoriaProductos:res.data.productos
       })
  });



}

enviarID =() =>{

  return(
    <React.Fragment>
        <Router  
            productosCategoria = {this.state.CategoriaProductos}
        />
    </React.Fragment>
  );

}



render(){
  const {_id, descripcion, img} = this.props.info;  
    return(
        <React.Fragment>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src={`/upload/categoria/${img}`} alt={_id}/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">{_id}<i className="material-icons right">more_vert</i></span>
                  <button onClick = { this.confirmarID } type="button">Ver Más</button>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">{_id}<i className="material-icons right">close</i></span>
                </div>
            </div> 
            {this.enviarID}
        </React.Fragment>    
    );
  }
}
export default MostrarProductos;
