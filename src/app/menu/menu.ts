import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  vistaActiva: string = 'cruce';
  archivoNombre: string = '';
  estaArrastrando: boolean = false;

  arrastrar(event: DragEvent) {
    event.preventDefault();
    this.estaArrastrando = true;
  }

  saleArrastrar() {
    this.estaArrastrando = false;
  }

  soltar(event: DragEvent) {
    event.preventDefault();
    this.estaArrastrando = false;
    const file = event.dataTransfer?.files[0];
    if (file) this.archivoNombre = file.name;
  }

  archivoSeleccionado(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) this.archivoNombre = file.name;
  }

  abrirSelector() {
    document.getElementById('fileInput')?.click();
  }

  limpiarSeleccion() {
    this.archivoNombre = '';
  }

}
