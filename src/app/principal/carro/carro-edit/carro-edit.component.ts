import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../config.service';

@Component({
  selector: 'app-carro-edit',
  templateUrl: './carro-edit.component.html',
  styleUrls: ['./carro-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarroEditComponent implements OnInit {
  url: string;
  carro = {};

  constructor(private http: HttpClient, private config: ConfigService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.url = this.config.getConfig();
    this.getCarro(this.route.snapshot.params['id']);
  }

  getCarro(id) {
    this.http.get(`${this.url}/carro/${id}`).subscribe(data => {
      this.carro = data;
    });
  }

  updateCarro(id) {
    this.http.post(`${this.url}/carro/${id}`, this.carro)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  deleteCarro(id) {
    this.http.delete(`${this.url}/carro/${id}`)
      .subscribe(res => {
          this.router.navigate(['']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}