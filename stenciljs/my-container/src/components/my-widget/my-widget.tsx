import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-widget',
  styleUrl: 'my-widget.css',
  shadow: false
})
export class MyWidget {

  @Prop() text: string;
  @Prop() image: string;
  @Prop() action: string;
  @Prop() app: object;
  @Event() openApp: EventEmitter;

  render() {
    return (
      <div class="card is-horizontal">
        <div class="card-image">
          <figure class="image">
            <img src={this.image} width="240px" height="160px"/>
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <p>
            {this.text}
            </p>
            <a class="button" onClick={() => this.openApp.emit(this.app)}>
              {this.action}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
