import axios from 'axios';

export const FormularioServices = {
  enviarFormulario,
};

const FORMULARIO_API = 'https://micapp-backend.herokuapp.com/formulario'; // Cambiado desde http://localhost:4000/formulario
// https://micapp-backend.herokuapp.com/formulario

export function enviarFormulario(formulario_pdf: string, filename: string) {
  console.log('Pre post formulario', formulario_pdf, filename); // Formulario pdf is undefined...
  return axios.post(`${FORMULARIO_API}`, { data: formulario_pdf, filename }).then((response) => {
    console.log('Éxito al postear al back: ', response);
  }).catch((error) => {
    console.log('Error al postear al back:', error);
  });
}
