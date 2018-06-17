import { Component, OnInit } from '@angular/core';


import fontawesome from '@fortawesome/fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid';
import faAccessibleIcon from '@fortawesome/fontawesome-free-brands'; 
import { ConfigService } from '../../config.service';
import { HttpClient } from '@angular/common/http';

fontawesome.library.add(faUser);
fontawesome.library.add(faAccessibleIcon);

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {
  usuarios: any;
  item: string;
  url: string;

  constructor(private http: HttpClient, private config: ConfigService) { }

  ngOnInit() {
    this.url = this.config.getConfig();

    this.http.get(`${this.url}/usuario`).subscribe(data => {
      this.usuarios = data;
    }, err => {
      console.error(err);
    });
  }
}