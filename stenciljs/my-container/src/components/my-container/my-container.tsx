import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-container',
  styleUrl: 'my-container.css',
  shadow: true
})
export class MyContainer {

  @Prop() language: string;

  render() {
    return (
      <div>
        <my-widget
          text="Mejor viaje ever!"
          image="https://placeimg.com/400/200/people/grayscale"
          action="Dale">
        </my-widget>
      </div>
    );
  }
}
