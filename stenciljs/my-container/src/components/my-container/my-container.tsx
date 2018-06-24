import { Component, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'my-container',
  styleUrl: 'my-container.css',
  shadow: false
})
export class MyContainer {

  @Prop() language: string;
  @State() widgets: [
    {
      text: string,
      image: string,
      action: string,
      app: object
    }
  ];
  @State() activeApp: {
    url: string,
    component: string
  };

  @Listen('openApp')
  openAppHandler(event: CustomEvent) {
    this.activeApp = event.detail;
  }

  @Listen('closeApp')
  closeAppHandler() {
    this.activeApp = null;
  }

  componentDidLoad() {
    return fetch('http://localhost:8882/widgets')
      .then(response => response.json())
      .then(data => {
        this.widgets = data.widgets;
      });
  }

	buildWidgets() {
		return this.widgets.map(
      (widget) => <my-widget {...widget}></my-widget>
    );
  }

  showLoading() {
    return <h2>Loading!</h2>;
  }

  render() {
    return (
      <div>
        {this.widgets ? this.buildWidgets() : this.showLoading()}
        <my-modal app={this.activeApp}></my-modal>
      </div>
    );
  }
}
