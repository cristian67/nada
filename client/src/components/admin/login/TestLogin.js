import React, { Component } from 'react';
import {postData} from  '../services/postData';
import {Redirect} from 'react-router-dom';

class TestLogin extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        redirect: false
    }

    //Referencias
    this.emailRef = React.createRef();
    this.passRef = React.createRef();


    //Funciones
    this.login = this.login.bind(this);

    }

    //FUNCION OBTENER DATOSLOGIN
    login(e){
    
    e.preventDefault();

    //Crear objecto
    const datosLogin = {
        email: this.emailRef.current.value,
        password: this.passRef.current.value
      }
    
    this.setState({
        email: datosLogin.email,
        password: datosLogin.password
    })
    
    if(this.state.email && this.state.password){
        postData(datosLogin).then(res => 
            { 
                let dataJSON = res 
                if(dataJSON.ok == true) {
                    localStorage.setItem('dataUser', dataJSON);
                    console.log(dataJSON);
                    this.setState({ redirect: true});
                }
            })
            .catch(err => {console.log('Email/Password incorrecto')})    
    }

    }

   

    render(){
        if(this.state.redirect)
        {
            return (<Redirect to={'/admin/producto'} />);
        }

        if(localStorage.getItem('dataUser'))
        {
            return (<Redirect to={'/admin/producto'} />);
        }

        return(
            <div className="container">
                <div className="row">
                <div className="card-panel">
                    <h4 className="center-align">Login de Usuario</h4>
                </div>
                    <div className="card-panel">

                        <form onSubmit={this.login}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input ref = {this.emailRef} id="email" type="email" className="validate"/>
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input ref={this.passRef} type="password" className="validate" />
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

export default TestLogin;
