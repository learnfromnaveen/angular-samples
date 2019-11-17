import { IArticle } from './iarticle';

export interface IArticleResponse{ 
    status: string;  
    totalResults: number;  
    articles: IArticle[];
}