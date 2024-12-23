import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent {
  @Input() auteur: string = ''; // Auteur du commentaire
  @Input() texte: string = '';  // Texte du commentaire
}
