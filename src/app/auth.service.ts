import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
  usuarioLogado = undefined;

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario, senha) {
    this.http.post('127.0.0.1:6666/login', {usuario: usuario, senha:senha}).subscribe(data => {
      this.usuarioLogado = data;
    }, err => {
      this.usuarioLogado = undefined;
    });
  }

  logout() {
    this.usuarioLogado = undefined;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    if (this.usuarioLogado) {
      return true;
    }

    this.router.navigate(['/login-valid']);
    return false;
  }
}
