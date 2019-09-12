import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Mantimento } from '../estoque/entidade/mantimento';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MantimentoService {

  mantimento: Mantimento = new Mantimento();
  listaMantimentos$: Observable<Mantimento[]>;

  constructor(private banco: AngularFireDatabase, private router: Router) {
   
  }

   // LISTAR FEITO
  listar(): Observable<Mantimento[]>{
   return this.listaMantimentos$ = this.banco.list<Mantimento>('mantimento').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

   // DELETAR FEITO
  delete(key: string) {
    this.banco.object(`mantimento/${key}`).remove();
  }

  // ALTERAR PARA IMPLEMENTAR
  alterar(mantimento: Mantimento, key: string) {
    this.banco.list('mantimento').update(key, mantimento)
      .catch((error: any) => {
        console.error(error);
      });
  }

  // BUSCAR FEITO
  buscar(busca:string): Observable<Mantimento[]>{
    if(busca == null || busca == ""){
      return this.banco.list<Mantimento>('mantimento', ref=> ref.orderByChild('nome')).snapshotChanges().pipe(
        map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
      );
    }else{
      return this.banco.list<Mantimento>('mantimento', ref=> ref.orderByChild('nome').equalTo(busca)).snapshotChanges().pipe(
        map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
      );
    }
  }
}