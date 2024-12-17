import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private userRole: string = '';

  login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      this.userRole = 'admin';
    } else if (username === 'user' && password === 'user') {
      this.isAuthenticated = true;
      this.userRole = 'user';
    } else {
      this.isAuthenticated = false;
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.userRole = '';
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }
}
