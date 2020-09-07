import { Component, OnInit } from '@angular/core';
import { ListService } from './../service/list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { List } from '../types';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {

  constructor(private fb: FormBuilder, 
    private _listService: ListService, 
    private router: Router,
    private routes: ActivatedRoute
    ) {

  }


  public list: List[];


  registrationForm = this.fb.group({
    email   : ['lukamagic@gmail.com'],
    // admin   : false,
    land    : [''],
    ort     : [''],
    strase  : [''],
    PLZ     : [],
    datum   : [''],
    
  })  

  
  saveHandler() {
    console.log(this.registrationForm.value)
   
  }


  goBack() { this.router.navigate(['admin_delete']) }

  ngOnInit(): void {
    const routeParams = this.routes.snapshot.params.id
          
    console.log(routeParams)


    this._listService.getListdataByid(routeParams)
        .subscribe((data: any) => {
          console.log(data)

          this.registrationForm = this.fb.group({
            email   : [`${data.email}`],
            // admin   : false,
            land    : [`${data.land}`],
            ort     : [`${data.ort}`],
            strase  : [`${data.strase}`],
            PLZ     : [`${data.PLZ}`],
            datum   : [`${data.datum}`],
          })  
        })
  }

}
