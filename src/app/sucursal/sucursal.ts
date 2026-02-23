import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dashboard } from '../dashboard/dashboard';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-sucursal',
  imports: [CommonModule, Dashboard, Menu],
  templateUrl: './sucursal.html',
  styleUrl: './sucursal.css',
})
export class Sucursal {

  id: string = '';
  vistaActiva: string = 'dashboard';

  constructor(
    private _route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id') ?? '';
  }

}
