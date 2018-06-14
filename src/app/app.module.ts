import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';

import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { NavmenuComponent } from './navmenu/navmenu.component';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms'

import {AutoCompleteModule} from 'primeng/autocomplete';
import { FilterPipe } from './book/filter.pipe';

import {NgxMaskModule} from 'ngx-mask';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { AuthService } from './auth.service';


const appRoutes: Routes = [
  {
    path: 'books',
    canActivate: [AuthService],
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
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
    redirectTo: '/pagina-inicial',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
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
  exports: [BsDropdownModule, TooltipModule, ModalModule, TypeaheadModule, BookComponent,AutoCompleteModule],

  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
