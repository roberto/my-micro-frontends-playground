class MyContainer extends HTMLElement {

  constructor() {
    super();
    this.loadData();
  }

  loadData() {
    fetch('http://localhost:7002/widgets')
      .then(response => response.json())
      .then(data => {
        this.widgets = data.widgets;
        this.render();
      });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.widgets) {
      this.innerHTML = `<p>${this.widgets}</p>`;
    } else {
      this.innerHTML = `<p>Loading...</p>`;
    }
  }
}

window.customElements.define('my-container', MyContainer);
