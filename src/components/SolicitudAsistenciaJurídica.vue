<template>
  <div id="container">
    <div id="titulo">
      <strong>Solicitud de Asistencia Jurídica Gratuita</strong>
      <p>Con la finalidad de acreditar la concurrencia de los requisitos legales para el reconocimiento del derecho de justicia
        gratuita, declaro que los datos que relaciono a continuación son ciertos, pretendiendo tan sólo litigar por derechos propios.
      </p>
    </div>
    <section slot="pdf-content">
      <main @submit.prevent="handleSubmit">
        <div> 
          <p>1.- Datos personales - Datu pertsonalak</p> 
          <div class="seccion">
              A) SOLICITANTE - ESKATZAILEA
          </div>

          <div class="container-solicitante">
            <div class="container-solicitante persona-identificacion">
              <div class="container-solicitante persona-identificacion tipo-persona">

                Tipo de persona 

                <div>
                  <input type="radio" id="tipo_persona" name="tipo_persona"/>
                  FÍSICA 
                  <label for="tipo_persona" class="input_persona"></label>
                </div>
                
                <div>
                  <input type="radio" id="tipo_persona" name="tipo_persona" />
                  JURÍDICA
                  <label for="tipo_persona" class="input_persona"></label>
                </div>
              </div>  

              <div class="container-solicitante persona-identificacion identificacion nº-identificacion">
              
                <div class="nº-identificacion">
                  Nº de Identificación
                  <input type="text">
                </div>
                
                <div>
                  <input type="radio" id="tipo_identificacion" name="tipo_identificacion"/> DNI 
                  <label for="tipo_identificacion"></label>
                </div>
                  
                <div>
                  <input type="radio" id="tipo_identificacion" name="tipo_identificacion"/> CIF 
                  <label for="tipo_identificacion"></label>
                </div>
               
                <div>
                  <input type="radio" id="tipo_identificacion" name="tipo_identificacion"/> PASAPORTE 
                  <label for="tipo_identificacion"></label>
                </div>
               
                <div>
                  <input type="radio" id="tipo_identificacion" name="tipo_identificacion"/> TARJETA DE RESIDENCIA 
                  <label for="tipo_identificacion"></label>      
                </div>
              
                <div>
                  <input type="radio" id="tipo_identificacion" name="tipo_identificacion"/> SIN IDENTIFICACIÓN 
                  <label for="tipo_identificacion"></label>
                </div>
             
              </div>
            </div>
          </div> 
        </div>
            <!--Datos del solicitante-->
            <br>
        <div class="datos-solicitante-container">

          <!--Primera fila-->
            <div class="datos-solicitante-container primera-fila">
               <div>
              Nombre - Izena 
              <input type="text"> 
            </div>

            <div>
              Primer apellido - Lehen deitura
              <input type="text"> 
            </div>
            <div>
              Segundo apellido - Bigarren deitura
              <input type="text"> 
            </div>
          </div>

          <!--Segunda fila-->

          <div class="datos-solicitante-container segunda-fila">
            <div>
              Dirección - Helbidea
              <input type="text"> 
            </div>
            <div>
              Dirección - Helbidea
              <input type="text"> 
            </div>
            <div>
              Nº- Zk.
              <input type="text"> 
            </div>
            <div>
              Esc - Esk
              <input type="text"> 
            </div>
            <div>
              Piso - Solairua
              <input type="text"> 
            </div>
          </div>
            

            <!--Tercera fila-->
            
          <div class="datos-solicitante-container tercera-fila"> 
              <div>
              CP - PK
              <input type="text"> 
            </div>
            <div>
              Localidad - Herria
              <input type="text"> 
            </div>
            <div>
              Municipio - Udalerria
              <input type="text"> 
            </div>
            <div>
              Provincia - Probintzia
              <input type="text"> 
            </div>
            <div>
              País - Herrialdea
              <input type="text"> 
            </div>
          </div>

           
          <!--Cuarta fila-->

          <div class="datos-solicitante-container cuarta-fila">
             <div>
              Fecha nacimiento
              <input type="text"> 
            </div>
            <div>
              Profesión
              <input type="text"> 
            </div>
            <div>
              Teléfono
              <input type="text"> 
            </div>
            <div>
              Correo electrónico
              <input type="text"> 
            </div>
          </div>
              
        </div>
        
        <div class="seccion">
              B) UNIDAD FAMILIAR - FAMILIA UNITATEA
        </div>  
        
        <!--UNIDAD FAMILIAR, B-->

        <div> 
          Datos del cónyuge y/o pareja estable - Ezkontidearen eta/edo bikote egonkorreko kidearen datuak
        </div>

        <div class="datos-conyuge-container">

          <!--Primera fila-->

          <div class="datos-conyuge-container cuarta-fila">
            <div>
              Identificación - Identifikazioa
              <input type="text"> 
            </div>
            <div>
              DNI nº - NAN zk.
              <input type="text"> 
            </div>
            <div>
              CIF nº IFK zk.
              <input type="text"> 
            </div>
            <div>
              Pasaporte nº - Pasaportearen zk.
              <input type="text"> 
            </div>
            <div>
              Tarjeta de residencia nº - Egoitza-Txartelaren zk.
              <input type="text"> 
            </div>
            <div>
              Sin identificación - Nortasun agirik gabe
              <input type="checkbox"> 
            </div>
          </div>

          <!--Segunda fila-->
            <div class="datos-conyuge-container primera-fila">
              <div>
              Nombre - Izena 
              <input type="text"> 
            </div>

            <div>
              Primer apellido - Lehen deitura
              <input type="text"> 
            </div>
            <div>
              Segundo apellido - Bigarren deitura
              <input type="text"> 
            </div>
          </div>

          <!--Tercera fila-->

          <div class="datos-conyuge-container segunda-fila">
            <div>
              Dirección - Helbidea
              <input type="text"> 
            </div>
            <div>
              Dirección - Helbidea
              <input type="text"> 
            </div>
            <div>
              Nº- Zk.
              <input type="text"> 
            </div>
            <div>
              Esc - Esk
              <input type="text"> 
            </div>
            <div>
              Piso - Solairua
              <input type="text"> 
            </div>
          </div>
            
          <!--Cuarta fila-->
            
          <div class="datos-conyuge-container tercera-fila"> 
              <div>
              CP - PK
              <input type="text"> 
            </div>
            <div>
              Localidad - Herria
              <input type="text"> 
            </div>
            <div>
              Municipio - Udalerria
              <input type="text"> 
            </div>
            <div>
              Provincia - Probintzia
              <input type="text"> 
            </div>
            <div>
              País - Herrialdea
              <input type="text"> 
            </div>
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
  name: 'Solicitud de Asistencia Jurídica Gratuita',
  props: {
    // SOLICITANTE
    tipo_persona: Boolean,
    n_identificacion: Number,
    tipo_identificacion: Boolean, 
    name: String,
    nombre: String,
    primer_apellido: String,
    segundo_apellido: String,
    direccion: String,
    num_direccion: String,
    escalera: String,
    piso: String,
    CP: Number,
    localidad: String,
    municipio: String,
    provincia: String,
    pais: String,
    fecha_nacimiento: Date,
    profesion: String,
    telefono: Number,
    email: String,

    // UNIDAD FAMILIAR
    tipo_persona_conyuge: Boolean,
    n_identificacion_conyuge: Number,
    tipo_identificacion_conyuge: Boolean, 
    nombre_conyuge: String,
    primer_apellido_conyuge: String,
    segundo_apellido_conyuge: String,
    telefono_conyuge: Number,
    domicilio_conyuge: String,
    num_direccion_conyuge: String,
    escalera_conyuge: String,
    piso_conyuge: String,
    CP_conyuge: Number,
    municipio_conyuge: String,
    provincia_conyuge: String,
    pais_conyuge: String,
    profesion_conyuge: String,

    // HIJOS
    nombre_1: String,
    primer_apellido_1: String,
    segundo_apellido_1: String,
    fecha_nacimiento_1: Date,

    nombre_2: String,
    primer_apellido_2: String,
    segundo_apellido_2: String,
    fecha_nacimiento_2: Date,

    nombre_3: String,
    primer_apellido_3: String,
    segundo_apellido_3: String,
    fecha_nacimiento_3: Date,
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
        filename: `formulario_asistencia_jurídica_${timestamp}`,

        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      };
      console.log(element);

      html2pdf(element, opt);
      FormularioServices.enviarFormulario(opt.filename);
      console.log('Se ha enviado el pdf');
    },
  },
});
</script>

