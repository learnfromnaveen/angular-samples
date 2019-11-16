import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from './todo';
import  {  FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'myy-app-interceptor';
  
  favoriteColorControl: FormControl;
  constructor(private httpClient: HttpClient){ 

    this.favoriteColorControl = new FormControl('');

  }

  ngOnInit() { 
    const url =  'http://jsonplaceholder.typicode.com/todos/1';  
    this.httpClient.get<ITodo>(url).subscribe( (todo: ITodo) =>{ 
       console.log(todo);
    });
  }

}
