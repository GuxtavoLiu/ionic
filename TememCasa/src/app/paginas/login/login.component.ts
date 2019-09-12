import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  userEmail: string;
  userSenha: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  login() {
    this.authService.logar(this.userEmail, this.userSenha);
    this.userEmail = '';
    this.userSenha = '';
  }
}
