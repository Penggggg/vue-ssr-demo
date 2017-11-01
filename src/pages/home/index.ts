import Vue from 'vue';
import * as Vuex from 'vuex';
import Router from 'vue-router';
import { Swipe, SwipeItem } from 'mint-ui';
import Component from 'vue-class-component';
import HomeSwiperPic from '../../containers/home-swiper-pic/index.vue';

@Component({
  components: {
    HomeSwiperPic
  }
})
export default class Home extends Vue {

  private iconEntry = [
    {
      description: '来访',
      iconType: '#icon-041',
      url: 'http://www.baidu.com'
    }, {
      description: '中餐',
      iconType: '#icon-02',
      url: 'http://www.baidu.com'
    }, {
      description: '西餐',
      iconType: '#icon-22',
      url: 'http://www.baidu.com'
    }, {
      description: '展厅',
      iconType: '#icon-keji',
      url: 'http://www.baidu.com'
    }, {
      description: '会议室',
      iconType: '#icon-dingwei',
      url: 'http://www.baidu.com'
    }
  ];

}

type asyncDataArg = {
  route: Router
  store: Vuex.Store< States >
};