import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../../../config.service';

@Component({
  selector: 'app-Carro-detail',
  templateUrl: './Carro-detail.component.html',
  styleUrls: ['./Carro-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarroDetailComponent implements OnInit {
  url: string;
  carro = {};

  constructor(private route: ActivatedRoute, private config: ConfigService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.url = this.config.getConfig();
    this.getCarroDetail(this.route.snapshot.params['id']);
  }

  getCarroDetail(id) {
   
    this.http.get(`${this.url}/carro/${id}`).subscribe(data => {
      this.carro = data;
    });
  }

  
  deleteCarro(id) {
    this.http.delete(`${this.url}/carro/${id}`)
      .subscribe(res => {
          this.router.navigate(['/principal/carros']);
        }, (err) => {
          console.log(err);
        }
      );
  }


  
}