import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
products:any=[];
  constructor(private productservice:ProductServiceService) { }

  ngOnInit(): void {
    this.products=this.productservice.GetProductsByID();

  }

}
