import { Component, OnInit } from '@angular/core';
import { NewApiService } from '../shared/services/news-api.service';
import { IArticle } from '../shared/interfaces/iarticle';
import { IArticleResponse } from '../shared/interfaces/iarticleResponse';

@Component({
  selector: 'app-news-articles',
  templateUrl: './news-articles.component.html',
  styleUrls: ['./news-articles.component.scss']
})
export class NewsArticlesComponent implements OnInit {
  articles: IArticle[];
  constructor(private newApiService: NewApiService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles():void{ 
    this.newApiService.getArticles().subscribe((response: IArticleResponse)=>{ 
      this.articles = response.articles;
    });
  }
}
