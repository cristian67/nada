import axios from 'axios';


export async function postData(datosLogin){
const url = '/api/login';
return await axios.post(url, datosLogin)
             .then(  res => {return Promise.resolve(res.data)})
             .catch( err => {console.log('No tienes permisos');
             })
            
}         

