import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginGuard } from '../login/guard/login.guard';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { UserserviceResolver } from './services/userservice.resolver';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard]},

  {
    path: 'editprofile/:id',
   component: EditprofileComponent,
resolve: {
userDetails: UserserviceResolver
}
 },
  //  { path: '**', component: PagenotfoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
