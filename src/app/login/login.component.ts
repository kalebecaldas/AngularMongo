import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string;
  senha: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  fazerLogin() {
    this.authService.login(this.usuario, this.senha).subscribe(
    (data) => {},
    (err) => {},
    () => {
      if (this.authService.usuarioLogado !== undefined) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/principal';
  
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

}
