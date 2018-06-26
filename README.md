# My Micro Frontend Playground

Demo using WebComponents to compose apps.

## Running

* `npm install` - run `npm install` for the root folder and each subproject too.
* `npm start` - run `npm start` for each subproject.

## Port by app

* 7000 - cinema app
* 7002 - bff (stubby)
* 7001 - stenciljs demo
* 7003 - candy store app

## Troubleshooting

* [stencil dev server does not allow CORS](https://github.com/ionic-team/stencil-dev-server/pull/27<Paste>),
try to use a extension like
[CORS Toggle](https://chrome.google.com/webstore/detail/cors-toggle/jioikioepegflmdnbocfhgmpmopmjkim)
* embed react app as web component should not be running in dev mode, issues
with webpack in this scenario.
