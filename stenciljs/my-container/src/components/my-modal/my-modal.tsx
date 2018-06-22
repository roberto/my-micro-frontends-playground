import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.css',
  shadow: false
})
export class MyModal {

  @Prop() appUrl: string;
  @Event() closeApp: EventEmitter;

  classes() {
    return `my-modal ${this.appUrl ? 'active' : ''}`;
  }

  renderApp() {
    if (this.appUrl) return <my-app appUrl={this.appUrl}></my-app>
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
