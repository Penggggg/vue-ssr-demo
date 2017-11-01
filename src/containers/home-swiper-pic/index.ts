import Vue from 'vue';
import * as Vuex from 'vuex';
import Router from 'vue-router';
import { Swipe, SwipeItem } from 'mint-ui';
import Component from 'vue-class-component';

Vue.component( Swipe.name, Swipe );
Vue.component( SwipeItem.name, SwipeItem );

@Component({
  components: {
    Swipe,
    SwipeItem
  }
})
export default class HomeSwiperPic extends Vue implements AsyncDataComponent {

  /** 异步获取数据 */
  asyncData({ store, route }: asyncDataArg ) {
    console.log('>>>>>>');
    return store.dispatch('getSwiperPic');
  }

  get swiperPic( ) {
    return this.$store.state.OtherModule.swiperPic;
  }

}

type asyncDataArg = {
  route: Router
  store: Vuex.Store< States >
};