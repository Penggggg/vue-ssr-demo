"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("superagent");
/** GET: 轮播图 */
exports.apiSwiperPic = request.get('/api/other/swiper-pic');
