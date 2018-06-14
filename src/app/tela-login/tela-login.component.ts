import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
  @ViewChild('inputUsuario') inputUsuario;
  @ViewChild('inputSenha') inputSenha;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin() {
    this.authService.login(this.inputUsuario.nativeElement.value, this.inputSenha.nativeElement.value);
  }

}
