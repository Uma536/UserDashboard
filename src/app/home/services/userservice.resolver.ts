import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/login/services/authentication.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceResolver implements Resolve<User> {
  constructor(private userService: UserService, private route: ActivatedRoute,) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    // console.log("userdataid",route);
    const id = route.paramMap.get('id')

   // tslint:disable-next-line:align
   console.log('userid', route.paramMap.get('id'));
   
    return this.userService.getUserById(id);
   }
}
