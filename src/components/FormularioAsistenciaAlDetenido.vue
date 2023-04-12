<template>
  <div>
    <strong>{{ name }}</strong>
    <section slot="pdf-content">
      <main @submit.prevent="handleSubmit">
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
        <button id="generate" v-on:click="handleSubmit()">Guardar PDF</button>
      </main>
    </section>
  </div>
</template>

<script lang="ts">
/* eslint-disable */

import { defineComponent } from 'vue';
import jsPDF from 'jspdf';
import { pdfWindowI } from '@/_helpers/InterfaceTypes';
// @ts-ignore
import html2pdf from 'html2pdf.js';
import { FormularioServices } from '@/router/formulario.service';

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
      let timestamp = this.getTimeAndDate();
      console.log(timestamp);

      let element = document.getElementById('container');
      let opt = {
        margin: 1,
        filename: `formulario_asistencia_detenido_${timestamp}`,

        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };
      console.log(element);

      html2pdf(element, opt);
      FormularioServices.enviarFormulario(opt.filename);
      console.log('Se ha enviado el pdf');
    },
  },
});
</script>

<style scoped>

</style>
