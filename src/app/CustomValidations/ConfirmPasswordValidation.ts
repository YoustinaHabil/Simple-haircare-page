import { AbstractControl } from "@angular/forms";

export function ConfirmPassswordValidator(control:AbstractControl){
    const Password=control.get('Password');
    const confirmpasssword=control.get('confirmpassword');
    if(Password?.pristine||confirmpasssword?.pristine){
        return null;
    }
    
    return Password && confirmpasssword && Password.value!== confirmpasssword.value?
    {'misMatch':true}
    :null;
    
    }