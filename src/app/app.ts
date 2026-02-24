import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-veris');

  get enSesion(): boolean {
    const usuario = localStorage.getItem('usuario');
    if(usuario && usuario !== '') {
      return true;
    }
    return false;
  }
}
