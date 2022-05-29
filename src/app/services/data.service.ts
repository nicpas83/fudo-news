import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  item: any;

  constructor(){
    
  }


  setDataItem(data: Object) {
    this.item = data;
  }
  get getDataItem() {
    return this.item;
  }


}
