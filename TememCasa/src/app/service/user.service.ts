import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Users } from '../model/users';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Mantimentos } from '../model/mantimentos';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: Users = new Users;

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
  }
  private usuarioCollection: AngularFirestoreCollection<Users> = this.afs.collection('users');


  listarUsuarios(): Observable<Mantimentos[]> {    
    return null;
  }


}
