import { Routes } from '@angular/router';
import { SeleccionSucursal } from './seleccion-sucursal/seleccion-sucursal';
import { Sucursal } from './sucursal/sucursal';

export const routes: Routes = [
    {
        path: '',
        component: SeleccionSucursal
    },
    {
        path: 'sucursal/:id',
        component: Sucursal
    }
];
