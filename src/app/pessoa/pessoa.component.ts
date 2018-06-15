import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnChanges } from '@angular/core'

import fontawesome from '@fortawesome/fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid';
import faAccessibleIcon from '@fortawesome/fontawesome-free-brands'; 

fontawesome.library.add(faUser);
fontawesome.library.add(faAccessibleIcon);

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})

export class PessoaComponent implements OnInit {
  pessoas: any;
  item: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/pessoa').subscribe(data => {
      this.pessoas = data;
    }, err => {
      console.error(err);
    });
  }
}
