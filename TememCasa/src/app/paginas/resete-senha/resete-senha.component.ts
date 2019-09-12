import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resete-senha',
  templateUrl: './resete-senha.component.html',
  styleUrls: ['./resete-senha.component.scss'],
})
export class ReseteSenhaComponent implements OnInit {

  userEmail: String;

  constructor(private authService: AuthService, public alertController: AlertController) { }

  ngOnInit() { }

  reseteSenha() {
    this.authService.resetarSenha(this.userEmail);
    this.userEmail = '';
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: 'Mensagem enviada',
      buttons: ['OK']
    });

    await alert.present();
  }

}
