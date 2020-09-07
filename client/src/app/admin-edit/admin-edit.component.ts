import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';
import { List } from '../types'


@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {

  public list: List[];

  constructor(private _listService : ListService) { }

  ngOnInit(): void {
    // we subscribe to the service so we get acces to the function 
    //and also through an observable to reach the data(request)
    this._listService.getList()
    .subscribe(( data: List[]) => {
      this.list = data;
      return console.log(this.list) 
    })
  }

}
