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
  @Event() openApp: EventEmitter;

  render() {
    return (
      <div>
        <h2>{this.text}</h2>
        <img src={this.image} />
        <button onClick={() => this.openApp.emit(`app-url-${this.text}`)}>
          {this.action}
        </button>
      </div>
    );
  }
}
