import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavegationAdmin from '../navegation/NavegationAdmin'

class AdminCategoria extends Component {
    render(){
        return(
            <React.Fragment>
                <NavegationAdmin />
                <div>CategoriesLogin</div>
            </React.Fragment>
        )
    }
}

export default withRouter(AdminCategoria);