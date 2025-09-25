import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(
    private router: Router  // Import Router service
  ){}


  logout() {
    localStorage.removeItem('token'); // Clear the token
    this.router.navigate(['/login']); // Redirect to login
  }
}
