import { Injectable, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './config.service';
import { Observable } from '../../node_modules/rxjs/Observable';
import { tap } from '../../node_modules/rxjs/operators/tap';
import { of } from '../../node_modules/rxjs/observable/of';

@Injectable()
export class AuthService {
  usuarioLogado = undefined;
  redirectUrl: string;

  constructor(private http: HttpClient, private router: Router, private ConfigService: ConfigService) { }

  login(usuario, senha): Observable<any> {
    return of(true).pipe(tap(() => {
      let url = this.ConfigService.getConfig();
      this.http.post(`${url}/login`, {usuario: usuario, senha:senha}).subscribe(data => {
        this.usuarioLogado = data;

        if (this.redirectUrl !== '/login') {
          this.router.navigate(['/']);
        } else {
          this.router.navigate([this.redirectUrl]);
        }
      }, err => {
        this.usuarioLogado = undefined;
      });
    }));
  }

  logout() {
    this.usuarioLogado = undefined;
    this.router.navigate(['/login']);
  }
}
