import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('user');
  this.route('albums');
  this.route('pictures');
  this.route('signup', { path: '/' });
  this.route('signin');
});

export default Router;
