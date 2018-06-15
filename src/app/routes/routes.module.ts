import { NgModule } from '@angular/core';
import { PessoaComponent } from '../principal/pessoa/pessoa.component';
import { PessoaDetailComponent } from '../principal/pessoa/pessoa-detail/pessoa-detail.component';
import { PessoaCreateComponent } from '../principal/pessoa/pessoa-create/pessoa-create.component';
import { PessoaEditComponent } from '../principal/pessoa/pessoa-edit/pessoa-edit.component';
import { PrincipalComponent } from '../principal/principal.component';
import { LoginComponent } from '../login/login.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'principal',
    //canActivate: [AuthService],
    component: PrincipalComponent,
    data: { title: 'Página inicial' },
    children: [
      {
        path: 'pessoas',
        component: PessoaComponent,
        data: { title: 'Lista de pessoas' }
      },
      {
        path: 'pessoas/create',
        component: PessoaCreateComponent,
        data: { title: 'Cadastrar pessoa' }
      },
      {
        path: 'pessoas/details/:id',
        component: PessoaDetailComponent,
        data: { title: 'Visualizar pessoa' }
      },
      {
        path: 'pessoas/details/:id/edit',
        component: PessoaEditComponent,
        data: { title: 'Editar Pessoa' }
      },
      { path: '',
        redirectTo: 'pessoas',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Fazer login' }
  },
  { path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, 
      {enableTracing: true} // <-- debugging purposes only)
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutesModule {}
