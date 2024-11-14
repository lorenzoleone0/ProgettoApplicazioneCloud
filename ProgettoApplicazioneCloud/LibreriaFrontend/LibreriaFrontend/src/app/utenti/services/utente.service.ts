import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';  
import { Utente } from '../../utenti/models/utente.model'

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  [x: string]: any;

  private apiUrl = `${environment.apiUrl}/utenti`;
  private authUrl = `${environment.apiUrl}/api/v1/token/token`;
  constructor(private http: HttpClient) { }

  registraUtente(utente: Utente): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/new`, utente);
  }


  authenticate(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.authUrl, { email, password });
  }

  
  private createAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('jwt_token');  
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
}
