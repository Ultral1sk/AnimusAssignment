import { Component, OnInit } from '@angular/core';
import { ListService }       from '../service/list.service';
import { List }              from '../types'
import { Router }            from '@angular/router';


@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.scss']
})


export class AdminDeleteComponent implements OnInit {

  public list: List[];
  public _id;


  constructor(private _listService : ListService,   private router: Router) { }
  deleted: boolean = false;
  
  ngOnInit(): void {
    // we subscribe to the service so we get acces to the function 
    //and also through an observable to reach the data(request)
    this._listService.getList()
    .subscribe(( data: List[]) => {
      this.list = data;
      return console.log(this.list) 
    })
  }

  // removing a list from the db via the listservice
  deleteHandler(list: List):void {
    this.deleted = true
    this._listService.deleteList(list.id)
      .subscribe( data => {
        this.list = this.list.filter( delID => delID !== list )
      })

      setTimeout(() => {
      this.deleted = false
        
      }, 2000);
  }

  // edit function that'll be use to navigate to the appropriate place where we are going to be able to edit the list && db
  editHandler(list: List):void {
    this._id = list.id
    console.log(list)
    this.router.navigate(['admin_edit',this._id]);
  }

}
