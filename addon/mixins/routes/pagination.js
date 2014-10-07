// Generated by CoffeeScript 1.8.0
import Ember from 'ember';
var paginationMixin;

paginationMixin = Ember.Mixin.create({
  queryParams: {
    page: {
      refreshModel: true
    },
    perPage: {
      refreshModel: true
    }
  },
  pagination: function(modelName, params) {
    return this.store.find(modelName, params);
  }
});

export default paginationMixin;
