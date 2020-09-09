import { Component, OnInit }      from '@angular/core';
import { ListService }            from './../service/list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder }            from '@angular/forms';
import { List }                   from '../types';

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
    ) {}

  isSaved:boolean = false

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

  
  // saving the new list to the db 
  // i have some problme on the backend data type isnt appropriate and can't save the data 
  // saving only empty object
  saveHandler() {
    const routeParams = this.routes.snapshot.params.id

    this._listService.updateList(this.registrationForm.value, routeParams)
        .subscribe((data) => {

          if(data.status === 'ok') {
            this.isSaved = true
            return data

          }
          // this.router.navigate(['view']);   // this is prepared when the data comes and the status is okay the page to be rerendered
        }),
        error => {

          alert(error);
        }
   
        //toggling popup
        setTimeout(() => {
          this.isSaved = false
          
        }, 2000);
  }


  goBack() { this.router.navigate(['admin_delete']) }

  ngOnInit(): void {

    const routeParams = this.routes.snapshot.params.id 
    // console.log(routeParams)

    // the ID from the URL is passed to the getListedDataById function which is in the listservicee
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
