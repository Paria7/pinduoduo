import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {

  public topBars = ['热门', '女装', '男装', '鞋包', '家装', '汽车', '美食', '儿童', '母婴'];
  constructor() { }

  ngOnInit() {
  }

}
