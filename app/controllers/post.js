import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: 'post',
  sortProperties: ['creationDate'],
  sortAscending: false, // false for descending
  filterId: function() {
    var id = req.params.id
    return this.get('id');
  }.property('id')
});
