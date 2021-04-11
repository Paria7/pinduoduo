import { Component, EventEmitter, Input, Output } from '@angular/core';
export interface TopBars {
  title: string;
  link: string;
};

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})

export class ScrollableTabComponent {

  selectedIndex = -1;
  constructor() {
  }

  @Input() menus: TopBars[] = [];
  @Input() backgroundColor = '#fff';
  @Input() menuActiveColor = 'black';
  @Input() menuColor = 'white';
  @Output() tabSelected = new EventEmitter();


  hanleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }

}
