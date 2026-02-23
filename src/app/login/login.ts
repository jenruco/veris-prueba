import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login-service';
import { LoginReqDto } from './dto/login-req-dto';
import { FormsModule } from '@angular/forms';

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

  iniciarSesion() {
    this._loginService.login(this.loginReq).subscribe({
      next: (response: boolean) => {
        console.log(response)
      },
      error: (error) => {
        console.error('Error al iniciar sesión: ' + error)
      }
    })
  }

}
