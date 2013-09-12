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

var links = [{
  id: '1',
  link: 'http://www.foo.com',
  title: 'foo'
  }, {
  id: '2',
  link: 'http://www.bar.com',
  title: 'bar'
}];
