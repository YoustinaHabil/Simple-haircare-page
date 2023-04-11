import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[
    {Id:1,name:'shampoo',Quantity:2,price:400,image:"assets/Images/istockphoto-871323716-612x612.jpg"},
    {Id:2,name:'HairMask',Quantity:1,price:300,image:'assets/Images/istockphoto-1018901204-612x612.jpg'},
    {Id:3,name:'HairOil',Quantity:3,price:600,image:'assets/Images/istockphoto-1251300589-612x612.jpg'},
    {Id:4,name:'Therum',Quantity:1,price:300,image:'assets/Images/istockphoto-1254744699-612x612.jpg'},
  
  ]
}
