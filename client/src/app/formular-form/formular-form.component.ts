import { ListService } from './../service/list.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-formular-form',
  templateUrl: './formular-form.component.html',
  styleUrls: ['./formular-form.component.scss']
})
export class FormularFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private _listService: ListService) {}
  private router: Router;



  
  registrationForm = this.fb.group({
    email   : ['lukamagic@gmail.com'],
    // admin   : false,
    land    : [''],
    ort     : [''],
    strase  : [''],
    PLZ     : [],
    datum   : [''],
    
  })  

  submitHandler(){
    console.log(this.registrationForm.value)
   this._listService.createList(this.registrationForm.value)
        .subscribe( data => {
          console.log(data)
            // this.router.navigate(['view']);
        })
  }

  ngOnInit(): void {
  }

}
