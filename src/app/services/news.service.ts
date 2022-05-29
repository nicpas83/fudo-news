import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  API_KEY = "f1bb3ef90d9d414bbd122db457e900a7";
  api_url = "https://newsapi.org/v2/everything?q=tesla&from=2022-05-20&sortBy=publishedAt&apiKey="+this.API_KEY;

  constructor(
    private _http: HttpClient,
  ) { }


  getAllNews(): Observable<any>{
    return this._http.get(this.api_url, {});
  }

}
