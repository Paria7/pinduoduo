import { Component, ElementRef, ViewChild } from '@angular/core';
import { ImageSlider, ImageSliderComponent, TopBars } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('ImageSliderComponent', { static: true }) imageSlider: ImageSliderComponent;

  title = 'pinduoduo';
  username = '';
  scrollabelTabBackgroundColor = 'red';

  topBars: TopBars[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '女装',
      link: ''
    },
    {
      title: '鞋包',
      link: ''
    },
    {
      title: '家装',
      link: ''
    },
    {
      title: '汽车',
      link: ''
    },
    {
      title: '美食',
      link: ''
    },
    {
      title: '儿童',
      link: ''
    },
    {
      title: '母婴',
      link: ''
    }
  ];

  imageSliders: ImageSlider[] = [
    {
      imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181126%2F44f6fd3cc3904637bb08aefc31d34cd3.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620365418&t=ca9996f24334f9a9e9c1f3ce5c629452',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.hebei.com.cn%2F003%2F019%2F648%2F00301964846_811e5fc1.jpg&refer=http%3A%2F%2Fpic1.hebei.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620365418&t=83ba0531386fcb67260bfc27aab2ba05',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.haiwainet.cn%2F2019%2F0314%2F20190314085158993.jpg&refer=http%3A%2F%2Fimages.haiwainet.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620365100&t=667faa481ff32e1f4bddd55ffdc7b071',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgnews.gmw.cn%2Fattachement%2Fjpg%2Fsite2%2F20190323%2Ff44d305ea08b1dffbc2219.jpg&refer=http%3A%2F%2Fimgnews.gmw.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620365117&t=1a23ecf7d64016d790cafebb6b76f317',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.tmtpost.com%2Fuploads%2Fimages%2F2018%2F03%2F20180324120352339.jpg&refer=http%3A%2F%2Fimages.tmtpost.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620365131&t=952c988b2df92c10f0a44b24d05412a5',
      link: '',
      caption: ''
    }
  ];


  handleTabSelected(tabMenu: TopBars) {
    const colors = ['red', 'black', 'orange', 'blue'];
    const idx = Math.floor(Math.random() * 4);
    this.scrollabelTabBackgroundColor = colors[idx];
    console.log(tabMenu);
  }
}




