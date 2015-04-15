import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: 'user',
  sortProperties: ['creationDate'],
  sortAscending: false // false for descending
});
