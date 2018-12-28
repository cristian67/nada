import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import AdminProducto from './admin/producto/AdminProducto'; 
import AdminCategoria from './admin/categoria/AdminCategoria'; 

import VerificaLogin from "./admin/verificaLogin";



function AdminRoute() {
 return (
  <Router>
         <div>
                 {/* Admin:Categoria */}
                 <Route exact  path="/login/categoria" render={()=>{
                         return(
                           <React.Fragment>
                                  <div className="animated fadeIn delay-0.4s">
                                        <AdminCategoria 
                                                            
                                          />
                                  </div>
                             </React.Fragment>
                            );
                }} />
         </div>
     </Router>
 );
}



//CLASE PRINCIPAL
class Login extends React.Component {

  state = { 
    redirectToReferrer: false,
    usuario: {} ,
    cargando: false , 
    token: '', 
    error:''
  };

  verificaToken = async (datosLogin) => {
    const url = '/api/login';
    await axios.post(url, datosLogin)
         .then(res => {
                  this.setState({
                    usuario: res.data,
                    cargando:true,
                    token: res.data.token
                  });
                  setTimeout(() => {
                    this.setState({
                    cargando: false
                    });
                   }, 3000); 
                })
         .catch(err => {
                this.setState({
                  cargando:true,
                  error: 'Email/Password no son correctos para ingresar.'
                })
                setTimeout(() => {
                  this.setState({
                  cargando: false
                  });
                 }, 1000);
         });

  }


  render() {
    return (
     <div>
     <p>You must log in to view the page at </p>
     <button>Log in</button>
   </div>
    );
  }
}

export default AdminRoute;
