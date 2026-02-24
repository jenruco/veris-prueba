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

  /**
   * Metodo que se ejecuta al cargar el componente
   * 
   * @author Henry Pérez
   * @version 1.0
   * @since 23/02/2026
   * 
   */
  ngOnInit() {
    this.usuario = localStorage.getItem('usuario') || 'NA';
  }

  /**
   * Metodo para cerrar sesión
   * 
   * @author Henry Pérez
   * @version 1.0
   * @since 23/02/2026
   * 
   */
  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

}
