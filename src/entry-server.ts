import { createApp } from './index';
import { createRenderer } from 'vue-server-renderer';

export default context => new Promise(( resolve, reject ) => {

  const { app, router, store } = createApp( );
  router.push( context.url );

  router.onReady(( ) => {

    /** 获取component */
    const matchedComponents = router.getMatchedComponents( );
    if ( !matchedComponents.length ) {
      return reject({ code: 404 });
    }

    /** 调用asyncData */
    Promise.all( matchedComponents.map(( pageComponent: any ) => {

      /** 该页面下及其所有子组件的promise-list */
      const promiseList: Promise<any>[ ] = [ ];

      /** 页面的asyncData.promise */
      const pageAsyncData = pageComponent.options.methods ? pageComponent.options.methods.asyncData : null ;

      if ( pageAsyncData ) {
        promiseList.push(
          pageAsyncData({
            store,
            route: router.currentRoute
          })
        );
      }

      /** 页面的子组件的asyncData.promise */
      const childComponents = Object.keys( pageComponent.options.components );
      childComponents.map( childComponentName  => {

        const childComponent = pageComponent.options.components[ childComponentName ];
        const childAsyncData = childComponent.options.methods ? childComponent.options.methods.asyncData : null ;

        if ( childAsyncData ) {
          promiseList.push(
            childAsyncData({
              store,
              route: router.currentRoute
            })
          );
        }
      });

      return Promise.all( promiseList );

    })).then(( ) => {

      context.state = store.state;
      resolve( app );

    }).catch( reject );

  }, reject );
});