import axios from 'axios';

export const FormularioServices = {
  enviarFormulario,
};

const FORMULARIO_API = 'https://micapp-backend.herokuapp.com/formulario'; // Cambiado desde http://localhost:4000/formulario
// https://micapp-backend.herokuapp.com/formulario

export function enviarFormulario(formulario_pdf: any) {
  console.log('Pre post formulario', formulario_pdf);
  return axios.post(`${FORMULARIO_API}`, { data: formulario_pdf });
}
