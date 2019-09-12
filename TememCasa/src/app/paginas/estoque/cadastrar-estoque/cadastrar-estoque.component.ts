import { Component, OnInit } from '@angular/core';
import { Mantimento } from '../entidade/mantimento';
import { AngularFireDatabase } from '@angular/fire/database';
import { AlertController } from '@ionic/angular';
import { MantimentosService } from 'src/app/service/mantimentos.service';
import { Mantimentos } from 'src/app/model/mantimentos';
import { Users } from '../../../model/users';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar-estoque',
  templateUrl: './cadastrar-estoque.component.html',
  styleUrls: ['./cadastrar-estoque.component.scss'],
})
export class CadastrarEstoqueComponent implements OnInit {
  mantimento: Mantimento = new Mantimento();
  mantimentos: Mantimentos = new Mantimentos();

  constructor(private router:Router, public alertController: AlertController, private mantimentoService: MantimentosService,private auth: AngularFireAuth) { 
    this.auth.authState.subscribe((usuario) => {
      this.mantimentos.idusuario = usuario.uid;
    });
  }

  ngOnInit() {
  } 
  
  salvarMantimento(){   
    const mantimento: Mantimentos = {
      nome: this.mantimentos.nome,
      qtde: this.mantimentos.qtde,
      um: this.mantimentos.um,
      dataValidade: this.mantimentos.dataValidade,
      idusuario: this.mantimentos.idusuario,
    }     

    this.mantimentoService.addMantimentos(mantimento);
    this.mantimentos = new Mantimentos();  
    this.router.navigate(['estoque']); 
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: 'Mantimendo Cadastrado',
      buttons: ['OK']
    });

    await alert.present();
  }

  // salvar() {
  //   this.banco.list('mantimento').push(this.mantimento);
  //   this.mantimento = new Mantimento();
  //   this.presentAlert();
  // }

}
