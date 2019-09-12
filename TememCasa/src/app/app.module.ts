import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// angular

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { ReceitasComponent } from './paginas/receitas/receitas.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { EstoqueComponent } from './paginas/estoque/estoque.component';
import { CadastrarEstoqueComponent } from './paginas/estoque/cadastrar-estoque/cadastrar-estoque.component';
import { InformacoesComponent } from './paginas/receitas/ingredientes/informacoes/informacoes.component';
import { TiposComponent } from './paginas/receitas/tipos/tipos/tipos.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { ReseteSenhaComponent } from './paginas/resete-senha/resete-senha.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AlterarEstoqueComponent } from './paginas/estoque/alterar-estoque/alterar-estoque.component';



@NgModule({
  declarations: [AppComponent,AlterarEstoqueComponent, InicioComponent, LoginComponent, ReceitasComponent, SobreComponent, EstoqueComponent, CadastrarEstoqueComponent, InformacoesComponent, TiposComponent, CadastroComponent, ReseteSenhaComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlterarEstoqueComponent,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
