import { AbstractControl, FormControl } from "@angular/forms";


export function ForbiddenNameValidator(control:AbstractControl){
    const forbidden=/admin/.test(control.value);

    return forbidden ? {'forbiddenName':{value:control.value}}:null;

}
export function ForbiddenNameValidators(control:AbstractControl){
    const forbiddens=/adminstrator/.test(control.value);

    return forbiddens ? {'forbiddenName':{value:control.value}}:null;

}

 