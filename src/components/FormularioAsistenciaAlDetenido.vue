<template>
  <div>
    <strong>{{ name }}</strong>
    <section slot="pdf-content">
      <main @submit.prevent="handleSubmit">
        <div id="prueba-clase">
          <div id="container">
            <div class="form-group">
              <label for="nombre">
                Letrado/a:
                <input type="text" id="nombre" />
              </label>
            </div>

            <div class="form-group">
              <label for="dia">
                Día:
                <input type="date" id="dia" />
              </label>
            </div>

            <div class="form-group">
              <input type="radio" id="cuerpo" name="cuerpo" value="com" />
              <label for="cuerpo"> Comisaría</label>

              <input type="radio" id="cuerpo" name="cuerpo" value="gc" />
              <label for="cuerpo">Guardia Civil</label>
            </div>

            <h3>DETENIDO/INVESTIGADO/PROBADO</h3>

            <div class="form-group">
              <label for="nombre_detenido">
                Nombre y apellidos:
                <input type="text" id="nombre_detenido" />
              </label>
            </div>

            <div class="form-group">
              <label for="edad">
                Edad:
                <input type="number" id="edad" />
              </label>
            </div>

            <div class="form-group">
              <label for="nacionalidad">
                Nacionalidad: <input type="text" id="nacionalidad" />
              </label>
            </div>

            <div class="form-group">
              <label for="dia_detencion">
                Día y hora de la detención:
                <input type="date" id="dia_detencion" />
                <input type="time" id="hora_detencion" />
              </label>
            </div>

            <div class="form-group">
              <label for="tipo_delito">
                Tipo de delito:
                <input type="text" id="tipo_delito" />
              </label>
            </div>

            <div class="form-group">
              Toma muestra ADN:
              <label for="muestra_adn"
                >Si
                <input
                  type="radio"
                  id="muestra_adn"
                  name="muestra_adn"
                  value="si"
                />
              </label>
              <label for="muestra_adn"
                >No
                <input
                  type="radio"
                  id="muestra_adn"
                  name="muestra_adn"
                  value="no"
              /></label>
            </div>

            <div class="form-group">
              <label for="dia_asistencia">
                Día y hora de asistencia:
                <input type="date" id="dia_asistencia" />
                <input type="time" id="hora_asistencia" />
              </label>
            </div>

            <div class="form-group">
              <label for="centro_detencion"> Centro de detención: </label>
              <input
                type="radio"
                id="centro_detencion"
                name="centro_detencion"
              />P. Nacional<label for="centro_detencion"></label>
              <input
                type="radio"
                id="centro_detencion"
                name="centro_detencion"
              />P. Foral<label for="centro_detencion"></label>
              <input
                type="radio"
                id="centro_detencion"
                name="centro_detencion"
              />P. Municipal<label for="centro_detencion"></label>
              <input
                type="radio"
                id="centro_detencion"
                name="centro_detencion"
              />Guardia Civil
              <label for="centro_detencion"></label>
            </div>

            <div class="form-group">
              <label for="localidad">
                Localidad
                <input type="text" id="localidad" />
              </label>
            </div>

            <!-- JUZGADO -->
            <p>JUZGADO</p>

            <div class="form-group">
              <label for="juzgado">
                Juzgado
                <input type="text" id="juzgado" />
              </label>
            </div>

            <div class="form-group">
              <label for="diligencias">
                Diligencias
                <input type="text" id="diligencias" />
              </label>
            </div>

            <div class="form-group">
              <label for="situacion">
                Situación en la que queda el investigado
                <input type="text" id="situacion" />
              </label>
            </div>

            <div class="form-group">
              <label for="dia_juzgado">
                Día y hora de asistencia en el juzgado
                <input type="date" id="dia_juzgado" />
                <input type="time" id="hora_juzgado" />
              </label>
            </div>

            <div class="form-group">
              <label for="asistencia_declaracion">
                Asistencia declaración denunciante</label
              >
              <input
                type="radio"
                id="asistencia_declaracion"
                name="asistencia_declaracion"
              />
              Si
              <input
                type="radio"
                id="asistencia_declaracion"
                name="asistencia_declaracion"
              />
              No
            </div>

            <div class="form-group">
              <label for="comparecencia_544">
                Comparecencia 544 Lecrim
                <input type="checkbox" id="comparecencia_544" />
              </label>
            </div>

            <div class="form-group">
              <label for="comparecencia_505">
                Comparecencia 505 Lecrim
                <input type="checkbox" id="comparecencia_505" />
              </label>
            </div>

            <div class="form-group">
              <label for="observaciones">
                Observaciones:
                <input type="text" id="observaciones" />
              </label>
            </div>

            <div class="form-group">
              <label for="gastos_desplazamiento">
                Gastos de desplazamiento
                <input type="text" id="gastos_desplazamiento" />
              </label>
            </div>

            <div class="form-group">
              <label for="firma">
                Firmado
                <input type="string" id="firma" />
              </label>
            </div>
          </div>
        </div>
        <button id="generate" v-on:click="handleSubmit()">Guardar PDF</button>
        <div id="sent_email">Se ha enviado el correo</div>
      </main>
    </section>
  </div>
