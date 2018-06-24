import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-widget',
  styleUrl: 'my-widget.css',
  shadow: true
})
export class MyWidget {

  @Prop() text: string;
  @Prop() image: string;
  @Prop() action: string;
  @Prop() app: object;
  @Event() openApp: EventEmitter;

  render() {
    return (
      <div class="my-widget">
        <h2>{this.text}</h2>
        <img src={this.image} />
        <button onClick={() => this.openApp.emit(this.app)}>
          {this.action}
        </button>
      </div>
    );
  }
}
