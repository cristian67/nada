import React, { Component } from 'react';
import WhenInView from '../public/WayPoint/WayPoint';

import { Parallax, Background } from 'react-parallax';

import { RevelarContenido ,Titulo , PanelIcon} from './Home.style'

import Navegation from '../public/navegation/Navegation';

import '../../css/animate.css';
import './Home.css';



class Home extends Component {

    componentDidMount(){
      
    }

    render(){
        return(
        <React.Fragment>
            
        <Navegation />
            
    <div>

        {/* -----Parallax Background-----*/}
        <Parallax
            blur={0.3}
            bgImage={('/img/index01.jpg')}
            bgImageAlt="back"
            strength={300}
        >
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <img src="/img/logo/logo_lalymania_vf.png" width="320" height="250" className="logo animated zoomIn delay-1s"/>
                </div>
            
                <div style={{ height: '450px' }} />
            </div>
        </div>         
        </Parallax>
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


    <WhenInView> 
            {({isInView}) =>
                <RevelarContenido >
                        <div className="card-panel #f44336 red">
                            <div className="row">
                                <div hidden={!isInView} className="animated pulse delay-1s"> 
                                <div className="col s12 center-align "><h2>No paso nada</h2></div>
                                <div className="col s6">Do dolore duis reprehenderit eu exercitation amet sit tempor fugiat eu ex. Ipsum Lorem quis velit deserunt reprehenderit ea fugiat eiusmod duis nisi magna. Irure labore esse consectetur veniam.</div>
                                <div className="col s6">Enim cupidatat id cillum nostrud. Officia incididunt incididunt ipsum nostrud sit sunt cupidatat nostrud in officia minim est officia magna. Cupidatat sunt voluptate aute commodo fugiat proident incididunt occaecat aliquip aliqua mollit irure anim. Veniam sit laborum sint excepteur nostrud ad nulla consequat aute deserunt. Ad commodo est ullamco nisi veniam minim ea consectetur magna sint. Incididunt ea qui do eiusmod.</div>
                                </div>
                            </div>
                        </div>        
                </RevelarContenido>
                }
    </WhenInView>       

    <WhenInView> 
            {({isInView}) =>
                <RevelarContenido hidden={!isInView} >
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
        </RevelarContenido>
                }
    </WhenInView>    
    
    <WhenInView> 
            {({isInView}) =>
                <RevelarContenido >
                        <div className="card-panel #212121 grey darken-4  animated fadeInLeft delay-0.4s">
                            <div className="row">
                                <div className="col s12 center-align white-text "><h2>No paso nada</h2></div>
                                <div hidden={!isInView} class="sketchfab-embed-wrapper col s12 center-align"><iframe width="640" height="480" src="https://sketchfab.com/models/304ce27f65574b3699a23e573b2e2b4a/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                                </div>
                            </div>
                        </div>        
                </RevelarContenido>
                }
    </WhenInView>   



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