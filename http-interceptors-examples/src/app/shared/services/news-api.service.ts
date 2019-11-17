import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IArticleResponse } from '../interfaces/iarticleResponse';

@Injectable({providedIn: 'root'})
export class NewApiService{ 
    baseUrl: string; 

    constructor(private httpClient: HttpClient){ 
        this.baseUrl = environment.newsApiConfiguration.url;
    }

    getArticles(): Observable<IArticleResponse>{
        return this.httpClient.get<IArticleResponse>(this.getArticlesUrl());
    }

    private getArticlesUrl(): string{
        const config = environment.newsApiConfiguration; 
        return this.baseUrl + "?country=" + config.country + '&category='+ config.category;
    }
}