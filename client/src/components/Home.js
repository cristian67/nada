import React, { Component } from 'react';
import WhenInView from './WayPoint/WayPoint';


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


            {/* -----Video Background----*/}
            <div className="fullscreen-bg">     
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

            
            

            {/*sketchfab */}
            <WhenInView>
                    {({isInView}) =>
                        <RevelarContenido >
                                <div className="card-panel #212121 grey darken-4">
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

            <Footer />
           

        </React.Fragment>


        );
    }
}

export default Home;
