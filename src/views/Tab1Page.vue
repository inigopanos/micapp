<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Formulario Asistencia al Detenido</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <AsistenciaDetenido name="Formulario Atención al Detenido" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import AsistenciaDetenido from "@/components/FormularioAsistenciaAlDetenido.vue";

export default defineComponent({
  name: "Tab1Page",
  components: {
    AsistenciaDetenido,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
});
</script>
