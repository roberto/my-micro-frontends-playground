import { Component, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'my-container',
  styleUrl: 'my-container.css',
  shadow: false
})
export class MyContainer {

  @Prop() initialapp: string;
  @State() widgets: [
    {
      text: string,
      image: string,
      action: string,
      app: {
        url: string,
        component: string
      }
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
    return fetch('http://localhost:7002/widgets')
      .then(response => response.json())
      .then(data => {
        this.widgets = data.widgets;
      });
  }

  render() {
    if (this.widgets) {
      const initialWidget = this.findInitialWidget();

      if (initialWidget) {
        return this.renderApp(initialWidget.app);
      }

      return this.renderWidgets();
    }

    return this.renderLoading();
  }

  findInitialWidget() {
    return this.widgets.find(
      (widget) => widget.app.component === this.initialapp
    );
  }

	renderWidgets() {
    return ([
      <div class="columns">
        {this.widgets.map(
          (widget) =>
            <div class="column">
              <my-widget {...widget}></my-widget>
            </div>
        )}
      </div>,
      <my-modal app={this.activeApp}></my-modal>
    ])
  }

  renderApp(app) {
    return <my-app app={app}></my-app>;
  }

  renderLoading() {
    return <h2>Loading!</h2>;
  }
}
