import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SucursalDto } from './dto/sucursal-dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seleccion-sucursal',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './seleccion-sucursal.html',
  styleUrl: './seleccion-sucursal.css',
})
export class SeleccionSucursal implements OnInit {

  constructor() {}

  listaSucursales: SucursalDto[] = [];
  ngOnInit() {
    this.listaSucursales = [
      {
        id: 1,
        nombre: 'Sucursal 1',
      },
      {
        id: 2,
        nombre: 'Sucursal 2',
      },
      {
        id: 3,
        nombre: 'Sucursal 3',
      },
      {
        id: 4,
        nombre: 'Sucursal 4',
      }
    ];
  }
}
