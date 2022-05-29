import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  item = {} as News; 

  constructor(
    private _dataService: DataService,
    private _router: Router
  ) { 

  }

  ngOnInit(): void {
    if(typeof this._dataService.item == 'undefined'){
      this._router.navigate(['/'])
    }
    
    this.item = this._dataService.item
  }

}
