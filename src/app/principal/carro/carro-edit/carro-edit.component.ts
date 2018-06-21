import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../config.service';
import { MatSnackBar } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-carro-edit',
  templateUrl: './carro-edit.component.html',
  styleUrls: ['./carro-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarroEditComponent implements OnInit {
  url: string;
  carro = {};

  constructor(private http: HttpClient, private config: ConfigService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.url = this.config.getConfig();
    this.getCarro(this.route.snapshot.params['id']);
  }

  getCarro(id) {
    this.http.get(`${this.url}/carro/${id}`).subscribe(data => {
      this.carro = data;
    });
  }

  adicionarCampo() {
    this.carro['outros'].push({nome: '', valor: ''});
  }

  removerCampo(index) {
    this.carro['outros'].splice(index, index+1);
  }

  updateCarro(id) {
    this.http.post(`${this.url}/carro/${id}`, this.carro)
      .subscribe(res => {
          this.snackBar.open('Alterações salvas com sucesso.', 'Fechar');
          this.router.navigate(['/principal/carros']);
        }, (err) => {
          this.snackBar.open('Ocorreu um erro, tente novamente.', 'Fechar');
          console.log(err);
        }
      );
  }

  deleteCarro(id) {
    this.http.delete(`${this.url}/carro/${id}`)
      .subscribe(res => {
          this.snackBar.open('Carro excluído com sucesso.', 'Fechar');
          this.router.navigate(['/principal/carros']);
        }, (err) => {
          this.snackBar.open('Ocorreu um erro, tente novamente.', 'Fechar');
          console.log(err);
        }
      );
  }

}