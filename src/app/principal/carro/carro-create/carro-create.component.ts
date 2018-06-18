import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../config.service';
//import { Observable } from 'rxjs';
//import { when } from 'q';

@Component({
  selector: 'app-carro-create',
  templateUrl: './carro-create.component.html',
  styleUrls: ['./carro-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarroCreateComponent implements OnInit {
  //@ViewChild('inputCpf') cpf;
  cpfDuplicado = false;
  cpfValido = true;
  url: string;

  carro = {};

  constructor(private http: HttpClient, private config: ConfigService, private router: Router) { }

  ngOnInit() {
    this.url = this.config.getConfig();
  }

  saveCarro() {
    this.http.post(`${this.url}/carro`, this.carro)
      .subscribe(res => {
          this.router.navigate(['']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  validarCpf() {
    this.cpfValido = false;

    if (this.carro['cpf']) {
      if(this.carro['cpf'].length === 11) {      
        let numeroCpf = [];
        this.carro['cpf'].split('').forEach(element => {
          numeroCpf.push(+element);
        });

        this.cpfValido = this.validarDigitoCpf(numeroCpf);
      }
    }

    this.http.get(`${this.url}/carro/cpf/${this.carro['cpf']}`).subscribe(
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