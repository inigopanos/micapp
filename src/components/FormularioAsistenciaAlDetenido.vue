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
        <label for="muestra_adn">
          Toma muestra ADN:
          <input type="bool" id="muestra_adn" />
        </label>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AsistenciaDetenido",
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
