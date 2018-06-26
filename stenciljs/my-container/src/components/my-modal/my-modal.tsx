import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.css',
  shadow: false
})
export class MyModal {

  @Prop() app: {
    url: string,
    component: string
  };
  @Event() closeApp: EventEmitter;

  classes() {
    return `modal ${this.app ? 'is-active' : ''}`;
  }

  renderApp() {
    if (this.app) return <my-app app={this.app}></my-app>
  }

  render() {
    return (
      <div class={this.classes()}>
        <div class="modal-background" onClick={() => this.closeApp.emit()}></div>
        <div class="modal-content">
          {this.renderApp()}
        </div>
        <button
          class="modal-close is-large"
          aria-label="close"
          onClick={() => this.closeApp.emit()}
        >
        </button>
      </div>
    );
  }
}
