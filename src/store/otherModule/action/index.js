"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("superagent");
/** 获取轮播图数据 */
var getSwiperPic = function (ctx, payload) {
    return request
        .get('localhost:9090/api/other/swiper-pic')
        .then(function (data) {
        ctx.commit('setSwiperPic', {
            pics: data.body
        });
    });
};
exports.actions = Object.assign({}, {
    getSwiperPic: getSwiperPic
});
