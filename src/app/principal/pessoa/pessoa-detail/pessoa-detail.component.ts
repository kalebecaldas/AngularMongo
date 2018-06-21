import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../../../config.service';
import { MatSnackBar } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-Pessoa-detail',
  templateUrl: './Pessoa-detail.component.html',
  styleUrls: ['./Pessoa-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PessoaDetailComponent implements OnInit {
  url: string;
  pessoa = {};

  constructor(private route: ActivatedRoute, private config: ConfigService, private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.url = this.config.getConfig();
    this.getPessoaDetail(this.route.snapshot.params['id']);
  }

  getPessoaDetail(id) {
   
    this.http.get(`${this.url}/pessoa/${id}`).subscribe(data => {
      this.pessoa = data;
    });
  }

  
  deletePessoa(id) {
    this.http.delete(`${this.url}/pessoa/${id}`)
      .subscribe(res => {
        this.snackBar.open('Registro excluído com sucesso.', 'Fechar');
          this.router.navigate(['']);
        }, (err) => {
          this.snackBar.open('Ocorreu um erro, tente novamente.', 'Fechar');
          console.log(err);
        }
      );
  }


  
}