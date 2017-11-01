import Vue from 'vue';
import * as Vuex from 'vuex';
import { TestModule } from './testModule';
import { OtherModule } from './otherModule';

Vue.use( Vuex );

export const createStore = ( ) => {
  return new Vuex.Store< States >({
    modules: {
      TestModule,
      OtherModule
    }
  });
};