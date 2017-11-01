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
var mint_ui_1 = require("mint-ui");
var vue_class_component_1 = require("vue-class-component");
vue_1.default.component(mint_ui_1.Swipe.name, mint_ui_1.Swipe);
vue_1.default.component(mint_ui_1.SwipeItem.name, mint_ui_1.SwipeItem);
var HomeSwiperPic = /** @class */ (function (_super) {
    __extends(HomeSwiperPic, _super);
    function HomeSwiperPic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** 异步获取数据 */
    HomeSwiperPic.prototype.asyncData = function (_a) {
        var store = _a.store, route = _a.route;
        console.log('>>>>>>');
        return store.dispatch('getSwiperPic');
    };
    Object.defineProperty(HomeSwiperPic.prototype, "swiperPic", {
        get: function () {
            return this.$store.state.OtherModule.swiperPic;
        },
        enumerable: true,
        configurable: true
    });
    HomeSwiperPic = __decorate([
        vue_class_component_1.default({
            components: {
                Swipe: mint_ui_1.Swipe,
                SwipeItem: mint_ui_1.SwipeItem
            }
        })
    ], HomeSwiperPic);
    return HomeSwiperPic;
}(vue_1.default));
exports.default = HomeSwiperPic;
