import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', {path: '/login'});
  this.route('calculadora');
  this.route('registrar_persona');
  this.route('listar_personas');
  this.route('home');
});

export default Router;
