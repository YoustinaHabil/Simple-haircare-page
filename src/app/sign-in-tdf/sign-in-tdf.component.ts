import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ForbiddenNameValidator, ForbiddenNameValidators } from '../CustomValidations/Notes.validation';
import { ConfirmPassswordValidator } from '../CustomValidations/ConfirmPasswordValidation';

@Component({
  selector: 'app-sign-in-tdf',
  templateUrl: './sign-in-tdf.component.html',
  styleUrls: ['./sign-in-tdf.component.scss']
})
export class SignInTdfComponent implements OnInit {
  constructor(private fb:FormBuilder) { }
  RegisterationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator,ForbiddenNameValidators]],
    Password:['',Validators.required],
    confirmpasssword:[''],
    Email:['',Validators.required],
alternativeEmails:this.fb.array(['']),
    Discount:[''],
    subscribe:[false],
   
  },{Validator:[ConfirmPassswordValidator]});
  get userName(){
    return this.RegisterationForm.get('userName')
  }
  get Password(){
    return this.RegisterationForm.get('Password')
  }
  get confirmpasssword(){
    return this.RegisterationForm.get('confirmpasssword')
  }
  get Email(){
    return this.RegisterationForm.get('Email')
  }
  
  get alternativeEmails(){
    return this.RegisterationForm.get('alternativeEmails') as FormArray;
  }
  addAlternativeEmail(){
    this.alternativeEmails.push(this.fb.control(''))
  }
  get Discount(){
    return this.RegisterationForm.get('Discount')
  }
  setDiscountValidation(){
    this.RegisterationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>{
      if(checkedValue){
        this.Discount?.setValidators(Validators.required);
      }else{
        this.Discount?.clearValidators();
      }
      this.Discount?.updateValueAndValidity();
    })
  }
  ngOnInit(): void {
  }

}
