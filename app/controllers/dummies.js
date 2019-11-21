import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  name: null,
  number: null,
  actions: {
    destroyDummy(id) {
      const store = this.get('store');
      store.findRecord('dummy', id, { reload: true }).then(dummy => { dummy.destroyRecord(); });
    },
    updateDummy(id, name, number) {
      const store = this.get('store');
      store.findRecord('dummy', id).then(dummy => {
        dummy.set('name', name);
        dummy.set('number', number);
        dummy.save();
      });
    },
    createDummy(name, number) {
      const store = this.get('store');
      const dummy = store.createRecord('dummy', { name: name, number: number });
      dummy.save();
      this.set('name', null);
      this.set('number', null);
    }
  }
});
