import './styles/application.css';
import App from 'components/App';

class BookSeats extends HTMLElement {
  constructor() {
    super();
    this.app = new App();
  }

  connectedCallback() {
    this.app.start();
  }
}

window.customElements.define('book-seats', BookSeats);
