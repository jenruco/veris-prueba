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

  /**
   * Metodo que se ejecuta al arrastrar el cursor
   *  
   * @param {@link DragEvent} event - contiene el evento de arrastre
   * 
   * @author Henry Pérez
   * @version 1.0
   * @since 23/02/2026
   * 
   */
  arrastrar(event: DragEvent) {
    event.preventDefault();
    this.estaArrastrando = true;
  }

   /**
   * Metodo que se ejecuta al terminar arrastre
   * 
   * @author Henry Pérez
   * @version 1.0
   * @since 23/02/2026
   * 
   */
  saleArrastrar() {
    this.estaArrastrando = false;
  }

   /**
   * Metodo que se ejecuta al soltar elemento
   *  
   * @param {@link DragEvent} event - contiene el evento de arrastre
   * 
   * @author Henry Pérez
   * @version 1.0
   * @since 23/02/2026
   * 
   */
  soltar(event: DragEvent) {
    event.preventDefault();
    this.estaArrastrando = false;
    const file = event.dataTransfer?.files[0];
    if (file) this.archivoNombre = file.name;
  }

   /**
   * Metodo que se ejecuta al seleccionar un archivo
   *  
   * @param {@link DragEvent} event - contiene el evento de arrastre
   * 
   * @author Henry Pérez
   * @version 1.0
   * @since 23/02/2026
   * 
   */
  archivoSeleccionado(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) this.archivoNombre = file.name;
  }

   /**
   * Metodo que se ejecuta al abrir el explorador de archivos
   * 
   * @author Henry Pérez
   * @version 1.0
   * @since 23/02/2026
   * 
   */
  abrirSelector() {
    document.getElementById('fileInput')?.click();
  }

   /**
   * Metodo para limpiar selección de archivo
   * 
   * @author Henry Pérez
   * @version 1.0
   * @since 23/02/2026
   * 
   */
  limpiarSeleccion() {
    this.archivoNombre = '';
  }

}
