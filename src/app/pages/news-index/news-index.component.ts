import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { NewsService } from 'src/app/services/news.service';

import { News } from '../../models/news';

@Component({
  selector: 'app-news-index',
  templateUrl: './news-index.component.html',
  styleUrls: ['./news-index.component.css']
})
export class NewsIndexComponent implements OnInit {

  news: News[] = [];

  constructor(
    private _newsService: NewsService,
    private _dataService: DataService,
    private _router: Router
  ) {
  }

  ngOnInit(): void {

    this.getAllNews();
  }

  getAllNews() {

    this._newsService.getAllNews().subscribe({
      next: (results) => {
        if (results.status == 'ok') {
          this.news = results.articles;
          console.log(this.news)
        }
      },
      error: (error) => {
        console.log(error)
      }
    });
  }


  openNews(news: News): void {
    this._dataService.setDataItem(news)
    this._router.navigate(['news-detail']);
  }


}
