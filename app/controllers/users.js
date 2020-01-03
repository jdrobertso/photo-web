import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  name: null,
  number: null,
  actions: {
    destroyUser(id) {
      const store = this.get('store');
      store.findRecord('user', id, { reload: true }).then((user) => {
        user.destroyRecord();
      });
    },
    updateUser(id, name, number) {
      const store = this.get('store');
      store.findRecord('user', id).then((user) => {
        user.set('name', name);
        user.set('number', number);
        user.save();
      });
    },
    createUser(name, number) {
      const store = this.get('store');
      const user = store.createRecord('user', { name: name, number: number });
      user.save();
      this.set('name', null);
      this.set('number', null);
    }
  }
});
