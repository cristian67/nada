import React, { Component } from 'react';

import { Parallax} from 'react-parallax';


/*Importar Componentes */
import Navegacion from '../navegation/Navegacion';
import Footer from '../footer/Footer';


/*estilos*/
import '../../css/animate.css';




class Contacto extends Component {


    render(){
        return(
        <React.Fragment>
       
            <Navegacion />
             {/*CONTACTO*/}
             <Parallax
                    blur={1}
                    bgImage={('/img/contact.jpg')}
                    bgImageAlt="the cat"
                    strength={300}
                >
                <div className="container">
                    <div className="row">

                        <div className="col s12 center-align white-text ">

                            <div className="card-panel #212121 grey darken-4 panel-contact">
                                <form onSubmit={this.obtenerToken}>
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <input ref={this.emailRef} type="text" placeholder="E-mail" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <input ref={this.passwordRef} type="text" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="center-align">
                                                <button type="submit" className="btn light-blue darken-5">Send</button>
                                            </div>
                                </form>
                            </div>
                        <div style={{ height: '200px' }} />
                        </div>
                    </div>
                </div>
                </Parallax>

                <Footer />

        </React.Fragment>


        );
    }
}

export default Contacto;
 

                

