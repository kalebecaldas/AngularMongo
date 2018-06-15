import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaDetailComponent } from './pessoa/pessoa-detail/pessoa-detail.component';
import { PessoaCreateComponent } from './pessoa/pessoa-create/pessoa-create.component';
import { PessoaEditComponent } from './pessoa/pessoa-edit/pessoa-edit.component';

import { NavmenuComponent } from './navmenu/navmenu.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms'

import {AutoCompleteModule} from 'primeng/autocomplete';
import { FilterPipe } from './pessoa/filter.pipe';

import {NgxMaskModule} from 'ngx-mask';
import { TelaLoginComponent } from './tela-login/tela-login.component';

/* Services */
import { AuthService } from './auth.service';
import { PessoaService } from './pessoa/pessoa.service';


const appRoutes: Routes = [
  {
    path: 'pessoas',
    //canActivate: [AuthService],
    component: PessoaComponent,
    data: { title: 'Pessoa List' }
  },
  {
    path: 'pessoa-details/:id',
    component: PessoaDetailComponent,
    data: { title: 'Pessoa Details' }
  },
  {
    path: 'pessoa-create',
    component: PessoaCreateComponent,
    data: { title: 'Create Pessoa' }
  },
  {
    path: 'pessoa-edit/:id',
    component: PessoaEditComponent,
    data: { title: 'Edit Pessoa' }
  },
  {
    path: 'pagina-inicial',
    component: NavmenuComponent,
    data: { title: 'Pagina Inicial' }
  },
  {
    path: 'login-valid',
    component: TelaLoginComponent,
    data: { title: 'Login' }
  },
  { path: '',
    redirectTo: '/pessoas',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    PessoaDetailComponent,
    PessoaCreateComponent,
    PessoaEditComponent,
    NavmenuComponent,
    FilterPipe,
    TelaLoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    NgbModule.forRoot(),
    NgxMaskModule.forRoot(),
    
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule, TypeaheadModule, PessoaComponent,AutoCompleteModule],

  providers: [
    AuthService,
    PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
