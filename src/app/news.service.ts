import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor() { }

  private visibleNews: any[] = [];

  // Method to set the 'visibleNews' array
  setVisibleNews(news: any[]): void {
    this.visibleNews = news;
  }

  // Method to get a specific item based on its ID
  getItemById(id: number): any | undefined {
    return this.visibleNews.find(item => item.id === id);
  }
}
