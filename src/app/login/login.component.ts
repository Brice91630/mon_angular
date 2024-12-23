import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="onSubmit(username, password)">
      <div>
        <label for="username">Username:</label>
        <input type="text" #username required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" #password required />
      </div>
      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSubmit(username: HTMLInputElement, password: HTMLInputElement) {
    const enteredUsername = username.value;
    const enteredPassword = password.value;
  
    // Validation simple
    if (enteredUsername === 'admin' && enteredPassword === 'admin') {
      // Simuler un token et le stocker dans sessionStorage
      sessionStorage.setItem('auth_token', 'mock-jwt-token');
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }
}
