import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
Buy:boolean=true;
visible:boolean=false

onclick(){
  this.Buy= !this.Buy;
  this.visible= !this.visible
}
  constructor() { }
  ClientName:string="";

  ngOnInit(): void {
  }
 HideShow(){
  
  console.log("welcome")
 }
}
