import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import axios from 'axios';

import '../../css/cargando.css';

import Login from './login/Login';
import AdminCategoria from '../admin/categoria/AdminCategoria';



function AuthExample() {
  return (
    <Router>
    <div>
      <Route exact  path="/admin/categoria" render={()=>{
        return(
             <React.Fragment>
                  <div className="animated fadeIn delay-0.4s">
                       <AdminCategoria
                            token = {this.state.token}
                       />
                  </div>
             </React.Fragment>
        );
      }} />
      </div>
    </Router>
  );
}




class VerificaLogin extends Component {

  constructor() {
    super();
    this.state = { usuario: {} , cargando: false , token: '', error:''};

    //Funciones
    this.verificaToken = this.verificaToken.bind(this);
  }

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

    Funcion 
     /*cargando pagina animacion*/
     const cargando = this.state.cargando;
     const token    = this.state.token;
     const err      = this.state.error;
     let respuesta;

     if(cargando){
      respuesta =      <div className="sk-circle animated fadeIn delay-0.5s">
                                 <div className="sk-circle1 sk-child"></div>
                                 <div className="sk-circle2 sk-child"></div>
                                 <div className="sk-circle3 sk-child"></div>
                                 <div className="sk-circle4 sk-child"></div>
                                 <div className="sk-circle5 sk-child"></div>
                                 <div className="sk-circle6 sk-child"></div>
                                 <div className="sk-circle7 sk-child"></div>
                                 <div className="sk-circle8 sk-child"></div>
                                 <div className="sk-circle9 sk-child"></div>
                                 <div className="sk-circle10 sk-child"></div>
                                 <div className="sk-circle11 sk-child"></div>
                                 <div className="sk-circle12 sk-child"></div>
                        </div>                      
     } else if (this.state.usuario.token = token) {

      respuesta =  this.props.history.push('/admin/categoria');
                              


         
     } else if (err) {

      respuesta = 
              <React.Fragment>
                  <Login verificaToken = {this.verificaToken} />
                  <div className="container">
                      <div className="row">
                            <div class="card-panel col s12 ">
                              <span class="red-text text-darken-2 center-align">* {`${err}`}</span>
                            </div>
                      </div>
                  </div>   
              </React.Fragment>   
     }  

     else{
      respuesta =   <Login verificaToken = {this.verificaToken} />
     }

    return(
      <div>
          {respuesta}
      </div>
    )
  }
}

export default withRouter(verificaToken);
