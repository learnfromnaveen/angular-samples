import { FormGroup,FormControl, Validators } from '@angular/forms';

export class ProfileFormGroup { 
    profileFormGroup: FormGroup;
    
    constructor(){ 
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
        this.profileFormGroup = new FormGroup({
            firstName: new FormControl('', Validators.required),  
            lastName: new FormControl(''), 
            address: new FormGroup(
                { 
                    street: new FormControl(''),  
                    city: new FormControl(''),  
                    state: new FormControl(''),  
                    zip: new FormControl('')
                }
            )
          });
    }
    
}