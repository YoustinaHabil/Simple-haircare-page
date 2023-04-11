import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-product-datails',
  templateUrl: './product-datails.component.html',
  styleUrls: ['./product-datails.component.scss']
})
export class ProductDatailsComponent implements OnInit {
 products:any=[];
  constructor(private productservice:ProductServiceService) { }

  ngOnInit(): void {
    this.products=this.productservice.GetAllProducts();
  }

}
