import { Component } from '@angular/core';
import { TopBars } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pinduoduo';

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


  handleTabSelected(tabMenu: TopBars) {
    console.log(tabMenu);
  }
}




