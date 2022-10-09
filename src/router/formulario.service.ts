import axios from 'axios';

export const FormularioServices = {
  enviarFormulario,
};

const FORMULARIO_API = 'http://localhost:4000/formulario';

export function enviarFormulario(formularioPDF: any) {
  console.log('Pre post formulario');
  return axios.post(`${FORMULARIO_API}`, formularioPDF).then((response) => {
    console.log(response);
  });
}
