import axios from 'axios';
const URLAPI = 'http://52.7.252.110:8082/';

export const CrearSolicitudService = (solicitud) => {

    const url = `${URLAPI}crearOferta`;
    return axios.post(url, solicitud, {
        headers:{
            'Content-Type': 'application/json',
          }
      } );
}
export const ConsultarCategoriaService = () => {

    const url = `${URLAPI}categoriaService/getCategorias`;
    return axios.get(url)

}

export const dadsasd = () => {

    const url = `${URLAPI}dadas`;
    return axios.post(url)

}