ProgettoApplicazioneCloud

Questa applicazione web è una semplice **gestione di una libreria**, che consente agli utenti autenticati di eseguire operazioni CRUD.
Un utente si può anche registrare.

Il **Backend** è stato realizzato tramite ASP.Net Core.

Punti Chiave:

-I controller, i servizi, i repository e i modelli. (Utente, Libro, Token)

-l'utilizzo del JWT token per l'autenticazione dell'utente.

-Entity Framework per l'utilizzo del database. (guida su come importare il DB in SQL server management studio:https://www.geeksforgeeks.org/how-to-import-and-export-sql-server-database/)

Il **Frontend** è stato realizzato tramite Angular.

Punti Chiave:

-I componenti e servizi utilizzati per la libreria, l'utente e token.

-Http per la comunicazione con il backend.

-JWT token che viene memorizzato nel localstorage del browser

**Database**:

LibreriaDB (file:LibreriaDB.dacpac)

Tabelle: Libri e Utenti

Colonne Libri: Titolo, Autore, DataPubblicazione, Editore, Categoria

Colonne Utenti: Nome, Cognome, Email, Password
