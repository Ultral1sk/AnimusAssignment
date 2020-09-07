import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularFormComponent } from './formular-form/formular-form.component';
import { ViewComponent } from './view/view.component';
import { AdminDeleteComponent } from './admin/admin-delete.component';
import { AdminEditComponent } from './admin/admin-edit.component';

export const routes: Routes = [
  { path : '', component: ViewComponent, pathMatch: 'full'},  
  { path : 'view',  component: ViewComponent},
  { path : 'admin_delete',  component: AdminDeleteComponent} , 
  { path : 'admin_edit/:id',  component: AdminEditComponent}  
]
@NgModule({
  declarations: [
    AppComponent,
    FormularFormComponent,
    ViewComponent,
    AdminDeleteComponent,
    AdminEditComponent
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
