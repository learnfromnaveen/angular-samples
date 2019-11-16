import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export class ProfileFormBuilder { 
    
    profileFormGroup: FormGroup;
    constructor(private formBuilder: FormBuilder){ 
        this.initFormGroup();
    }

    getProfileFormGroup(): FormGroup{ 
        return this.profileFormGroup;
    }

    //input for FormGroup instance is a json object  
    //which contains key and value
    //where key is the form control name  
    //value is the FormControl instance 
    initFormGroup(){
        this.profileFormGroup = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: [''],
            address: this.formBuilder.group(
                { 
                    street: [''],  
                    city: [''],  
                    state: [''],  
                    zip: ['']
                }
            )
          });
    }
    
}