</template>

<script lang="ts">
/* eslint-disable */

import { defineComponent } from 'vue';
import jsPDF from 'jspdf';
import { base64StringToBlob, dataURLToBlob } from 'blob-util';
import { pdfWindowI } from '@/_helpers/InterfaceTypes';
import Capacitor from '@capacitor/core';

// @ts-ignore
import html2pdf from 'html2pdf.js';
import { FormularioServices } from '@/router/formulario.service';
// @ts-ignore
import {
  Filesystem,
  Directory,
  Encoding,
  WriteFileOptions,
} from '@capacitor/filesystem';
import { fileTrayOutline, resizeOutline } from 'ionicons/icons';

export default defineComponent({
  components: {
    jsPDF,
  },
  name: 'AsistenciaDetenido',
  props: {
    name: String,
    nombre: String,
    dia: Date,
    cuerpo: Boolean,
    nombre_detenido: String,
    edad: Number,
    nacionalidad: String,
    dia_detencion: Date,
    hora_detencion: String,
    tipo_delito: String,
    muestra_adn: Boolean,
    dia_asistencia: Date,
    centro_detencion: Boolean,
    localidad: String,
    // JUZGADO
    juzgado: String,
    diligencias: Number,
    situacion: String,
    dia_juzgado: Date,
    hora_juzgado: String,
    asistencia_declaracion: Boolean,
    comparecencia_544: Boolean,
    comparecencia_505: Boolean,
    observaciones: String,
    gastos_desplazamiento: String,
    firma: String,
    w: String,
    timestamp: Date,
  },

  methods: {
    getTimeAndDate() {
      const today = new Date();
      const date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();
      const time =
        today.getHours() + '_' + today.getMinutes() + '_' + today.getSeconds();
      const dateTime = date + '_' + time;
      return dateTime;
    },

    handleSubmit() {
      
      let pdfFile = this.createPDF();

      this.writeFileInAndroidDirectory(pdfFile);

      // POPUP DE CONFIRMACIÓN ENVÍO DE MENSAJE

      const x = document.getElementById('sent_email');

      if (x) {
        if (x.style.display === 'none') {
          x.style.display = 'block';
        } else {
          x.style.display = 'none';
        }
      }
    },

    async writeFileInAndroidDirectory(pdfFile: any) {
      console.log('pdfFile: ', pdfFile);

      async function verifyDirectory(directory: string): Promise<boolean>{
        try {
          const content = await Filesystem.readdir({path: directory});
          console.log('Existe el directorio ', directory);
          return true;
        } catch(error) {
          console.error('El directorio ', directory, ' no existe.');
          return false;
        }
      }

      const fileName = 'Documents/Micapp/file.pdf';

      try {
        verifyDirectory(fileName).then((existe) => {
          if (!existe){
            let ret = Filesystem.mkdir({
            path: fileName,
            directory: Directory.Documents,
            recursive: false,
          });
          } else {
            console.log('Ya existe la carpeta "&{folderName}"');
          }
        })
        
        // let ret = await Filesystem.mkdir({
        //   path: folderName,
        //   directory: Directory.Documents,
        //   recursive: false,
        // });
      } catch (e) {
        console.error('Unable to make directory', e);
      }

      if (window.confirm('¿Quieres crear el archivo?'))
        try {
          let options: WriteFileOptions = {
            path: fileName,
            directory: Directory.Documents,
            encoding: Encoding.UTF8,
            recursive: true,
            data: pdfFile
          }

          await Filesystem.writeFile(options);
        } catch (e) {
          console.error('Error on writeFile object' + e); // NO DATA
        }
    
    }, 

    createAndSavePDF() {
      let timestamp = this.getTimeAndDate();

      const element = document.getElementById('prueba-clase');
      console.log('Elemento, ', element); //object HTMLDivElement

      let opt = {
        margin: 1,
        filename: `formulario_asistencia_detenido_${timestamp}.pdf`,
        image: { type: 'png', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };
      
      // fileWrite(pdf).then(() => {
      //   window.confirm('Se ha creado el archivo de forma exitosa ' + pdf);
      //   console.log('Se envía al post: ', pdf, opt.filename);
      //   FormularioServices.enviarFormulario(pdf, opt.filename);
      // }).catch((error) => {
      //   window.confirm('Ha habido un error al crear el archivo ' + error);
      // });

      let pdf = html2pdf(element).set(opt).save();  //GUARDA EL PDF?
      console.log('Nuevo PDF = ,', pdf);
      return pdf;
    },

    createPDF() {
      return new Promise(async (resolve, reject) => {
        console.log('create PDF function executed!');
        let element = document.getElementById('container');

        let opt = {
          margin: 1,
          filename: 'my-invoice.pdf',
          image: { type: 'jpeg', quality: 0.95 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };

        //Output type "pdfFile" is not supported. Error: Output type "pdfFile" is not supported.
        try {
          const pdfFile = html2pdf()
            .set(opt)
            .from(element)
            .toPdf()
            .output('datauristring');
          const pdfFileURL = html2pdf()
            .set(opt)
            .from(element)
            .toPdf()
            .output('dataurlstring');

          // https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
          // const b64toBlob = (base64: any, type = 'application/octet-stream') =>
          // fetch(`data:${type};base64,${base64}`).then(res => res.blob())

          // const blobPdf = b64toBlob(pdfFileURL)

          // https://stackoverflow.com/questions/36036280/base64-representing-pdf-to-blob-javascript
          // base64 string
          let base64str = pdfFile;
          let type64 = typeof base64str;
          console.error('Tipo de base64str: ', type64, ' prueba v0.2'); // Se llama

          // Usando npm blob-util
          // https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript

          const blob = await dataURLToBlob(pdfFileURL);

          console.log('Antes de this.fileWrite(pdfFile) el blob es', blob); // No se
          this.fileWrite(blob);
          console.log('Se ha creado el archivo ' + blob);
          
          resolve(blob);
          return blob;
        } catch (e) {
          reject('Error al crear el pdf: ' + e);
        }
      });
    },

    async fileWrite(pdfFile: Blob) {
      let folderName = 'Micapp';
      console.log('pdfFile: ', pdfFile);
      try {
        let ret = await Filesystem.mkdir({
          path: folderName,
          directory: Directory.Documents,
          recursive: false,
        });

        console.log('ret: ' + ret + '\n');
      } catch (e) {
        console.error('Unable to make directory', e);
      }

      const fileName = 'Documents/Micapp/file.pdf';
      if (window.confirm('¿Quieres crear el archivo?'))
        try {
          let text = window.prompt('Introduzca texto a escribir');

          // @ts-ignore
          // const toBase64 = file => new Promise((resolve, reject) => {
          // const reader = new FileReader();
          // reader.readAsDataURL(file);
          // reader.onload = () => resolve(reader.result);
          // reader.onerror = reject;
          // });

          // async function Test(){
          //   const file = pdfFile;
          //   console.log(await toBase64(file));
          //   return file;
          // }

          // let options: WriteFileOptions = {
          //   path: fileName,
          //   directory: Directory.Documents,
          //   encoding: Encoding.UTF8,
          //   recursive: true,
          //   data: await Promise.resolve(Test())
          // }

          await Filesystem.writeFile(pdfFile);
        } catch (e) {
          console.error('Error on writeFile object' + e);
        }
    },
  },
});
</script>

<style scoped>
#sent_email {
  display: none;
  width: 100%;
  padding: 50px 0;
  text-align: center;
  background-color: lightblue;
  margin-top: 20px;
}
</style>
