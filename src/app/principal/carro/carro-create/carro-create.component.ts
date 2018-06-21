import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../config.service';
import { MatSnackBar } from '../../../../../node_modules/@angular/material';
//import { Observable } from 'rxjs';
//import { when } from 'q';

@Component({
  selector: 'app-carro-create',
  templateUrl: './carro-create.component.html',
  styleUrls: ['./carro-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarroCreateComponent implements OnInit {
  url: string;

  carro = {};

  constructor(private http: HttpClient, private config: ConfigService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.url = this.config.getConfig();
    this.carro['outros'] = [];
  }

  saveCarro() {
    this.http.post(`${this.url}/carro`, this.carro)
      .subscribe(res => {
          this.snackBar.open('Carro cadastrado com sucesso.', 'Fechar');
          this.router.navigate(['/principal/carros']);
        }, (err) => {
          this.snackBar.open('Ocorreu um erro, tente novamente.', 'Fechar');
          console.log(err);
        }
      );
  }

  adicionarCampo() {
    this.carro['outros'].push({nome: '', valor: ''});
  }

  removerCampo(index) {
    this.carro['outros'].splice(index, index+1);
  }

  validarPlaca() {
    this.http.get(`${this.url}/carro/placa/${this.carro['placa']}`).subscribe(
      (data) => {
        if (data) {
          this.snackBar.open('Número da placa já cadastrado.', 'Fechar');
        } else {
        }
      },
      (err) => console.error(err))
  }

}