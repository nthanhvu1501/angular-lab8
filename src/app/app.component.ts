import { Component } from '@angular/core';
import { IProduct } from './entities/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  product : any;

  student = {
    hoten:'Nguyen Van A',
    hinhanh:"fpoly.png",
    gioitinh:'Nam'
  }

  products: IProduct[]=[
    {
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2016",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  ]
    
}