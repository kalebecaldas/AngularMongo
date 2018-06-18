import { Component, OnInit } from '@angular/core';


import fontawesome from '@fortawesome/fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid';
import faAccessibleIcon from '@fortawesome/fontawesome-free-brands'; 
import { ConfigService } from '../../config.service';
import { HttpClient } from '@angular/common/http';

fontawesome.library.add(faUser);
fontawesome.library.add(faAccessibleIcon);

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})

export class CarroComponent implements OnInit {
  carros: any;
  item: string;
  url: string;

  constructor(private http: HttpClient, private config: ConfigService) { }

  ngOnInit() {
    this.url = this.config.getConfig();

    this.http.get(`${this.url}/carro`).subscribe(data => {
      this.carros = data;
    }, err => {
      console.error(err);
    });
  }
}