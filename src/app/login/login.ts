import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login-service';
import { LoginReqDto } from './dto/login-req-dto';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  constructor(
    private _loginService: LoginService
  ) {}

  loginReq: LoginReqDto = new LoginReqDto();

  ngOnInit() {

  }

   /**
   * Metodo para el inicio de sesión
   * 
   * @author Henry Pérez
   * @version 1.0
   * @since 23/02/2026
   * 
   */
  iniciarSesion() {
    this._loginService.login(this.loginReq).subscribe({
      next: (response: boolean) => {
        if(!response) {
          Swal.fire('Error', '¡Usuario o contraseña incorrectos!', 'error');
        } else {
          localStorage.setItem('usuario', this.loginReq.usuario);
          window.location.reload();
        }
      },
      error: (error) => {
        console.error('Error al iniciar sesión: ' + error)
      }
    })
  }

}
