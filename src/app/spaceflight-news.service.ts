import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://api.spaceflightnewsapi.net/v4/articles/?limit=27'
@Injectable({
  providedIn: 'root'
})

export class SpaceflightNewsService {

  constructor(private http: HttpClient) { }
  getDataSecond() {
    return this.http.get(`${API_URL}`);
  }
}
