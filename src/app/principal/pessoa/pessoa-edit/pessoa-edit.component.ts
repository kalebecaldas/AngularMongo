import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../config.service';

@Component({
  selector: 'app-pessoa-edit',
  templateUrl: './pessoa-edit.component.html',
  styleUrls: ['./pessoa-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PessoaEditComponent implements OnInit {
  url: string;
  pessoa : any;

  constructor(private http: HttpClient, private config: ConfigService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.url = this.config.getConfig();
    this.getPessoa(this.route.snapshot.params['id']);
  }

  getPessoa(id) {
    this.http.get(`${this.url}/pessoa/${id}`).subscribe(data => {
      this.pessoa = data;
    });
  }

  updatePessoa(id) {
    this.http.post(`${this.url}/pessoa/${id}`, this.pessoa)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  deletePessoa(id) {
    this.http.delete(`${this.url}/pessoa/${id}`)
      .subscribe(res => {
          this.router.navigate(['']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}