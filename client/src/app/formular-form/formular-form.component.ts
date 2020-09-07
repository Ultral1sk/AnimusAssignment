import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formular-form',
  templateUrl: './formular-form.component.html',
  styleUrls: ['./formular-form.component.scss']
})
export class FormularFormComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  
  registrationForm = this.fb.group({
    email   : ['lukamagic@gmail.com'],

    // admin   : false,

    land    : [''],
    ort     : [''],
    strase  : [''],
    PLZ     : [],
    datum   : [''],
    
  })  

  onSubmit(){
    console.log(this.registrationForm.value)
  }

  ngOnInit(): void {
  }

}
