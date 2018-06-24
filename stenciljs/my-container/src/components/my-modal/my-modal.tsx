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
    return `my-modal ${this.app ? 'active' : ''}`;
  }

  renderApp() {
    if (this.app) return <my-app app={this.app}></my-app>
  }

  render() {
    return (
      <div class={this.classes()}>
        <button onClick={() => this.closeApp.emit()}>[Close X]</button>
        {this.renderApp()}
      </div>
    );
  }
}
