import React from 'react';
import {NavLink , Link} from 'react-router-dom';



const NavegacionAdmin = () => {

    
    return(        
    <div className="navbar-fixed">
        <nav className="nav-wrapper #fafafa grey lighten-5">
            <div className="container">
                <Link className="brand-logo" to={`/`}> <img className="logo-lm" src="/img/logo/logo_LM.png"/>  </Link>
                <Link to={`#`} data-target="menu-responsive" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </Link>


                <ul className="right hide-on-med-and-down #212121 grey darken-4">
                    <li><NavLink to={`/login/categoria`} activeClassName='activo' > Categorias </NavLink></li>
                    <li><NavLink to={`/login/producto`} activeClassName='activo'>  Productos </NavLink></li>

                </ul>

            </div>

            <ul id="menu-responsive" className="sidenav #e3f2fd blue lighten-5">
                    <li><NavLink to={`/login/categoria`} activeClassName='activo' > Categorias </NavLink></li>
                    <li><NavLink to={`/login/producto`} activeClassName='activo'>  Productos </NavLink></li>
            </ul>
        </nav>
    </div>
    );
}
export default NavegacionAdmin;
