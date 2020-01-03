import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default Model.extend({
  username: attr('string'),
  email: attr('string'),
  password: attr('string'),
  passwordConfirmation: attr('string'),
  pictures: hasMany(),
  albums: hasMany()
});
