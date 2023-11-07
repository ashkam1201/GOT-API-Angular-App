import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user';

@Injectable()
export class AuthService {
  private isAlreadyLoggedIn = localStorage.getItem("access") != null;
  private loggedIn = new BehaviorSubject<boolean>(this.isAlreadyLoggedIn);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) {}

  login(user: User){
    if (user.userName == 'adrian' && user.password == '1234' ) {
      this.loggedIn.next(true);
      localStorage.setItem('access', 'granted');
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
    localStorage.removeItem("access");

  }
}
