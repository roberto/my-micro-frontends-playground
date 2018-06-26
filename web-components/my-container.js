// reference:
// https://medium.com/dev-channel/the-case-for-custom-elements-part-1-65d807b4b439

class MyContainer extends HTMLElement {
  // This gets called when the HTML parser sees your tag
  constructor() {
    super(); // always call super() first in the constructor.
    this.msg = 'Hello, World!';
  }
  // Called when your element is inserted in the DOM or
  // immediately after the constructor if it’s already in the DOM
  connectedCallback() {
    this.innerHTML = `<p>${this.msg}</p>`;
  }
}
// This registers your new tag and associates it with your class
window.customElements.define('my-container', MyContainer);
