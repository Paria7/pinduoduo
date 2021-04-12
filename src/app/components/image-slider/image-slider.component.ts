import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

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
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef;
  @ViewChildren('img') imgs: QueryList<ElementRef>;
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;
  intervalId;
  constructor(private render: Renderer2) { }

  ngOnInit() {
    console.log('ngOnInit', this.imgSlider);

  }

  ngAfterViewInit(): void {
    let i = 0;
    this.intervalId = setInterval(() => {
      this.render.setProperty(
        this.imgSlider.nativeElement, 'scrollLeft', (this.getIndex(++this.selectedIndex) * this.imgSlider.nativeElement.scrollWidth / this.sliders.length)
      )
    }, this.intervalBySeconds * 1000);
  }

  getIndex(idx: number): number {
    return idx >= 0 ? idx % this.sliders.length : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  handleScroll(e) {
    const ratio = (e.target.scrollLeft * this.sliders.length) / e.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
