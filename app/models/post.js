import DS from 'ember-data';

var attr = DS.attr;
var belongsTo = DS.belongsTo;

export default DS.Model.extend({
  body: attr('string'),
  author: belongsTo('user', {async: true}),
  creationDate: attr('date')
});
