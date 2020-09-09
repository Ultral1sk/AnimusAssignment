import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './guards/auth.guard';


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
  { path : 'admin_delete',  component: AdminDeleteComponent, canActivate: [AuthGuard], data: ['ADMIN']} , // if AuthGuard can activate function returns true we can NOT! acces the route
  { path : 'admin_edit/:id',  component: AdminEditComponent, canActivate: [AuthGuard], data: ['ADMIN']}  // if AuthGuard can activate function returns true we can acces the route
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
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),


  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
