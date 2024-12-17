import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  get isAdmin() {
    return this.authService.isAdmin();
  }

  onLogout() {
    this.authService.logout();
  }
}
