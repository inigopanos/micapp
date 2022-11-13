import axios from 'axios';

export const FormularioServices = {
  enviarFormulario,
};

const FORMULARIO_API = 'https://micapp-backend.herokuapp.com/'; // Cambiado desde http://localhost:4000/formulario

export function enviarFormulario(filename: any) {
  console.log('Pre post formulario', filename);
  return axios.post(`${FORMULARIO_API}`, { data: filename });
}
