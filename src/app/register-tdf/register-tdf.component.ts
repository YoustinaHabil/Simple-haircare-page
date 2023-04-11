import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPassswordValidator } from '../CustomValidations/ConfirmPasswordValidation';
import { ForbiddenNameValidator } from '../CustomValidations/Notes.validation';
import { User } from '../user';

@Component({
  selector: 'app-register-tdf',
  templateUrl: './register-tdf.component.html',
  styleUrls: ['./register-tdf.component.scss']
})
export class RegisterTdfComponent implements OnInit {


  constructor(private fb:FormBuilder) { }
  RegisterationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(5)]],
   Email:['',Validators.required],
   Password:['',Validators.required],
   confirmpasssword:['',Validators.required], 
},{Validator:[ConfirmPassswordValidator]});


  get userName(){
    return this.RegisterationForm.get('userName')
  }
  get Email(){
    return this.RegisterationForm.get('Email')
  }
  get Password(){
    return this.RegisterationForm.get('Password')
  }
  get confirmpasssword(){
    return this.RegisterationForm.get('confirmpasssword')
  }
  ngOnInit():void{
  }
LoadData(){
  this.RegisterationForm.setValue({
    userName:'Youstina',
    Email:'YoustinaHabil@yahoo.com',
    Password:'1234',
    confirmpasssword:'1234'
  })
}    
  }

