import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent implements OnInit {

  @Input() title:string;  
  @Input() body: string;  
  @Input() footer: string;
  @Input() index: string;  
  constructor() {
   }

  ngOnInit() {
  }
}
