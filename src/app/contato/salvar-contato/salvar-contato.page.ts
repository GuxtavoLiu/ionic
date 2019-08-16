import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Contato } from '../entidade/contato';

@Component({
  selector: 'app-salvar-contato',
  templateUrl: './salvar-contato.page.html',
  styleUrls: ['./salvar-contato.page.scss'],
})
export class SalvarContatoPage implements OnInit {
  contato: Contato = new Contato();
  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() {}

  salvar(){
    this.banco.list('contato').push(this.contato);
    this.contato = new Contato();
    alert("salvao com sucesso");
    }

}
