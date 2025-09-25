import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  loginData = { email: '', password: '' };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // Login Handler
  onLogin() {
    this.authService.login(this.loginData).subscribe(
      (response) => {
        console.log('Login Successful:', response);
        localStorage.setItem('token', response.token); // Store JWT token
        // alert('Login Successful');
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Login Error:', error);
        alert('Login Failed');
      }
    );
  }
}
