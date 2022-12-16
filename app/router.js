import EmberRouter from '@ember/routing/router';
import config from 'tcrpdb/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.baseURL;
}

Router.map(function () {
  this.route('admin');
  this.route('account');
  this.route('not-found', { path: '/*path' });
});
