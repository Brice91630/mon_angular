import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2>Welcome to the Home Page!</h2>
    <p>You are logged in.</p>
  `
})
export class HomeComponent {
  constructor(private router: Router) {
    const token = sessionStorage.getItem('auth_token'); // Vérifier si l'utilisateur est connecté
    if (!token) {
      // Si aucun token trouvé, redirige vers login
      this.router.navigate(['/login']);
    }
  }
}
