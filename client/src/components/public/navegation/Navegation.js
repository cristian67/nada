import React from 'react';
import {NavLink , Link} from 'react-router-dom';

const Navegacion = () => {

    return(

    <div class="navbar-fixed">
        <nav className="nav-wrapper #4a148c purple darken-4 ">
            <div className="container">
                <Link className="brand-logo" to={`/`}> <img className="logo-lm" src="/img/logo/logo_LM.png"/>  </Link>
                <Link to={`#`} data-target="menu-responsive" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </Link>


                <ul className="right hide-on-med-and-down">
                    <li><NavLink to={`/`} activeClassName='activo'> Home </NavLink></li>
                    <li><NavLink to={`/categorias`} activeClassName='activo' > Categorias </NavLink></li>
                    <li><NavLink to={`/productos`} activeClassName='activo'>  Productos </NavLink></li>
                    <li><NavLink to={`/`} activeClassName='activo'>  Contacto </NavLink></li>
                </ul>

            </div>


            <ul id="menu-responsive" className="sidenav #e3f2fd blue lighten-5">
                    <li><NavLink to={`/`} activeClassName='activo'> Home </NavLink></li>
                    <li><NavLink to={`/categorias`} activeClassName='activo' > Categorias </NavLink></li>
                    <li><NavLink to={`/productos`} activeClassName='activo'>  Productos </NavLink></li>
            </ul>
        </nav>
    </div>



    )
}
export default Navegacion;
