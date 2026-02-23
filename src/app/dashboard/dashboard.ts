import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select2Data, Select2 } from 'ng-select2-component';
import { ModalMail } from '../modal-mail/modal-mail';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EmailData } from './dto/email-data';
import { CommonModule } from '@angular/common';
import { MensajesDto } from './dto/mensajes-dto';
import { DashboardService } from '../services/dashboard-service';
import { FlatpickrModule } from 'angularx-flatpickr';


@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, Select2, MatDialogModule, CommonModule, FlatpickrModule],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  constructor(
    private _dialog: MatDialog,
    private _dashboardService: DashboardService,
  ) {}

  data: Select2Data = [
    { value: '31', label: 'Último(s) 31 Día(s)' },
    { value: '60', label: 'Último(s) 60 Día(s)' },
    { value: '120', label: 'Último(s) 31 Día(s)' }
  ];
  
  value = '31';

  tipoFiltro: Select2Data = [
    { value: 'ninguno', label: 'Ninguno' },
    { value: 'codMensaje', label: 'Código Mensaje' },
    { value: 'idEmpresaHomologacion', label: 'Id Empresa Homologación' },
    { value: 'asunto', label: 'Asunto' },
    { value: 'codigoPlantilla', label: 'Código Plantilla' }
  ];
  
  tipoFiltroSel = 'ninguno';

  filtrosAdicionales: Select2Data = [
    { value: 'ninguno', label: 'Ninguno' },
    { value: 'enviado', label: 'Enviado' },
    { value: 'rebotado', label: 'Rebotado' },
    { value: 'listaNegra', label: 'Lista Negra' }
  ];
  
  filtroAdicionaSel = 'ninguno';

  fechaDesde: Date = new Date();
  fechaHasta: Date = new Date();


  listaMensajes: MensajesDto[] = [];
  listaMensajesPaginado: MensajesDto[] = [];
  paginaActual: number = 1;
  itemsPorPagina: number = 5;
  totalPaginas: number = 0;

  emailData: EmailData = {
    "totalMailResgistrados": {total: 493862, label: 'Email Registrados'},
    "totalMailEnviados": {total: 467015, label: 'Email Enviados'},
    "totalMailListaNegra": {total: 23773, label: 'Lista Negra'},
    "totalMailNoDespachado": {total: 2598, label: 'Email No Despachado'},
    "totalMailEsperaStatus": {total: 32, label: 'Email En Espera Salida'},
    "totalMailRebotados": {total: 383, label: 'Rebotados'},
    "totalMailErrorDesconocido": {total: 61, label: 'Error Desconocido'}
  }

  ngOnInit() {
    this._dashboardService.getMensajes().subscribe({
      next: (listaMensajes: MensajesDto[]) => {
        this.listaMensajes = listaMensajes;
        this.totalPaginas = Math.ceil(this.listaMensajes.length / this.itemsPorPagina);
        this.actualizaPagina();
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  actualizaPagina() {
    const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
    const fin = inicio + this.itemsPorPagina;
    this.listaMensajesPaginado = this.listaMensajes.slice(inicio, fin);
  }

  cambiarPagina(pagina: number) {
    if(pagina < 1 || pagina > this.totalPaginas) return;
    this.paginaActual = pagina;
    this.actualizaPagina();
  }

  get paginas(): number[] {
    return Array.from({length: this.totalPaginas}, (_, i) => i + 1);
  }

  verEmailInfo() {    
    this._dialog.open(ModalMail, {
      width: '800px',
      data: { emailData: this.emailData }
    });
  }

}
