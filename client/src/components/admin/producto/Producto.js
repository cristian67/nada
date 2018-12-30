import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Producto extends Component {

     mostrarProductos = () => {
                  
     }

     render() { 
     
      const {nombre,precioUni,img,_id} = this.props.info;
      
          return (
               <tr>
                    <td>{nombre}</td>
                    <td>${precioUni}</td>
                    <td><img src={`/upload/producto/${img}`} alt={nombre} height="90" width="120"></img></td>
                    <td>
                         <Link to={`/admin/producto/editar/${_id}`} className="btn waves-effect waves-light #283593 blue"> Editar </Link>
                         <button type="button" className="btn waves-effect waves-light #b71c1c red"> Borrar </button>
                    </td>
               </tr>
           );
     }
}
 
export default Producto;