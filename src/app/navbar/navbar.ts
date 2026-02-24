import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

  constructor(
    private router: Router
  ) {}

  usuario: string = '';

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario') || 'NA';
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

}
