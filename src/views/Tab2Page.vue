<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Solicitud de Asistencia Jurídica Gratuita</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <SolicitudAsistenciaJurídicaVue name="SolicitudAsistenciaJurídica" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import SolicitudAsistenciaJurídicaVue from '@/components/SolicitudAsistenciaJurídica.vue';

export default defineComponent({
  name: 'Tab2Page',
  components: { 
    ExploreContainer, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonPage, 
    SolicitudAsistenciaJurídicaVue }
});
</script>
