import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
}

public get currentUserValue(): User {
  return this.currentUserSubject.value;
}
  // tslint:disable-next-line:typedef
  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
}

// tslint:disable-next-line:typedef
getUserById(id: string) {
  return this.http.get<User>(`${environment.apiUrl}/users` + '/' +id);
}
update(id, params) {
  // tslint:disable-next-line:whitespace
  return this.http.put(`${environment.apiUrl}/users` + '/' +id, params)
      .pipe(map(x => {
          // update stored user if the logged in user updated their own record
          if (id === this.currentUserValue.id) {
              // update local storage
              const user = { ...this.currentUserValue, ...params };
              localStorage.setItem('user', JSON.stringify(user));

              // publish updated user to subscribers
              this.currentUserSubject.next(user);
          }
          return x;
      }));
}
}

