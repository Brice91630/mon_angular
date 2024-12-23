import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';  // Le composant principal qui gère les routes
import { LoginComponent } from './app/login/login.component';
import { HomeComponent } from './app/home/home.component';

const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirection vers login par défaut
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Configuration simple du routeur
  ]
});
