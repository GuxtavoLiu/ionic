import { Component, OnInit } from '@angular/core';
import { MantimentoService } from '../servicos/mantimento.service';
import { Mantimento } from './entidade/mantimento';
import { Observable } from 'rxjs';
import { Mantimentos } from 'src/app/model/mantimentos';
import { MantimentosService } from 'src/app/service/mantimentos.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlterarEstoqueComponent } from './alterar-estoque/alterar-estoque.component';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss'],
})

export class EstoqueComponent implements OnInit {

  // listaMantimentos$: Observable<Mantimento[]>;
  listarMantimentos$: Observable<Mantimentos[]>;

  busca:string;
  id: string;
  onEdit: boolean = false;

  constructor(private mantimentoService: MantimentoService,private alertController: AlertController,private auth: AngularFireAuth, private mantimentosService: MantimentosService, private router: Router) { 
    this.auth.authState.subscribe((usuario) => {
      this.id = usuario.uid;
      this.listarMantimentos$ = this.mantimentosService.buscarMantimentos(this.id);
    });
  }

  alterarMantimento : Mantimentos = new Mantimentos();

  ngOnInit() { 
    // this.listaMantimentos$ = this.mantimentoService.listar();
    
  }

  
  excluir(id: string) {
    this.mantimentosService.deletarMantimentos(id);
  }
  
  editar(mantimento: Mantimentos, id: string) {
    this.onEdit = true;
    this.alterarMantimento.nome = mantimento.nome;
    this.alterarMantimento.dataValidade = mantimento.dataValidade;
    this.alterarMantimento.um = mantimento.um;
    this.alterarMantimento.qtde = mantimento.qtde;
    this.alterarMantimento.id = mantimento.id;
    this.alterarMantimento.idusuario = mantimento.idusuario;
  }

  alterarMantimentos(){
    this.mantimentosService.alterarMantimento(this.alterarMantimento);
    this.onEdit = false;
  }
  
  buscarMantimento(){
    // this.listaMantimentos$ = this.mantimentoService.buscar(this.busca);
    this.listarMantimentos$ = this.mantimentosService.buscarMantimentos(this.id);
    this.busca = '';
  }

  async presentMantimentoAlterado() {
    const alert = await this.alertController.create({
      header: '',
      message: '<strong>Mantimento alterado com sucesso</strong>!!!',
      buttons: [
        {
          text: 'Fechar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
