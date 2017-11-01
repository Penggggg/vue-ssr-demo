"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
exports.default = function (context) { return new Promise(function (resolve, reject) {
    var _a = index_1.createApp(), app = _a.app, router = _a.router, store = _a.store;
    router.push(context.url);
    router.onReady(function () {
        /** 获取component */
        var matchedComponents = router.getMatchedComponents();
        if (!matchedComponents.length) {
            return reject({ code: 404 });
        }
        /** 调用asyncData */
        Promise.all(matchedComponents.map(function (pageComponent) {
            /** 该页面下及其所有子组件的promise-list */
            var promiseList = [];
            /** 页面的asyncData.promise */
            var pageAsyncData = pageComponent.options.methods ? pageComponent.options.methods.asyncData : null;
            if (pageAsyncData) {
                promiseList.push(pageAsyncData({
                    store: store,
                    route: router.currentRoute
                }));
            }
            /** 页面的子组件的asyncData.promise */
            var childComponents = Object.keys(pageComponent.options.components);
            childComponents.map(function (childComponentName) {
                var childComponent = pageComponent.options.components[childComponentName];
                var childAsyncData = childComponent.options.methods ? childComponent.options.methods.asyncData : null;
                if (childAsyncData) {
                    promiseList.push(childAsyncData({
                        store: store,
                        route: router.currentRoute
                    }));
                }
            });
            return Promise.all(promiseList);
        })).then(function () {
            context.state = store.state;
            resolve(app);
        }).catch(reject);
    }, reject);
}); };
