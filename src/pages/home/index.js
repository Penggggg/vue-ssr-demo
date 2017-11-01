"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_class_component_1 = require("vue-class-component");
var index_vue_1 = require("../../containers/home-swiper-pic/index.vue");
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconEntry = [
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
        return _this;
    }
    Home = __decorate([
        vue_class_component_1.default({
            components: {
                HomeSwiperPic: index_vue_1.default
            }
        })
    ], Home);
    return Home;
}(vue_1.default));
exports.default = Home;
