import React, { Component } from 'react';
import NavegacionAdmin from '../navegation/Navegation';

class Users extends Component {
    render(){
        return(
            <React.Fragment>
                <NavegacionAdmin />
                <div>Desde usuario</div>
            </React.Fragment>
        )
    }
}

export default Users;