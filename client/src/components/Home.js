import React, { Component } from 'react';
import WhenInView from './WayPoint/WayPoint';
import { Parallax} from 'react-parallax';


import { RevelarContenido } from './Home.style'


/*Importar Componentes */
import Navegacion from './navegation/Navegacion';
import Footer from './footer/Footer';



/*estilos*/
import '../css/animate.css';
import './Home.css';



class Home extends Component {


    render(){
        return(
        <React.Fragment>
        
            <Navegacion />

            {/* -----Background Celular----*/}
            <div className="hide-on-med-and-up">     
             <Parallax
                    blur={1}
                    bgImage={('/img/index01.jpg')}
                    bgImageAlt="the cat"
                    strength={300}
                >
                <div className="container">
                    <div className="row">
                        <div className="col s12 center-align white-text ">
                                <div className="tituloMania">
                                    <img src={`/img/logo/logo_lalymania_vf.png`} alt="logo" width="200px" height="100vh"/>
                                </div>
                          
                        <div style={{ height: '200px' }} />
                        </div>
                    </div>
                </div>
                </Parallax>
            </div>


             {/* -----Background Tablet----*/}
            <div className="hide-on-large-only hide-on-small-only">     
             <Parallax
                    blur={1}
                    bgImage={('/img/index01.jpg')}
                    bgImageAlt="the cat"
                    strength={300}
                >
                <div className="container">
                    <div className="row">
                        <div className="col s12 center-align white-text ">
                                <div className="tituloMania">
                                    <h1 className="titulo">Bienvienido a :</h1>
                                    <img src={`/img/logo/logo_lalymania_vf.png`} alt="logo" width="300px" height="240px"/>
                                </div>
                          
                        <div style={{ height: '200px' }} />
                        </div>
                    </div>
                </div>
                </Parallax>
            </div>

            {/* -----Video Background solo para Desktop----*/}
            <div className="fullscreen-bg hide-on-med-and-down">     
                <div className="tituloMania">
                    <h1 className="titulo">Bienvenido a Lalymania</h1>
                    <hr></hr>
                    <img src={`/img/logo/logo_lalymania_vf.png`} alt="logo"/>
                    </div>
                    <div className="video-container">
                        <video className='videoTag fullscreen-bg__video' autoPlay loop muted>
                                <source src="/video/video.mp4" type='video/mp4' />
                        </video>
                    </div>    
            </div>
            <div className="card-panel indigo darken-4"> 
                <div className="row">
                    <div className="col s12 center-align"> 
                        <button className="btn waves-effect waves-light #0d47a1 blue darken-4 boton" >    
                            <i className="fab fa-facebook-f"></i> Facepage 
                        </button>  
                    </div>   
                </div>     
            </div>


            {/* Sobre mi */}
            <div className="card-panel #f44336 red">
                            <div className="row">
                                <div className="animated pulse delay-1s"> 
                                <div className="col s12 center-align ">
                                    <h2>Sobre Mi</h2>
                                </div>
                               
                                <div className="col s12 m12 l3 left-align">Do dolore duis reprehenderit eu exercitation amet sit tempor fugiat eu ex. Ipsum Lorem quis velit deserunt reprehenderit ea fugiat eiusmod duis nisi magna. Irure labore esse consectetur veniam.</div>
                                <div className="col s12 m12 l6 center-align ">
                                    <img src={`/img/masetero_icon.png`} alt="logo" width="350px" height="240px"/>
                                </div>
                                
                                <div className="col s12 m12 l3 right-align">Enim cupidatat id cillum nostrud. Officia incididunt incididunt ipsum nostrud sit sunt cupidatat nostrud in officia minim est officia magna. Cupidatat sunt voluptate aute commodo fugiat proident incididunt occaecat aliquip aliqua mollit irure anim. Veniam sit laborum sint excepteur nostrud ad nulla consequat aute deserunt. Ad commodo est ullamco nisi veniam minim ea consectetur magna sint. Incididunt ea qui do eiusmod.</div>
                                </div>
                            </div>
            </div> 
            
            

            {/*sketchfab */}
            <WhenInView>
                    {({isInView}) =>
                        <RevelarContenido >
                                <div className="card-panel #212121 grey darken-4 hide-on-small-only">
                                    <div className="row">
                                        <div className="col s12 center-align white-text "><h2>Modelo 3D</h2></div>
                                        <div className="col s12 center-align white-text "><h5>De uno de mis trabajos</h5>
                                        <i class="fas fa-surprise"></i> <i class="fas fa-smile-beam"></i> <i class="fas fa-heart"></i>
                                        </div>
                                        <div hidden={!isInView} className="sketchfab-embed-wrapper col s12 center-align">
                                        <iframe width="540" height="480" src="https://sketchfab.com/models/304ce27f65574b3699a23e573b2e2b4a/embed" frameBorder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                                        </div>
                                    </div>
                                </div>
                        </RevelarContenido>
                        }
            </WhenInView> 

            <Footer />
           

        </React.Fragment>


        );
    }
}

export default Home;
