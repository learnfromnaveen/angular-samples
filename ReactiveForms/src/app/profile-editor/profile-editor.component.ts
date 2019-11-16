import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { emailDomainValidator } from '../core/directives/emailDomainValidator';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  profileForm:FormGroup;

  constructor(private fb: FormBuilder) { 
    this.setGroup();
  }

  ngOnInit() {
  }

  setGroup(){ 
    this.profileForm =  this.fb.group({
      firstName: [''],  
      lastName: [''], 
      email: ['', Validators.required, emailDomainValidator(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i)],
      address: this.fb.group({
        street: [''],
        city: [''], 
        state: [''],  
        zip: ['']
      })
    });
  }

  updateProfile(){ 
    this.profileForm.patchValue({
      firstName: 'Nancy', 
      address: { 
        street: '123 Drew Street'
      }
    })
  }

  onSubmit(){ 
    console.warn(this.profileForm.value);
  }

}
