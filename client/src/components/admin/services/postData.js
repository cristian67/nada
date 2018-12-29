import axios from 'axios';




export async function postData(datosLogin){
const url = '/api/login';
return await axios.post(url, datosLogin)
             .then(  res => {return Promise.resolve(res.data)})
             .catch( err => {console.log('No tienes permisos');
             })   
}         


export async function postCrearProducto(datosProducto, config){

  const url = '/api/producto';
  //console.log(config);
  
 return await axios.post(url, datosProducto, config)
              .then(  res => {
                console.log(res.data.producto);
                this.setState({
                    producto: res.data.producto
                });
              })
              .catch( err => {console.log('No tienes permisos');
              })        
 }         
 
