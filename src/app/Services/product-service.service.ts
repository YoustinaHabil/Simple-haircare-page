import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  GetAllProducts(){
    return[
      {"id":1,"Productname":"Cantue","image":'assets/Images/istockphoto-1018901204-612x612.jpg',"price":300},
      {"id":2,"Productname":"PinkyMilky","image":'assets/Images/istockphoto-1251300589-612x612.jpg'},
      {"id":3,"Productname":"Bless","image":'assets/Images/istockphoto-1254744699-612x612.jpg'},
      {"id":4,"Productname":"Vital Care","image":'assets/Images/istockphoto-1254744699-612x612.jpg'},
      {"id":5,"Productname":"Loryal Elvive","image":'assets/Images/istockphoto-1254744699-612x612.jpg'},
      {"id":6,"Productname":"Bendolin","image":'assets/Images/istockphoto-1254744699-612x612.jpg'}



      
    ]
  }
  GetProductsByID(){
    return[
    {"id":1,"Productname":"Cantue","image":'assets/Images/istockphoto-1254744699-612x612.jpg'},
  
    ]
  }
}
