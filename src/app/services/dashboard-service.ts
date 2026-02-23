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

  getMensajes(): Observable<MensajesDto[]> {
    return this.http.get<MensajesDto[]>('assets/data/mensajes.json');
  }
  
}
