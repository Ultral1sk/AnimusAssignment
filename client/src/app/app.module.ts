import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularFormComponent } from './formular-form/formular-form.component';
import { ViewComponent } from './view/view.component';

export const routes: Routes = [
  { path : '', component: ViewComponent, pathMatch: 'full'},  
  { path : 'view',  component: ViewComponent}  
]
@NgModule({
  declarations: [
    AppComponent,
    FormularFormComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
