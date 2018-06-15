import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { when } from 'q';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PessoaCreateComponent implements OnInit {
  //@ViewChild('inputCpf') cpf;
  cpfDuplicado = false;
  cpfValido = true;

  pessoa = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  savePessoa() {
    this.http.post('/pessoa', this.pessoa)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  validarCpf() {
    this.cpfValido = false;

    if (this.pessoa['cpf']) {
      if(this.pessoa['cpf'].length === 11) {      
        let numeroCpf = [];
        this.pessoa['cpf'].split('').forEach(element => {
          numeroCpf.push(+element);
        });

        this.cpfValido = this.validarDigitoCpf(numeroCpf);
      }
    }

    this.http.get(`/pessoa/cpf/${this.pessoa['cpf']}`).subscribe(
      (data) => {
        if (data) {
          this.cpfDuplicado = true;
        } else {
          this.cpfDuplicado = false;
        }
      },
      (err) => console.error(err))
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