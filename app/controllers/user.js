import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: 'post',
  sortProperties: ['creationDate'],
  sortAscending: false // false for descending



});
