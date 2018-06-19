import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogout() {
    this.authService.logout();
  }


  
}
