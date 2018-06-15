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
import { FilterPipe } from './principal/pessoa/filter.pipe';

import { NgxMaskModule } from 'ngx-mask';
import { LoginComponent } from './login/login.component';

/* Services */
import { AuthService } from './auth.service';
import { PessoaService } from './principal/pessoa/pessoa.service';
import { BarraComponent } from './principal/barra/barra.component';
import { RoutesModule } from './routes/routes.module';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    PessoaDetailComponent,
    PessoaCreateComponent,
    PessoaEditComponent,
    PrincipalComponent,
    FilterPipe,
    LoginComponent,
    BarraComponent
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
    RoutesModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule, TypeaheadModule, PessoaComponent,AutoCompleteModule],

  providers: [
    AuthService,
    PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
