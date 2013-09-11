App = Ember.Application.create();

App.Router.map(function() {
  this.resource('links');
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('links');
  }
});
