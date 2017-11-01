
type curState = States['OtherModule'];
type mutation< P extends keyof Mutation.OtherModule > =
  ( state: curState, payload: Mutation.OtherModule[ P ]) => void;

 /** 设置轮播图 */
const setSwiperPic: mutation<'setSwiperPic'> = ( state, { pics }) => {
  state.swiperPic = pics;
};

export const mutations = Object.assign({ }, {
  setSwiperPic
});