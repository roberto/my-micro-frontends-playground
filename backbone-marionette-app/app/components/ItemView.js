import Marionette from 'backbone.marionette';

export default Marionette.View.extend({
  template: () => 
    `<div id="content">
    	<h1>Webpack</h1>
    	<h2>Welcome!</h2>
    	<ul>
    		<li><a href="https://webpack.github.io/">Webpack homepage</a></li>
    		<li><a href="http://marionettejs.com/">Marionette.js homepage</a></li>
    	</ul>
    </div>
    `
});
