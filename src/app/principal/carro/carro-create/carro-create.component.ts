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
  //@ViewChild('inputPlaca') placa;
  placaDuplicado = false;
  placaValido = true;
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

  validarPlaca() {
    this.placaValido = false;

    if (this.carro['placa']) {
      if(this.carro['placa'].length === 11) {      
        let numeroPlaca = [];
        this.carro['placa'].split('').forEach(element => {
          numeroPlaca.push(+element);
        });

  
      }
    }

    this.http.get(`${this.url}/carro/placa/${this.carro['placa']}`).subscribe(
      (data) => {
        if (data) {
          this.placaDuplicado = true;
        } else {
          this.placaDuplicado = false;
        }
      },
      (err) => console.error(err))
  }

}