
/** Webpack import */
declare var System: {
  import: ( filename: string ) => Promise< any >
}

/** Window 拓展 */
declare interface Window {
  __INITIAL_STATE__: any
}

/** Vue 组件异步数据获取 */
declare interface AsyncDataComponent {
  asyncData: ( arg: any ) => any
}

/** 应用类型 */
declare namespace App {

  /** 轮播图 */
  export interface SwiperPic {
    /** 图片地址 */
    src: string
    /** 点击地址 */
    url: string
    /** 描述 - 标题 */
    title: string
    /** 描述 - 文字 */
    text: string
  }

}
