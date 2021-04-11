import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit {

  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef;
  @ViewChildren('img') imgs: QueryList<ElementRef>;
  @Input() sliders: ImageSlider[] = [];
  constructor(private render: Renderer2) { }

  ngOnInit() {
    console.log('ngOnInit', this.imgSlider);

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('imgs selector', this.imgs);
    this.imgs.forEach(item => {
      this.render.setStyle(item.nativeElement, 'height', '100px');
    })
  }

}
