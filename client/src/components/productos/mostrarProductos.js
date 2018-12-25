import React, {Component} from 'react';


class MostrarProductos extends Component {

render(){
  const {_id, descripcion, img} = this.props.info;
  

    return(
      
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src={`/upload/categoria/${img}`} alt={_id}/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">{descripcion}<i className="material-icons right">more_vert</i></span>
                  <p><a href="#">{_id}</a></p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">{descripcion}<i className="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div> 
          
    );
  }
}
export default MostrarProductos;
