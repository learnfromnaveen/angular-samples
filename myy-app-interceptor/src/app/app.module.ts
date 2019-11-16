import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './core/http-interceptors';
import  { HttpClientModule } from '@angular/common/http';
import { FavoriteColorComponent } from './forms/favorite-color/favorite-color.component'
import { FormsModule } from  '@angular/forms';
import { NameFormComponent } from './forms/name-form/name-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteColorComponent,
    NameFormComponent
  ],
  imports: [
    BrowserModule,  
    HttpClientModule,  
    FormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
