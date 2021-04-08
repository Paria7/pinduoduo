import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

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
export class ImageSliderComponent implements OnInit {

  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef;
  @Input() sliders: ImageSlider[] = [];
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit', this.imgSlider);
  }

}
