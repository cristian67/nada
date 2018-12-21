import React, { Component } from 'react';
import axios from 'axios';

import Navegation from '../navegation/Navegation';


class Products extends Component {

  componentWillMount(){
    this.queryAPI();
  }

  queryAPI = () => {

    const url = 'api/passwords';

    return axios.get(url)
                .then(res => console.log(res.data));
  }
    render(){
        return(
        <React.Fragment>
        <Navegation />

        <div className="container">
            <div className="row">
              <div className="col s12 m9 l10">
                <div>
                  <p>Content </p>
                </div>
              </div>
            </div>
        </div>







  {/*

        <div className="section white">
            <div className="row container">
                <h2 className="header">Parallax</h2>
                <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
            </div>
        </div>

        <div className="parallax-container">
            <div className="parallax"><img src="/img/dos.jpg" alt='parallax 2'/></div>
        </div>


        <div className="black white-text center">
            <div className="container">
                <section className="section">
                    <h3></h3>
                    <p>
                        asgasgasgasgasgasgasgasgasggasg
                    </p>
                </section>
            </div>
        </div>
  */}
        </React.Fragment>
        )
    }
}

export default Products;
