import 'reflect-metadata';
import * as Koa from 'koa';
import { injectable } from 'inversify';
import { Controller, JsonController, Get } from 'routing-controllers';

@Controller('/api/other')
@injectable( )
export class OtherCtrl {

  @Get('/swiper-pic')
  async swiperPic( ) {
    return [
      {
        src: 'http://file.mumayi.com/album/201112/30/191301hhukpffkiye6akru.jpg',
        url: 'http://www.baidu.com'
      },
      {
        src: 'http://img1.imgtn.bdimg.com/it/u=4215245176,2544057835&fm=27&gp=0.jpg',
        url: 'http://www.baidu.com'
      },
      {
        src: 'http://a.ikafan.com/attachment/forum/201307/14/093851iyafd96afanc2ey2.jpg',
        url: 'http://www.baidu.com'
      },
      {
        src: 'http://pic1.win4000.com/wallpaper/c/58c11baa3ca7b.jpg',
        url: 'http://www.baidu.com'
      }
    ];
  }

}