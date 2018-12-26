import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ListarCategorias extends Component {



render(){
  const {_id, descripcion, img} = this.props.info;  
    return(
        <React.Fragment>
          <div className="col s5">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src={`/upload/categoria/${img}`} alt={_id}/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">{descripcion}<i className="material-icons right">more_vert</i></span>
                  <Link to={`categoria/${_id}/productos`} type="button">Ver Más</Link>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">{descripcion}<i className="material-icons right">close</i></span>
                </div>
            </div> 
          </div>
        </React.Fragment>    
    );
  }
}
export default ListarCategorias;