import React,{Component} from 'react';
import NavegationAdmin from '../navegation/NavegationAdmin';
import OptionSelect from '../producto/OptionSelect';
import { editarProducto, editarImagenProducto } from '../services/postData';


//Token headers
const config = {headers: { 
    'Content-Type': 'application/json',
    'token': localStorage.token 
}}

class EditarProducto extends Component {
    

    constructor(props){
        super(props);
        this.state = {
            selectedFile: null,
            producto:''
        };

        // crear los refs
        this.nombreRef    = React.createRef();
        this.precioRef    = React.createRef();
        this.categoriaRef = React.createRef();
    }


    //===============================
    //  Editar parametros
    //===============================
    editarProducto = (e) => {
        e.preventDefault();

        //crear objecto
        const producto = {
            nombre: this.nombreRef.current.value,
            categoria: this.categoriaRef.current.value,
            precioUni: this.precioRef.current.value,
            disponible: true
        }

        //peticion
        const id = this.props.producto._id;
        editarProducto(producto, config, id);
        
   }

    //===============================
    //  Subir archivo de imagen
    //===============================
    fileSelectedHandler = event => {
        
    this.setState({
           selectedFile: event.target.files[0]
        });
    }

    uploadFile = () => {

    const id = this.props.producto._id;
    if(this.state.selectedFile && this.state.selectedFile.name && id) 
    {
        
        const fd = new FormData();
        fd.append('image', this.state.selectedFile);
        
        //CAMBIAR IMAGEN
        editarImagenProducto(fd, config, id);

        } else {
            console.log("no seleccionaste ninguna imagen");  
        }
    }


    render() {
        
        if(!this.props.producto) {return null;}

        const {categoria, img, nombre, precioUni} = this.props.producto;

        return (
            <React.Fragment>
            <NavegationAdmin />
               <p></p>
               <div className="container">
               <div className="row">
               <div className="card-panel #90caf9 blue lighten-3">
                   <h4 className="center-align">Editar Producto</h4>
               </div>

               <div className="card-panel">
                       <form onSubmit={this.editarProducto}>
                            <div className="input-field col s12">
                               <span htmlFor="nombre">Nombre del producto: </span>
                               <input ref={this.nombreRef} id="nombre" type="text" className="validate" defaultValue={nombre} />
                            </div>  

                            <div className="input-field col s12">
                               <span htmlFor="precio">Precio del producto en $: </span>
                               <input ref={this.precioRef} id="precio" type="text" className="validate" defaultValue={precioUni}/>
                            </div>  

                            <div className="input-field col s12">
                            <span htmlFor="precio">Seleccionar una categoria</span>
                                    <select ref={this.categoriaRef} className="browser-default">
                                                <option value="" disabled>Choose your option</option>
                                                {Object.keys(this.props.categorias).map(key => (
                                                    <OptionSelect       
                                                        key = {key}  
                                                        categorias = {this.props.categorias[key]}
                                                    />
                                                ))}   
                                    </select>
                            </div>
                    
                           <div className="center-align">
                               <button type="submit" className="btn light-blue darken-5 btn-large">Actualizar</button>
                           </div>
                       </form>

                   </div>

                   <div className="row">
                   <div className="card-panel #4dd0e1 cyan lighten-2">
                        <h4 className="center-align">Cambiar la imagen</h4>
                   </div>

                   <div className="card-panel center-align">
                        <img src={`/upload/producto/${img}`} alt={nombre} height="150" width="250"></img>
                        <hr></hr>
                            <div className="col s12">
                                <input onChange={this.fileSelectedHandler} required="" aria-required="true" type="file" id="avatar" name="avatar"/>
                            </div>
                        <br></br>
                        <hr></hr>
                        <div className="center-align">
                               <button type="submit" onClick={this.uploadFile} className="btn waves-effect waves-light #b71c1c red">Cambiar Imagen</button>
                        </div> 
                        </div>
                    </div>  
               </div>
           </div>
          </React.Fragment>
        );
    }
}

export default EditarProducto