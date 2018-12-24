import React, { Component } from 'react';
import WhenInView from '../public/WayPoint/WayPoint';

import { Parallax} from 'react-parallax';

import { RevelarContenido    } from './Home.style'


/*Importar Componentes */
import Productos from '../public/productos/Productos';


/*estilos*/
import '../../css/animate.css';
import './Home.css';



class Home extends Component {


    render(){
        return(
        <React.Fragment>


  {/* -----Parallax Background-----*/}
  <div class="fullscreen-bg">
        
        <video className='videoTag' autoPlay loop muted>
                <source src="/video/video.mp4" type='video/mp4' />
        </video>
   </div>


        {/* PRODUCTOS */}
        <div className="row">
              <Productos
                productos={this.props.productos}
              />
        </div>
        
        {/*Video*/}

        

        {/*sketchfab*/}
        <WhenInView>
                {({isInView}) =>
                    <RevelarContenido >
                            <div className="card-panel #212121 grey darken-4  animated fadeInLeft delay-0.4s">
                                <div className="row">
                                    <div className="col s12 center-align white-text "><h2>No paso nada</h2></div>
                                    <div hidden={!isInView} className="sketchfab-embed-wrapper col s12 center-align">
                                      <iframe width="640" height="480" src="https://sketchfab.com/models/304ce27f65574b3699a23e573b2e2b4a/embed" frameBorder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                                    </div>
                                </div>
                            </div>
                    </RevelarContenido>
                    }
        </WhenInView>


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

            </React.Fragment>


        );
    }
}

export default Home;