<style scoped lang="scss" >

#container{
  margin-left: 15rem;
  margin-right: 15rem;
}

#titulo{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.seccion{
  padding: 1em;
}

.container-solicitante{
  display: flex;
  justify-content: space-evenly;
  column-gap: 15em;

}

.tipo-persona{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;

  & input{
    padding: 0.4rem;
  }
  
}

.identificacion{
  display: flex;
  flex-direction: column;

}

.datos-solicitante-container{
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;

  & .primera-fila{
    display: flex;
    flex-direction: row;
    align-items: stretch;
   
    & div{
      border: 1px solid black;
      border-width: 1px 1px 0px 1px;
    } 
  }
  & .segunda-fila{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    
    & div{
      border: 0.5px solid black;
      border-width: 1px 0px 1px 1px;
    }
  }
  & .tercera-fila{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    
    & div{
      border: 0.5px solid black;
      border-width: 1px 0px 1px 1px;
    }
  }
  & .cuarta-fila{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    
    & div{
      border: 1px solid black;
      border-width: 0px 1px 1px 1px;
      // border-top: 0.5px solid black;
    } 
  }
}

.datos-conyuge-container{
  display: grid;
  grid-auto-rows: 1fr;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;

  & .primera-fila{
    display: flex;
    flex-direction: row;
    align-items: stretch;
   
    & div{
      border: 1px solid black;
      border-width: 1px 1px 0px 1px;
    } 
  }
  & .segunda-fila{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    
    & div{
      border: 0.5px solid black;
      border-width: 1px 0px 1px 1px;
    }
  }
  & .tercera-fila{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    
    & div{
      border: 0.5px solid black;
      border-width: 1px 0px 1px 1px;
    }
  }
  & .cuarta-fila{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    
    & div{
      border: 1px solid black;
      border-width: 0px 1px 1px 1px;
      // border-top: 0.5px solid black;
    } 
  }
}


</style>
