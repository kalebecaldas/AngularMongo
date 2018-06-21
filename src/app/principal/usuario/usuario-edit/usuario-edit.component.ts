import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../config.service';
import { MatSnackBar } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsuarioEditComponent implements OnInit {
  url: string;
  usuario= {};

  constructor(private http: HttpClient, private config: ConfigService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.url = this.config.getConfig();
    this.getUsuario(this.route.snapshot.params['id']);
  }

  getUsuario(id) {
    this.http.get(`${this.url}/usuario/${id}`).subscribe(data => {
      this.usuario = data;
    });
  }

  updateUsuario(id) {
    this.http.post(`${this.url}/usuario/${id}`, this.usuario)
      .subscribe(res => {
          this.snackBar.open('Alterações salvas com sucesso.', 'Fechar');
          this.router.navigate(['/principal/usuarios']);
        }, (err) => {
          this.snackBar.open('Ocorreu um erro, tente novamente.', 'Fechar');
          console.log(err);
        }
      );
  }

  deleteUsuario(id) {
    this.http.delete(`${this.url}/usuario/${id}`)
      .subscribe(res => {
        this.snackBar.open('Usuário excluído com sucesso.', 'Fechar');
          this.router.navigate(['/principal/usuarios']);
        }, (err) => {
          this.snackBar.open('Ocorreu um erro, tente novamente.', 'Fechar');
          console.log(err);
        }
      );
  }

}