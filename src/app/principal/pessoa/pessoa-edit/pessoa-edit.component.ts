import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../config.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pessoa-edit',
  templateUrl: './pessoa-edit.component.html',
  styleUrls: ['./pessoa-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PessoaEditComponent implements OnInit {
  url: string;
  pessoa = {};

  constructor(private http: HttpClient, private config: ConfigService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.url = this.config.getConfig();
    this.getPessoa(this.route.snapshot.params['id']);
  }

  getPessoa(id) {
    this.http.get(`${this.url}/pessoa/${id}`).subscribe(data => {
      this.pessoa = data;
    });
  }

  adicionarCampo() {
    this.pessoa['outros'].push({nome: '', valor: ''});
  }

  removerCampo(index) {
    this.pessoa['outros'].splice(index, index+1);
  }

  updatePessoa(id) {
    this.http.post(`${this.url}/pessoa/${id}`, this.pessoa)
      .subscribe(res => {
        this.snackBar.open('Alterações salvas com sucesso!', 'Fechar');
        this.router.navigate(['/principal/pessoas']);
      }, (err) => {
        this.snackBar.open('Ocorreu um erro, tente novamente.', 'Fechar');
        console.log(err);
      }
      );
  }

  deletePessoa(id) {
    this.http.delete(`${this.url}/pessoa/${id}`)
      .subscribe(res => {
          this.snackBar.open('Registro excluído com sucesso!', 'Fechar');
          this.router.navigate(['/principal/pessoas']);
        }, (err) => {
          this.snackBar.open('Ocorreu um erro, tente novamente.', 'Fechar');
          console.log(err);
        }
      );
  }

}