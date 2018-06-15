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

  Pessoa = {};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getPessoaDetail(this.route.snapshot.params['id']);
  }

  getPessoaDetail(id) {
    this.http.get('/Pessoa/'+id).subscribe(data => {
      this.Pessoa = data;
    });
  }

  
  deletePessoa(id) {
    this.http.delete('/Pessoa/'+id)
      .subscribe(res => {
          this.router.navigate(['/Pessoas-details']);
        }, (err) => {
          console.log(err);
        }
      );
  }


  
}