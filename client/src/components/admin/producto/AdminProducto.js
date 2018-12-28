import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import NavegationAdmin from '../navegation/NavegationAdmin';

class AdminProducto extends Component {
    constructor(props) {
        super(props);
        this.state = {
          redirect: false
      }

      //Funciones
      this.logout = this.logout.bind(this);

    }  

    componentWillMount(){
        if(localStorage.getItem('dataUser'))
        {
            console.log("Call user Feed");
        }
        else{
            this.setState({
                redirect: true
            })
        }
    }

    logout(){
        localStorage.setItem('dataUser', '');
        localStorage.clear();
        this.setState({
            redirect: true
        })
    }

    render(){
        if(this.state.redirect)
        {
            return (<Redirect to={'/login'} />);
        }

        return(
            <React.Fragment>
                <NavegationAdmin />
                <div>Products Login</div>
                <button type="button" onClick={this.logout}>Logout</button>
            </React.Fragment>
        )
    }
}

export default AdminProducto;
