// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentaireComponent } from './commentaire/commentaire.component'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommentaireComponent],
  template: `
    <h1>Hello, {{ title }}</h1>

    <!-- Affichage d'un commentaire -->
    <app-commentaire 
      [auteur]="'Jean Dupont'" 
      [texte]="'Ce produit est vraiment excellent !'">
    </app-commentaire>
    
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'api-angular2'; // Propriété title
}
