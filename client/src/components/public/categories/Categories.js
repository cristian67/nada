import React, { Component } from 'react';
import Navegation from '../navegation/Navegation';
import axios from 'axios';


class Categories extends Component {

  componentWillMount(){
    this.queryAPI();
  }

  queryAPI = () => {

    const url = 'api/categoria';

    return axios.get(url)
                .then(res => console.log(res.data));
  }




    render(){
        return(
            <React.Fragment>
            <Navegation />
            <div className="container">
                <div className="row">
                    <div className="col s4 m4">
                        <div className="card">
                            <div className="card-image">
                            <img src="img/uno.jpg" alt='categoria' />
                            <span className="card-title"> Categoria </span>
                            <a className="btn-floating halfway-fab waves-effect waves-light red">
                            <i className="material-icons">add</i></a>
                            </div>
                        <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
              </div>
              <div className="col s4 m4">
                <div className="card">
                    <div className="card-image">
                        <img src="/img/uno.jpg" alt='some value' />
                        <span className="card-title">Categoria</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <i className="material-icons">add</i></a>
                    </div>
                    <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
              </div>
              <div className="col s4 m4">
                <div className="card">
                    <div className="card-image">
                        <img src="/img/uno.jpg" alt='some value' />
                        <span className="card-title">Categoria</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <i className="material-icons">cloud</i></a>
                    </div>
                    <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
              </div>
              <div className="col s4 m4">
                <div className="card">
                    <div className="card-image">
                        <img src="/img/uno.jpg" alt='some value' />
                        <span className="card-title">Categoria</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <i className="material-icons">add</i></a>
                    </div>
                    <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
              </div>
              <div className="col s4 m4">
                <div className="card">
                    <div className="card-image">
                        <img src="/img/uno.jpg" alt='some value' />
                        <span className="card-title">Categoria</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <i className="material-icons">add</i></a>
                    </div>
                    <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
              </div>

            </div>
        </div>

        </React.Fragment>
        )
    }
}

export default Categories;
