/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface MyWidget {
      'action': string;
      'image': string;
      'text': string;
    }
  }

  interface HTMLMyWidgetElement extends StencilComponents.MyWidget, HTMLStencilElement {}

  var HTMLMyWidgetElement: {
    prototype: HTMLMyWidgetElement;
    new (): HTMLMyWidgetElement;
  };
  interface HTMLElementTagNameMap {
    'my-widget': HTMLMyWidgetElement;
  }
  interface ElementTagNameMap {
    'my-widget': HTMLMyWidgetElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-widget': JSXElements.MyWidgetAttributes;
    }
  }
  namespace JSXElements {
    export interface MyWidgetAttributes extends HTMLAttributes {
      'action'?: string;
      'image'?: string;
      'text'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;