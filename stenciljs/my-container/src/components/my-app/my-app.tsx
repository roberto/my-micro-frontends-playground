import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css',
  shadow: false
})
export class MyApp {

  @Prop() appUrl: string;

  componentDidLoad() {
    import(`${this.appUrl}?${Math.random()}`);
  }

  render() {
    return (
      <div id="root">
      </div>
    );
  }
}
