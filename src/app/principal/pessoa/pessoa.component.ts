import { Component, OnInit } from '@angular/core';


import fontawesome from '@fortawesome/fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid';
import faAccessibleIcon from '@fortawesome/fontawesome-free-brands'; 
import { ConfigService } from '../../config.service';
import { HttpClient } from '@angular/common/http';

fontawesome.library.add(faUser);
fontawesome.library.add(faAccessibleIcon);

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})

export class PessoaComponent implements OnInit {
  pessoas= {};
  item: string;
  url: string;

  constructor(private http: HttpClient, private config: ConfigService) { }

  ngOnInit() {
    this.url = this.config.getConfig();

    this.http.get(`${this.url}/pessoa`).subscribe(data => {
      this.pessoas = data;
    }, err => {
      console.error(err);
    });
  }
}