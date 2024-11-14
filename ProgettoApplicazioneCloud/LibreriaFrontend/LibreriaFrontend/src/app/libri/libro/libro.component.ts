import { Component, OnInit } from '@angular/core';
import { LibroService } from '../services/libro.service';
import { Libro } from '../models/libro.model';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  libri: Libro[] = [];  
  libroSelezionato: Libro | null = null;  
  nuovoLibro: Libro = new Libro();  
  errorMessage: string = '';

  constructor(private libroService: LibroService) { }

  ngOnInit(): void {
    this.caricaLibri();  
  }

  caricaLibri(): void {
    this.libroService.getLibri().subscribe({
      next: (data) => {
        this.libri = data;
        console.log('Lista dei libri:', this.libri);
      },
      error: (error) => {
        console.error('Errore durante il caricamento dei libri:', error);
        this.errorMessage = 'Errore nel caricamento dei libri';
      }
    });
  }

  
  aggiungiLibro(): void {

    this.libroService.creaLibro(this.nuovoLibro).subscribe({
      next: (response) => {
        console.log("Libro aggiunto con successo:", response);
        this.libri.push(response); 
        this.nuovoLibro = new Libro(); 
      },
      error: (error) => {
        console.error("Errore durante l'aggiunta del libro:", error);
        this.errorMessage = "Errore durante l'aggiunta del libro. Verifica i dati inseriti.";
      }
    });
  }

  
  eliminaLibro(id: number): void {
    this.libroService.eliminaLibro(id).subscribe({
      next: () => {
        this.libri = this.libri.filter((libro) => libro.id_libro !== id);  
      },
      error: () => this.errorMessage = 'Errore nella rimozione del libro'
    });
  }


  selezionaLibro(libro: Libro): void {
    this.libroSelezionato = { ...libro };
  }

  salvaModifiche(): void {
    if (this.libroSelezionato && this.libroSelezionato.id_libro > 0) {
      this.libroService.aggiornaLibro(this.libroSelezionato).subscribe(() => {
        this.caricaLibri();
        this.libroSelezionato = null;
      });
    } else {
      console.error("ID del libro non valido.");
    }
  }

  annullaModifica(): void {
    this.libroSelezionato = null;
  }
}

