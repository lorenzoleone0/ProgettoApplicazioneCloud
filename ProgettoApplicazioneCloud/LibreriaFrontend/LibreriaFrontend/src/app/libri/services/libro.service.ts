import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro.model'; 
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private apiUrl = `${environment.apiUrl}/libri`; 

  constructor(private http: HttpClient) { }

  
  getLibri(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl);
  }


  creaLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(`${this.apiUrl}/new`, libro);
  }

  aggiornaLibro(libro: Partial<Libro>): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/edit/${libro.id_libro}`, libro);
  }
  
  eliminaLibro(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
