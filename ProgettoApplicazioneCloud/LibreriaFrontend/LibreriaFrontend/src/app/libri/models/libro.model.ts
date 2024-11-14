export class Libro {
  id_libro: number = 0;
  titolo: string = '';
  autore: string = '';
  dataPubblicazione?: Date;
  editore: string = '';
  categoria: string= '';

  constructor(
    id_libro?: number,
    titolo?: string,
    autore?: string,
    dataPubblicazione?: Date,
    editore?: string,
    categoria?: string
  ) {
    if (id_libro) this.id_libro = id_libro;
    if (titolo) this.titolo = titolo;
    if (autore) this.autore = autore;
    if (dataPubblicazione) this.dataPubblicazione = dataPubblicazione;
    if (editore) this.editore = editore;
    if (categoria) this.categoria = categoria;
  }
}


