import React, { Component } from 'react';
import axios from 'axios';
import Login from './login/Login';

class VerificaLogin extends Component {

  constructor() {
    super();
    this.state = { usuario: {} };

    //Funciones
    this.verificaToken = this.verificaToken.bind(this);
  }

  verificaToken(datosLogin){
    const url = '/api/login';
    let token = ''
    axios.post(url, datosLogin)
         .then(res => {
                  this.setState({
                    usuario: res.data
                  });
                })
         .catch(error => console.log(error));

  }

  render() {
    return(
      <div>
          <Login
              verificaToken = {this.verificaToken}
          />


      </div>
    )
  }
}

export default VerificaLogin;
