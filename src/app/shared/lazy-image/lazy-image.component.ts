import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: 'lazy-image.component.html'
})

export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;
  @Input()
  public alt!: string;

  public hasLoaded: boolean = false;

  constructor() { }

  ngOnInit() { 
    if (!this.url) throw new Error("url propety is required");
  }

  onLoad() {
    /**delay timeout */
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }
}