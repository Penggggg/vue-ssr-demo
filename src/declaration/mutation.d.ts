
/** 全局 Mutation */
declare namespace Mutation {

  /** 杂项数据模块 */
  export interface OtherModule {
    
    /** 设置轮播图 */
    setSwiperPic: {
      pics: App.SwiperPic[ ]
    }
  }

  /** 测试模块 */
  export interface TestModule {

    setCount: number

    addCount: number
    
  }
}

/** 全局 - action mutation */
declare type mutationsPayload = Mutation.OtherModule & Mutation.TestModule