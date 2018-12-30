import axios from 'axios';

//===============================
//  Login
//===============================
export async function postData(datosLogin){
const url = '/api/login';
return await axios.post(url, datosLogin)
             .then(  res => {return Promise.resolve(res.data)})
             .catch( err => {console.log('No tienes permisos');
             })   
}         

//===============================
//  Crear Producto
//===============================
export async function postCrearProducto(fd, config){

  const url = '/api/producto';
  
  await axios.post(url, fd, config)
  .then(  res => {
      console.log(res);
      this.setState({
          producto: res.data.producto
      });
  })
  .catch( err => {console.log('No tienes permisos');
  })   
 }         

//===============================
//  Editar Producto
//===============================
export async function editarProducto(datosProducto, config, id){

  const url = `/api/producto/${id}`;
  
  await axios.put(url, datosProducto, config)
  .then(  res => {
      console.log(res);
  })
  .catch( err => {console.log('No tienes permisos');
  })   
 }    

//===============================
//  Editar Imagen
//===============================
export async function editarImagenProducto(fd, config, id){

  const url = `/api/upload/producto/${id}`;
  
  await axios.put(url, fd, config)
  .then(  res => {
      console.log(res);
  })
  .catch( err => {console.log('No tienes permisos');
  })   
 }    






