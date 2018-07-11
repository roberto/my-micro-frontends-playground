import Marionette from 'backbone.marionette';
import ItemView from './ItemView';

export default Marionette.Application.extend({
  region: 'book-seats',

  onStart() {
    this.showView(new ItemView());
  }
});
