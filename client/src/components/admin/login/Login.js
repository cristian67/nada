import React, { Component } from 'react';

class Login extends Component {
    constructor() {
      super();

      this.emailRef    = React.createRef();
      this.passwordRef = React.createRef();

      this.obtenerToken = this.obtenerToken.bind(this);

    }

    //FUNCION OBTENER DATOSLOGIN
    obtenerToken(e){
    e.preventDefault();

    //Crear objecto
    const datosLogin = {
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value
    }


    //this.props.verificaToken(datosLogin);
    
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                <div className="card-panel">
                    <h4 className="center-align">Login de Usuario</h4>
                </div>
                    <div className="card-panel">

                        <form onSubmit={this.obtenerToken}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input ref={this.emailRef} id="email" type="email" className="validate" />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input ref={this.passwordRef}  type="password" className="validate" />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="center-align">
                                <button type="submit" className="btn light-blue darken-5">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login;
