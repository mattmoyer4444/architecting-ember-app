import Ember from 'ember';

export default Ember.ArrayController.extend({

  sortProperties: ['creationDate'],
  sortAscending: false // false for descending

});
