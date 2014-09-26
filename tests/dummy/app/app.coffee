`import Ember from 'ember';`
`import Resolver from 'ember/resolver';`
`import loadInitializers from 'ember/load-initializers';`

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend
  modulePrefix: 'dummy', #TODO: loaded via config
  Resolver: Resolver

loadInitializers(App, 'dummy');

`export default App;`
