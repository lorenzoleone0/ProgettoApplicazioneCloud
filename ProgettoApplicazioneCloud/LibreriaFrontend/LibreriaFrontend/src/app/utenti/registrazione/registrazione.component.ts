import { Component } from '@angular/core';
import { UtenteService } from '../../utenti/services/utente.service';
import { Utente } from '../../utenti/models/utente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {
  nome: string = '';
  cognome: string = '';
  email: string = '';
  password: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private utenteService: UtenteService, private router: Router) { }

  registrati(): void {
    const nuovoUtente = {
      nome: this.nome,
      cognome: this.cognome,
      email: this.email,
      password: this.password
    };

    this.utenteService.registraUtente(nuovoUtente).subscribe({
      next: (response) => {
        this.router.navigate(['/login']);  
      },
      error: (error) => {
        this.errorMessage = 'Errore durante la registrazione. Riprova.';
      }
    });
  }
}
