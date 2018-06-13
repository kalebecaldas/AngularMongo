import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { when } from 'q';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {
  //@ViewChild('inputCpf') cpf;
  cpfDuplicado = false;
  cpfValido = true;

  book = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveBook() {
    this.http.post('/book', this.book)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  validarCpf() {
    this.cpfValido = false;

    if (this.book['title']) {
      if(this.book['title'].length === 11) {      
        let numeroCpf = [];
        this.book['title'].split('').forEach(element => {
          numeroCpf.push(+element);
        });

        this.cpfValido = this.validarDigitoCpf(numeroCpf);
      }
    }

    this.http.get(`/book/bycpf/${this.book['title']}`).subscribe(
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