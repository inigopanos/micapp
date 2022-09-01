import Vue from 'vue';

interface Html2pdf {
  name: string;
  specs: string[];
  replace: boolean;
  styles: string[];
}

declare module 'vue/types/vue' {
  interface Vue {
    $html2pdf: (
      el: Element,
      localOptions?: Partial<Html2pdf>,
      cb?: () => boolean,
    ) => void;
  }
}

export {};
