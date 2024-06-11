import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating: number
  starWidth: number
  @Output() ratingClicked: EventEmitter<String> = new EventEmitter<String>();
  constructor() {
    this.rating = 0;
    this.starWidth = this.rating * 90 / 5;
  }
  ngOnChanges(){

  }
  ngOnInit() {
    this.starWidth = this.rating * 90 / 5
  }

  onClick() {
    this.ratingClicked.emit(`Đánh giá của sản phẩm là ${this.rating} sao!`);
  }
}
