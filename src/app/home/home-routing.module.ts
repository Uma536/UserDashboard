import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginGuard } from '../login/guard/login.guard';
import { EditprofileComponent } from './components/editprofile/editprofile.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [LoginGuard]},
  {
    path: 'editprofile/:id',
   component: EditprofileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
