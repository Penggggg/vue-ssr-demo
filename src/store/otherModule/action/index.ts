import * as Vuex from 'vuex';
import * as request from 'superagent';

type vxCtx = Vuex.ActionContext< States['OtherModule'], States >;
type action< P extends keyof Action.OtherModule > =
  ( ctx: vxCtx, payload: Action.OtherModule[ P ]) => any;

/** 获取轮播图数据 */
const getSwiperPic: action<'getSwiperPic'> = ( ctx, payload ) => {
  return request
          .get('localhost:9090/api/other/swiper-pic')
          .then( data => {
            ctx.commit('setSwiperPic', {
              pics: data.body
            });
          });
};

export const actions = Object.assign({ }, {
  getSwiperPic
});