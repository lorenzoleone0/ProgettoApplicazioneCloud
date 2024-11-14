import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './servicesJWT/jwt.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './utenti/login/login.component';
import { FormsModule } from '@angular/forms';
import { LibroComponent } from './libri/libro/libro.component';
import { RegistrazioneComponent } from './utenti/registrazione/registrazione.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LibroComponent,
    RegistrazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
