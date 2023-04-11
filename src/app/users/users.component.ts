import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Users=[
    {name:'Youssef',UserName:"Youssef_Yasser22",email:"YouusefYasser@yahoo.com"},
    {name:'Ahmed',UserName:"Ahmed_monir34",email:"AhmedMonir@yahoo.com"},
    {name:'Khaled',UserName:"Khaled_yehia76",email:"KhaledYehia@gmail.com"},
    {name:'Mona',UserName:"Mona_Mina34",email:"monaMina@yahoo.com"},
  
  ]
}
