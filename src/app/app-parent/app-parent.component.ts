import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-app-parent',
  templateUrl: './app-parent.component.html',
  styleUrls: ['./app-parent.component.scss']
})
export class AppParentComponent implements OnInit {
@ViewChild(ProductComponent) Child? :ProductComponent;
  constructor() { }
message:string="Hello child from parent";
Products=["shampoo","LeaveIn","Therum","Hair Oil"]
msgfromChild:string="$event"
  ngOnInit(): void {

  }
ngAfterViewInit(){
  this.Child?.whoAmI();

}
}
