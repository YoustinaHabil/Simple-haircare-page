import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
import { user2 } from '../user2';

@Component({
  selector: 'app-login-tdf',
  templateUrl: './login-tdf.component.html',
  styleUrls: ['./login-tdf.component.scss']
})
export class LoginTdfComponent implements OnInit {


  constructor(private fb:FormBuilder) { }
  RegisterationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(5)]],
   Password:['',Validators.required],
 
  })
  get userName(){
    return this.RegisterationForm.get('userName')
  }
  get Password(){
    return this.RegisterationForm.get('Password')
  }
  ngOnInit(): void {
  }

}
