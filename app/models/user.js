import DS from 'ember-data';

var attr = DS.attr;
var hasMany = DS.hasMany;

var User = DS.Model.extend({
  name: attr('string'),
  email: attr('string'),
  avatar: attr('string'),
  followers: hasMany('user', {async: true, inverse: 'following'}),
  following: hasMany('user', {async: true, inverse: 'followers'}),
  posts: hasMany('post', {async: true})
});

User.reopenClass({FIXTURES: [
  {
    id: '007',
    name: 'James Bond',
    email: 'james@bond.com'
  },
  {
    id: '008',
    name: 'Liam Neeson',
    email: 'liam@neeson.com'
  }
]});

export default User;
