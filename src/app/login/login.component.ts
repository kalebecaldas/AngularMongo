import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('inputUsuario') inputUsuario;
  @ViewChild('inputSenha') inputSenha;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin() {
    //this.authService.login(this.inputUsuario.nativeElement.value, this.inputSenha.nativeElement.value);
  }

}
