import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string;
  role: string;
  email: string;
  password: string;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register({ name: this.name, role: this.role,email: this.email, password: this.password }).subscribe(
      res => {
        this.router.navigate(['/login']);
      },
      err => {
        this.errorMessage = 'Registration failed';
      }
    );
  }
}
