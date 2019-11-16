import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import  { HttpClientModule }  from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import {CardModule} from 'primeng/card';
import { httpInterceptorProviders } from './core/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    CardModule, 
    HttpClientModule, 
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
