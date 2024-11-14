import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../authservice/auth.service';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    localStorage.clear();
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        if (response && response.token) {
          localStorage.setItem('jwt_token', response.token);
          this.router.navigate(['/libri']);
        } else {
          this.errorMessage = 'Token non ricevuto dal server.';
        }
      },
      error: (err) => {
        console.log('Errore durante il login:', err); 
        if (err === 'Credenziali non valide') {
          this.errorMessage = 'Credenziali non valide';  
        } else {
          this.errorMessage = 'Si è verificato un errore. Riprova più tardi.';
        }
      }
    });
  }
}
