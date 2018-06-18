import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../../../config.service';

@Component({
  selector: 'app-Usuario-detail',
  templateUrl: './Usuario-detail.component.html',
  styleUrls: ['./Usuario-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsuarioDetailComponent implements OnInit {
  url: string;
  usuario :any;

  constructor(private route: ActivatedRoute, private config: ConfigService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.url = this.config.getConfig();
    this.getUsuarioDetail(this.route.snapshot.params['id']);
  }

  getUsuarioDetail(id) {
    this.http.get(`${this.url}/usuario/${id}`).subscribe(data => {
      this.usuario = data;
    });
  }

  
  deleteUsuario(id) {
    this.http.delete(`${this.url}/usuario/${id}`)
      .subscribe(res => {
          this.router.navigate(['']);
        }, (err) => {
          console.log(err);
        }
      );
  }


  
}