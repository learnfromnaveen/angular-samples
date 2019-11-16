import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ProfileFormGroup } from './ProfileFormGroup';
import { ProfileFormBuilder } from './ProfileFormBuilder';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  profileForm: FormGroup; 

  constructor(private formBuilder: FormBuilder) {
     //this.profileForm = new ProfileFormGroup().getProfileFormGroup()
     this.profileForm = new ProfileFormBuilder(formBuilder).getProfileFormGroup();
  }

  ngOnInit() {
  }

  onSubmit() { 
    console.warn(this.profileForm.value);
  }

  //partial update
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

}
