import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { PessoaComponent } from './principal/pessoa/pessoa.component';
import { PessoaDetailComponent } from './principal/pessoa/pessoa-detail/pessoa-detail.component';
import { PessoaCreateComponent } from './principal/pessoa/pessoa-create/pessoa-create.component';
import { PessoaEditComponent } from './principal/pessoa/pessoa-edit/pessoa-edit.component';

import { PrincipalComponent } from './principal/principal.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms'

import {AutoCompleteModule} from 'primeng/autocomplete';
import { FiltroPipe } from './filtro.pipe';

import { NgxMaskModule } from 'ngx-mask';
import { LoginComponent } from './login/login.component';

import {MatSnackBarModule} from '@angular/material';
import {MatSnackBar} from '@angular/material';

/* Services */
import { AuthService } from './auth.service';
import { BarraComponent } from './principal/barra/barra.component';
import { RoutesModule } from './routes/routes.module';
import { ConfigService } from './config.service';
import { UsuarioComponent } from './principal/usuario/usuario.component';
import { UsuarioCreateComponent } from './principal/usuario/usuario-create/usuario-create.component';
import { UsuarioDetailComponent } from './principal/usuario/usuario-detail/usuario-detail.component';
import { UsuarioEditComponent } from './principal/usuario/usuario-edit/usuario-edit.component';
import { CarroComponent } from './principal/carro/carro.component';
import { CarroCreateComponent } from './principal/carro/carro-create/carro-create.component';
import { CarroDetailComponent } from './principal/carro/carro-detail/carro-detail.component';
import { CarroEditComponent } from './principal/carro/carro-edit/carro-edit.component';
import { AuthGuardService } from './auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    PessoaDetailComponent,
    PessoaCreateComponent,
    PessoaEditComponent,
    PrincipalComponent,
    FiltroPipe,
    LoginComponent,
    BarraComponent,
    UsuarioComponent,
    UsuarioCreateComponent,
    UsuarioDetailComponent,
    UsuarioEditComponent,
    CarroCreateComponent,
    CarroDetailComponent,
    CarroEditComponent,
    CarroComponent
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
    RoutesModule,
    MatSnackBarModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule, TypeaheadModule, PessoaComponent,UsuarioComponent,AutoCompleteModule],

  providers: [
    AuthService,
    AuthGuardService,
    ConfigService,
    MatSnackBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
