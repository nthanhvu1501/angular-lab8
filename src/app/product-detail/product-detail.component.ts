import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("Query param: ", this.route.snapshot.queryParams);
    console.log("Query fragment: ", this.route.snapshot.fragment);
    console.log("param id: " + this.route.snapshot.params['id']);
    //
  }

}
