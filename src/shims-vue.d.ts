/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module 'vue-html2pdf' {
  import html2pdf from 'html2pdf.js';
}
