import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `simple-element`
 * My Simple Element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class SimpleElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'simple-element',
      },
    };
  }
}

window.customElements.define('simple-element', SimpleElement);
