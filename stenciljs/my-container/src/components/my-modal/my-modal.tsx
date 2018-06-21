import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.css',
  shadow: true
})
export class MyModal {

  @Prop() appUrl: string;
  @Event() closeApp: EventEmitter;

  classes() {
    return `my-modal ${this.appUrl ? 'active' : ''}`;
  }

  render() {
    return (
      <div class={this.classes()}>
        Dale! {this.appUrl}
        <button onClick={() => this.closeApp.emit()}>[Close X]</button>
      </div>
    );
  }
}
