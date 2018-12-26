import React, { Component } from 'react';
import Navegacion from '../navegation/Navegacion';
import Footer from '../footer/Footer';


import ListarCategorias from './ListarCategorias';


class Categorias extends Component {

  mostrarCategorias = () => {
    //const productos = this.props.productos;
    const categorias = this.props.categorias;
    
    if(categorias.length === 0) {return null; }
    
    
    return(
      <React.Fragment>
              {Object.keys(categorias).map(categoria => (
                  <ListarCategorias
                            key={categoria}
                            info={this.props.categorias[categoria]}
                  />
              ))}
      </React.Fragment>
    );
  }
  
  render(){
        return(
            <React.Fragment>
                <Navegacion />
                
                <div className="container">
                    <div className="row">
                        {this.mostrarCategorias()}
                    </div>
                </div>  

                <Footer />
            </React.Fragment>        
        );
    }
}

export default Categorias;