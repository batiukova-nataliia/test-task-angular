// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SpaceflightNewsService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Article } from './article'; // Создайте интерфейс для статьи, если необходимо

const myData = [
  { id: 1, title: 'firstData' },
  { id: 2, title: 'secondData' },
  { id: 2, title: 'secondData' },
  { id: 2, title: 'secondData' },
  { id: 2, title: 'secondData' },
  { id: 2, title: 'secondData' },
];

// const API_URL = 'https://mate-academy.github.io/react_phone-catalog/_new/products.json';

const API_URL = 'https://api.spaceflightnewsapi.net/v4/articles'

// const API_URL = 'https://api.spaceflightnewsapi.net/v4/articles/?event=9&search=IT%20company&title_contains_all=IT%2C%20techonologies'
@Injectable({
  providedIn: 'root'
})

export class SpaceflightNewsService {

  constructor(private http: HttpClient) { }
getDataSecond() {
  return this.http.get(`${API_URL}`);
}
}

// export class SpaceflightNewsService {

//   constructor() { }
// getData() {
//   return myData;
// }
// } // this works from array in the file

