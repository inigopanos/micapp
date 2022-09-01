<template>
  <div id="container">
    <strong>{{ name }}</strong>

    <form>
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

      <h3>DETENIDO/INVESTIGADO</h3>

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
          <input type="radio" id="muestra_adn" name="muestra_adn" value="si" />
        </label>
        <label for="muestra_adn"
          >No
          <input type="radio" id="muestra_adn" name="muestra_adn" value="no"
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
        <input type="radio" id="centro_detencion" name="centro_detencion" />P.
        Nacional<label for="centro_detencion"></label>
        <input type="radio" id="centro_detencion" name="centro_detencion" />P.
        Foral<label for="centro_detencion"></label>
        <input type="radio" id="centro_detencion" name="centro_detencion" />P.
        Municial<label for="centro_detencion"></label>
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

      <label for="submit">
        <input type="submit" v-on:click="download" />
      </label>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// eslint-disable-next-line vue/no-unused-components
import jsPDF from 'jspdf';

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
  },
  methods: {
    download() {
      console.log('Se llama a download');
      let pdfName = 'test';
      var doc = new jsPDF();
      doc.save(pdfName + '.pdf');
      console.log('Se ha guardado test.pdf');
    },
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
