import { Component, OnInit } from '@angular/core';
import { Mantimentos } from 'src/app/model/mantimentos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alterar-estoque',
  templateUrl: './alterar-estoque.component.html',
  styleUrls: ['./alterar-estoque.component.scss'],
})
export class AlterarEstoqueComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  alterarMantimento : Mantimentos = new Mantimentos();

  editarMantimentos(mantimento: Mantimentos){
    this.router.navigate(['/alterar-estoque'])

    const alteraMantimento : Mantimentos = {
      dataValidade: mantimento.dataValidade,
      id: mantimento.id,
      idusuario: mantimento.idusuario,
      nome: mantimento.nome,
      qtde: mantimento.qtde,
      um: mantimento.um
    }
  }

}
