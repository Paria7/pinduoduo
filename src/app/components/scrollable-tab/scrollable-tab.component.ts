import { AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { AfterContentChecked } from '@angular/core';
import { AfterContentInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
export interface TopBars {
  title: string;
  link: string;
};

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})

export class ScrollableTabComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  selectedIndex = -1;
  constructor() {
    console.log('组件构造调用');
  }

  @Input() menus: TopBars[] = [];
  @Input() backgroundColor = '#fff';
  @Input() menuActiveColor = 'black';
  @Input() menuColor = 'white';
  @Output() tabSelected = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('组件输入属性改变', changes);

  }

  ngOnInit() {
    console.log('组件初始化调用');
  }

  ngDoCheck(): void {

    console.log('组件脏值检测');
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('组件内容初始化');
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('组件内容脏值检测');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('组件视图初始化');
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('组件视图的脏值检测');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('组件销毁');
  }

  hanleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }

}
