import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

const AUTHENTICATOR = 'authenticator:oauth2';

export default Controller.extend({
  store: service(),
  session: service(),
  username: null,
  password: null,
  passwordConfirmation: null,
  email: null,
  actions: {
    createUser(username, email, password, passwordConfirmation) {
      const store = this.get('store');
      const user = store.createRecord('user', { username: username, email: email, password: password, passwordConfirmation: passwordConfirmation });
      let session = this.get('session');
      user.save();
      this.set('username', null);
      this.set('password', null);
      this.set('passwordConfirmation', null);
      this.set('email', null);
      session.authenticate(AUTHENTICATOR, email, password);
    }
  }
});
