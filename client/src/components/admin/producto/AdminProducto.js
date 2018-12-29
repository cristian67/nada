import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import NavegationAdmin from '../navegation/NavegationAdmin';
import ListadoProducto from '../producto/ListadoProducto'; 

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
                <div>Products pagina q se ve al Logearse </div>
                <button type="button" onClick={this.logout}>Logout</button>

                <div className="col s12 md8 lg8 center-align">
                    <h2 className="text-center">Productos</h2>
                    <Link to={`/admin/producto/crear`} className="btn waves-effect waves-light"> Crear </Link>
 
                    <ListadoProducto 
                         productos ={this.props.productos}
                         //borrarPost={this.props.borrarPost}
                    />
               </div>

            </React.Fragment>
        )
    }
}

export default AdminProducto;
