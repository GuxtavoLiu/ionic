import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';
import { Users } from 'src/app/model/users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {

  userEmail: string;
  userSenha: string;
  userSenhaConfirm: string;

  constructor(private router: Router, private authService: AuthService, public alertController: AlertController,private userService: UserService) { }

  ngOnInit() { }

  cadastroUser() {
    if(this.userSenha == this.userSenhaConfirm){
    this.authService.criarUsuario(this.userEmail, this.userSenha)
    this.userEmail = '';
    this.userSenha = '';
    this.userSenhaConfirm ='';
    this.presentAlert();
    this.router.navigate(['/login'])
    }
    else{
      this.failSenha();
    }
  }


    async failSenha() {
      const alert = await this.alertController.create({
        header: 'Erro!',
        message: 'Senhas não coincidem.',
        buttons: ['OK']
      });

      await alert.present();
    }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: 'Conta criada',
      buttons: ['OK']
    });

    await alert.present();
  }

}
