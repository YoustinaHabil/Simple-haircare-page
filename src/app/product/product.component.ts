import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiscountOffers } from '../Interfaces/discount-offers';
import { ICategory } from '../Interfaces/icategory';
import { IProduct } from '../Interfaces/iproduct';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input () parentData:any;
@Input () Products:any;
@Output() childEvent=new EventEmitter();
  Discount:DiscountOffers=DiscountOffers.NoDiscount
  StoreName:String="CurlySpot"
  storeName:string="Just Because We Love CURLS"
  StoreLogo:string="assets/Images/istockphoto-1254744699-612x612.jpg";
  ProductList:IProduct={
    ID:39,
    Name:"Leavin",
    Quantity:2,
    price:300,
    Img:"assets/Images/istockphoto-1018901204-612x612.jpg"
  };
  CategoryList:ICategory={
    Id:42,
    name:"shampoo", 
  }
   constructor()
   {
    
   }
    DisplayNoDiscount:boolean=false;
  ngOnInit(): void {
  }
  sendDataToParent(){
    this.childEvent.emit("The question then becomes: Why is curly hair so attractive ?In my opinion,curly hair is attractive because it is spontaneous and unpredictable. There is something beautiful about it's independence Your curls will not conform to societal pressure and they will not acquiesce to any attempts to tame them ")
     
  }
  whoAmI(){
    console.log("Hello Iam child");
  }
}
