import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../config.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsuarioCreateComponent implements OnInit {
  url: string;

  usuario = {};

  constructor(private http: HttpClient, private config: ConfigService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.url = this.config.getConfig();
  }

  saveUsuario() {
    this.http.post(`${this.url}/usuario`, this.usuario)
      .subscribe(res => {
          this.snackBar.open('Usuário cadastrado com sucesso!', 'Fechar');
          this.router.navigate(['/principal/usuarios']);
        }, (err) => {
          this.snackBar.open('Ocorreu um erro, tente novamente.', 'Fechar');
          console.log(err);
        }
      );
  }

  validarCpf() {
    let cpfValido = false;

    if (this.usuario['cpf']) {
      if(this.usuario['cpf'].length === 11) {      
        let numeroCpf = [];
        this.usuario['cpf'].split('').forEach(element => {
          numeroCpf.push(+element);
        });

        cpfValido = this.validarDigitoCpf(numeroCpf);
      }
    }

    this.http.get(`${this.url}/usuario/cpf/${this.usuario['cpf']}`).subscribe(
      (data) => {
        if (data) {
          this.snackBar.open('CPF já cadastrado.', 'Fechar');
        } else {
        }
      },
      (err) => console.error(err))
    
    if (!cpfValido) {
      this.snackBar.open('CPF inválido.', 'Fechar');
    }
  }

  validarDigitoCpf(cpf) {
    let primeiro = 0;
    let segundo = 0;

    /* Cálculo do primeiro dígito */
    for (let i = 0; i < 9; i++) {
      primeiro += cpf[i] * (10-i);
    }

    if (primeiro % 11 === 0 || primeiro % 11 === 1) {
      primeiro = 0;
    }
    else {
      primeiro = 11 - (primeiro % 11);
    }

    for (let i = 0; i < 9; i++) {
      segundo += cpf[i] * (11-i);
    }

    segundo += primeiro * 2;

    if (segundo % 11 === 0 || segundo % 11 === 1) {
      segundo = 0;
    }
    else {
      segundo = 11 - (segundo % 11);
    }

    if (cpf[9] === primeiro && cpf[10] === segundo) {
      return true
    }

    return false;
  }

}