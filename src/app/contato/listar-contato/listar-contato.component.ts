import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Contato } from '../entidade/contato';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listar-contato',
  templateUrl: './listar-contato.component.html',
  styleUrls: ['./listar-contato.component.scss'],
})
export class ListarContatoComponent implements OnInit {

  items: Observable<Contato[]>;
  contatos: Observable<Contato[]>;

  constructor(private banco: AngularFireDatabase) {
    this.contatos = this.banco.list<Contato>('contato').snapshotChanges().pipe(
      map(  lista => lista.map( linha => ({ key: linha.payload.key, ... linha.payload.val()  })  )  )
    );
  }





  ngOnInit() {
  }
}
