import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DialogboxComponent } from './components/dialogbox/dialogbox.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ HomeComponent, EditprofileComponent, SidenavComponent, DialogboxComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class HomeModule { }
