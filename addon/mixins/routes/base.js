// Generated by CoffeeScript 1.8.0
import Ember from 'ember';
import PaginationMixin from 'emberadmin/mixins/routes/pagination';
import ModelMixin from 'emberadmin/mixins/routes/model';
import ControllerMixin from 'emberadmin/mixins/routes/controller';
import RenderMixin from 'emberadmin/mixins/routes/render';
import SetupControllerMixin from 'emberadmin/mixins/routes/setup-controller';
import ModalMixin from 'emberadmin/mixins/routes/modal';
var mainRouteMixin;

mainRouteMixin = Ember.Mixin.create();

mainRouteMixin.reopen(PaginationMixin, ModelMixin, ControllerMixin, SetupControllerMixin, RenderMixin, ModalMixin);

export default mainRouteMixin;
