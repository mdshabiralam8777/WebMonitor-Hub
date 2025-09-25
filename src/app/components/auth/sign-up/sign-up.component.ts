import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpData = { username: '', email: '', password: '' };
  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

    // Sign-Up Handler
    onSignUp() {
      this.authService.signUp(this.signUpData).subscribe(
        (response) => {
          console.log('Sign Up Successful:', response);
          alert('Sign Up Successful');
        },
        (error) => {
          console.error('Sign Up Error:', error);
          alert('Sign Up Failed');
        }
      );
    }

}
