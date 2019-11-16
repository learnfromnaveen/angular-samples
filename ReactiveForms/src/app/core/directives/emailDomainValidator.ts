import { FormControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function emailDomainValidator(expression: RegExp): ValidatorFn{
    return (control:FormControl):ValidationErrors|null =>{
        const isValid = expression.test(control.value);
        return isValid ? { 'email': { value: control.value }} : null;
    }
}