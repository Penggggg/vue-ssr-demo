"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var Vuex = require("vuex");
var testModule_1 = require("./testModule");
var otherModule_1 = require("./otherModule");
vue_1.default.use(Vuex);
exports.createStore = function () {
    return new Vuex.Store({
        modules: {
            TestModule: testModule_1.TestModule,
            OtherModule: otherModule_1.OtherModule
        }
    });
};
