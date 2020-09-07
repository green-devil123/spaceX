import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-loader',
  templateUrl: './card-loader.component.html',
  styleUrls: ['./card-loader.component.css']
})
export class CardLoaderComponent implements OnInit {

  @Input() Cwidth;
  @Input() Cheight;
  @Input() circle: boolean;
  @Input() margin;

  constructor() { }

  ngOnInit() {
  }

  getMyStyles() {
    const myStyles = {
        'width.px': this.Cwidth ? this.Cwidth : '',
        'height.px': this.Cheight ? this.Cheight : '',
        'border-radius': this.circle ? '50%' : '',
        'margin.px': this.margin ? this.margin : '',
    };
    return myStyles;
}

}
