import { Component, OnInit } from '@angular/core';
import { NewApiService } from './shared/services/news-api.service';
import { HttpResponse } from '@angular/common/http';
import { IArticleResponse } from './shared/interfaces/iarticleResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'http-interceptors-examples';
  constructor(private newApiService: NewApiService){

  }

  ngOnInit(){ 
    // this.newApiService.getArticles().subscribe(
    //   (response: IArticleResponse) => { 
    //     console.log(response.articles);
    //   }
    // );
  }
}
