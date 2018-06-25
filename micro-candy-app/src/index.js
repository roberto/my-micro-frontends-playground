import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class CandyStore extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

window.customElements.define('candy-store', CandyStore);
