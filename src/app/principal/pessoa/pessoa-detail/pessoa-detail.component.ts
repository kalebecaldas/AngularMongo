import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Pessoa-detail',
  templateUrl: './Pessoa-detail.component.html',
  styleUrls: ['./Pessoa-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PessoaDetailComponent implements OnInit {

  pessoa = {};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getPessoaDetail(this.route.snapshot.params['id']);
  }

  getPessoaDetail(id) {
    this.http.get('/pessoa/'+id).subscribe(data => {
      this.pessoa = data;
    });
  }

  
  deletePessoa(id) {
    this.http.delete('/pessoa/'+id)
      .subscribe(res => {
          this.router.navigate(['']);
        }, (err) => {
          console.log(err);
        }
      );
  }


  
}