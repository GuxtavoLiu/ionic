import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'firebase';
import { Observable, from, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Users } from 'src/app/model/users';
import { UserService } from 'src/app/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    public alertController: AlertController,
    private afs: AngularFirestore) { }


  private usuarioCollection: AngularFirestoreCollection<Users> = this.afs.collection('usuarios');
 


  criarUsuario(email, password){ 
    const usuarios: Users ={
      email: email,
      nome: '',
      telefone: '',
    }    
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(cred => {
      return this.usuarioCollection.doc(cred.user.uid).set(usuarios)
    })
  }



  logar(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigateByUrl('/inicio');
      }).catch(() => {
        this.presentEmailSenhaIncorretos();
      })
  }
  async presentEmailSenhaIncorretos() {
    const alert = await this.alertController.create({
      header: '',
      message: '<strong>Email ou senha invalidos</strong>!!!',
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
  //Resetar Senha
  resetarSenha(email) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

}
