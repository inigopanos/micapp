import axios from 'axios';

export const FormularioServices = {
  enviarFormulario,
};

const FORMULARIO_API = 'http://localhost:4000/formulario';

export function enviarFormulario(filename: any) {
  console.log('Pre post formulario', filename);
  return axios.post(`${FORMULARIO_API}`, { data: filename });
}
