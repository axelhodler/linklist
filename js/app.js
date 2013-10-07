App = Ember.Application.create();

App.Router.map(function() {
  this.resource('urls', function() {
    this.resource('url', { path: ':url_id' });
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('urls');
  }
});

App.UrlsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('url');
  }
});

App.UrlRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('url', params.url_id);
  }
});

App.Url = DS.Model.extend({
   title: DS.attr('string'),
   _id: DS.attr('string'),
   url: DS.attr('string'),
   user: DS.attr('string')
});

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:4567'
});

App.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: "_id"
});

var urls = App.Url.find();
