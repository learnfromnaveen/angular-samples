import { Component, OnInit } from '@angular/core';
import  { FormControl } from  '@angular/forms';
@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  name: FormControl; 

  constructor() { 
    this.initFormControls();
  
  }

  ngOnInit() {

  }

  initFormControls() { 
    this.name = new FormControl('');
  }

  updateName() { 
    this.name.setValue('Vivaan');
  }

}
