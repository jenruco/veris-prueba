import { Injectable } from '@angular/core';
import { LoginReqDto } from '../login/dto/login-req-dto';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MensajesDto } from '../dashboard/dto/mensajes-dto';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) {}

  /**
   * Metodo para obtener los mensajes
   * 
   * @author Henry Pérez
   * @version 1.0
   * @since 23/02/2026
   * 
   */
  getMensajes(): Observable<MensajesDto[]> {
    return this.http.get<MensajesDto[]>('assets/data/mensajes.json');
  }
  
}
