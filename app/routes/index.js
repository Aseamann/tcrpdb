import Route from '@ember/routing/route';
import jQuery from 'jquery';
import { hash } from 'rsvp';

export default class IndexRoute extends Route {
  model() {
    return hash({
      pdbactions : jQuery.get('/api/actions', function (response) {
        console.log(response);
        return response;
      }),
      pdblist : jQuery.get('/api/pdbs', function (response) {
        console.log(response);
        return response;
      }),
    });
  }
}
