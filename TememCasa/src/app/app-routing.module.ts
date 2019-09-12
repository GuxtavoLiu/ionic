import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { AlterarEstoqueComponent } from './paginas/estoque/alterar-estoque/alterar-estoque.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'receitas', component: ReceitasComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'estoque', component: EstoqueComponent },
  { path: 'cadastrar-estoque', component: CadastrarEstoqueComponent },
  { path: 'alterar-estoque', component: AlterarEstoqueComponent},
  { path: 'info', component: InformacoesComponent },
  { path: 'tipos', component: TiposComponent },
  { path: 'cadastroUser', component: CadastroComponent },
  { path: 'resteSenha', component: ReseteSenhaComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule, ]
})
export class AppRoutingModule { }
