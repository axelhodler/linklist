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
    return urls;
  }
});

App.UrlRoute = Ember.Route.extend({
  model: function(params) {
    return urls.findBy('id', params.url_id);
  }
});

var urls = [{
  id: '1',
  url: 'http://www.foo.com',
  title: 'foo'
  }, {
  id: '2',
  url: 'http://www.bar.com',
  title: 'bar'
}];
