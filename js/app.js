App = Ember.Application.create();

App.Router.map(function() {
  this.resource('links', function() {
    this.resource('link', { path: ':link_id' });
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('links');
  }
});

App.LinksRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('link');
  }
});

App.LinksController = Ember.ArrayController.extend({
  sortProperties: ['timestamp'],
  sortAscending: true
});

App.LinkRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('link', params.link_id);
  }
});

App.Link = DS.Model.extend({
  title: DS.attr('string'),
  _id: DS.attr('string'),
  url: DS.attr('string'),
  user: DS.attr('string'),
  timestamp: DS.attr('string')
});

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:4567'
});

App.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: "_id"
});

Ember.Handlebars.registerBoundHelper('format-date', function(date) {
  return moment(date).fromNow();
});
