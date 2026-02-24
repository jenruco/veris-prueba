import { Injectable } from '@angular/core';
import { LoginReqDto } from '../login/dto/login-req-dto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  INFO_PERSONA = {
    usuario: 'hperez',
    clave: '123456'
  }

  /**
   * Metodo para el inicio de sesión
   * 
   * @param {@link LoginReqDto} loginReq - Información de inicio de sesión.
   * 
   * @author Henry Pérez
   * @version 1.0
   * @since 23/02/2026
   * 
   */
  login(loginReq: LoginReqDto): Observable<boolean> {

    if(loginReq.usuario === this.INFO_PERSONA.usuario
        && loginReq.clave === this.INFO_PERSONA.clave
    )
    {
      return of(true);
    }
    
    return of(false);
  }
  
}
