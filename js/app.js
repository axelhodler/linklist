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
    return links;
  }
});

App.LinkRoute = Ember.Route.extend({
  model: function(params) {
    return links.findBy('id', params.link_id);
  }
});

var links = [{
  id: '1',
  url: 'http://www.foo.com',
  title: 'foo'
  }, {
  id: '2',
  url: 'http://www.bar.com',
  title: 'bar'
}];
