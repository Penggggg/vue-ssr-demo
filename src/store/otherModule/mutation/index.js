"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 设置轮播图 */
var setSwiperPic = function (state, _a) {
    var pics = _a.pics;
    state.swiperPic = pics;
};
exports.mutations = Object.assign({}, {
    setSwiperPic: setSwiperPic
});
