import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'custom-widget',
  styleUrl: 'custom-widget.css',
  shadow: true
})
export class CustomWidget {

  @Prop() text: string;
  @Prop() image: string;
  @Prop() action: string;

  render() {
    return (
      <div>
        <h2>{this.text}</h2>
        <img src={this.image} />
        <button>{this.action}</button>
      </div>
    );
  }
}
