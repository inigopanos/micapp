import axios from 'axios';

export const FormularioServices = {
  enviarFormulario,
};

const FORMULARIO_API = 'https://micapp-backend.herokuapp.com/formulario'; // Cambiado desde http://localhost:4000/formulario
// https://micapp-backend.herokuapp.com/formulario

export function enviarFormulario(formulario_pdf: string, filename: string) {
  const data_package = {formulario_pdf, filename};
  console.log('Pre post formulario', {data_package}); // Formulario pdf is undefined...
  return axios.post(`${FORMULARIO_API}`, data_package).then((response) => {
    console.log('Éxito al postear al back: ', response);
  }).catch((error) => {
    console.log('Error al postear al back:', Object.values(error).flat().join());
  });
}
