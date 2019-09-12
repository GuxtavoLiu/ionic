import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Users } from '../model/users';
import { Mantimentos } from '../model/mantimentos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MantimentosService {


  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {}
  private mantimentosCollection: AngularFirestoreCollection<Mantimentos> = this.afs.collection('mantimento');


  listarMantimentos(): Observable<Mantimentos[]> {
    return this.mantimentosCollection.valueChanges();
  }
  addMantimentos(mantimento: Mantimentos) {
    mantimento.id = this.afs.createId();
    return this.mantimentosCollection.doc(mantimento.id).set(mantimento);
  }
  buscarMantimentos(id: string): Observable<Mantimentos[]>{
    return this.afs.collection<Mantimentos>('mantimento',
    ref => ref.where('idusuario','==',id))
    .valueChanges();
  }
  deletarMantimentos(id: string) {
    return this.mantimentosCollection.doc(id).delete();
  }
  alterarMantimento(mantimento: Mantimentos){
    return this.mantimentosCollection.doc(mantimento.id).set({
      nome: mantimento.nome,
      dataValidade: mantimento.dataValidade,
      um: mantimento.um,
      qtde: mantimento.qtde,
      idusuario: mantimento.idusuario,
      id:mantimento.id
    });
  }
  

}