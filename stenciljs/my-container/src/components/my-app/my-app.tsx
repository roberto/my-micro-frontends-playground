import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css',
  shadow: false
})
export class MyApp {

  @Prop() app: {
    url: string,
    component: string
  };

  componentWillLoad() {
    import(this.app.url);
  }

  render() {
    return h(this.app.component);
  }
}
