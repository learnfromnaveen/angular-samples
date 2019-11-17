import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsArticlesComponent } from './news-articles/news-articles.component';
import { NewsArticleComponent } from './news-articles/news-article/news-article.component';
import { httpIntercepterProviders } from './shared/services/http-interceptors/index';

@NgModule({
  declarations: [
    AppComponent,
    NewsArticlesComponent, 
    NewsArticleComponent
  ],
  imports: [
    BrowserModule,  
    HttpClientModule
  ],
  providers: [
    httpIntercepterProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
