import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './utenti/login/login.component';
import { LibroComponent } from './libri/libro/libro.component';
import { RegistrazioneComponent } from './utenti/registrazione/registrazione.component';

const routes: Routes = [
  { path: 'libri', component: LibroComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'registrazione', component: RegistrazioneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
