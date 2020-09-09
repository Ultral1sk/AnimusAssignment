import { ListService }              from './../service/list.service';
import { Router }                   from '@angular/router';
import { Component, OnInit }        from '@angular/core';
import { FormBuilder, FormArray }   from '@angular/forms';
@Component({
  selector: 'app-formular-form',
  templateUrl: './formular-form.component.html',
  styleUrls: ['./formular-form.component.scss']
})

export class FormularFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private _listService: ListService) {}
  
  private router: Router;
   alert: boolean = false;

   
  ngOnInit(): void {
  }
  
  registrationForm = this.fb.group({
    email   : ['lukamagic@gmail.com'],
    // admin   : false,
    land    : [''],
    ort     : [''],
    strase  : [''],
    PLZ     : [],
    datum   : [''],
    
  })  

  // here im having also a problem im seding an object with data but DB doesn accept that data
  // somehow it converts the data in it's own way, only empty object is passed to db
  submitHandler(){
    // console.log(this.registrationForm.value)
    this._listService.createList(this.registrationForm.value)
        .subscribe( data => {
          if(data.status === 201)
         this.alert = true;

          console.log(data)
            // this.router.navigate(['view']);
        })


        setTimeout(() => { this.alert = false;}, 2000);
  }



}
