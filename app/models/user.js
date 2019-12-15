import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default Model.extend({
  username: attr('string'),
  password: attr('string'),
  pictures: hasMany(),
  albums: hasMany()
});
