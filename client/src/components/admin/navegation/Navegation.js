import React from 'react';
import {NavLink} from 'react-router-dom';

import './Navegation.css';
 
const NavegacionAdmin = () => {
    
    return(
        <nav className="nav-wrapper">
            <NavLink to={`/login/productos`} activeClassName='activo'> Productos </NavLink>
            <NavLink to={`/login/categorias`} activeClassName='activo' > Categorias </NavLink>
            <NavLink to={`/login/usuarios`} activeClassName='activo'>  Usuarios </NavLink>
        </nav>
    )
}
export default NavegacionAdmin;